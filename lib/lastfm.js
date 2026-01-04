// Last.fm API utility functions
// Get your API key from: https://www.last.fm/api/account/create

const LASTFM_API_URL = 'https://ws.audioscrobbler.com/2.0/';

/**
 * Get the currently playing or last played track from Last.fm
 */
export const getNowPlaying = async () => {
    const apiKey = process.env.LASTFM_API_KEY?.trim();
    const username = process.env.LASTFM_USERNAME?.trim();

    // Check if credentials are configured
    if (!apiKey || !username) {
        console.error('Last.fm credentials not configured. API Key:', !!apiKey, 'Username:', !!username);
        return { isPlaying: false, errorCode: 'MISSING_ENV_VARS' };
    }

    const params = new URLSearchParams({
        method: 'user.getrecenttracks',
        user: username,
        api_key: apiKey,
        format: 'json',
        limit: '1',
    });

    try {
        const response = await fetch(`${LASTFM_API_URL}?${params}`, { cache: 'no-store' });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Last.fm API error:', response.status, errorText);
            // Return the specific error text explicitly so it's visible in the client
            return {
                isPlaying: false,
                errorCode: 'API_ERROR',
                message: `Last.fm ${response.status}: ${errorText}`
            };
        }

        const data = await response.json();

        // Check for Last.fm API errors in the JSON response
        if (data.error) {
            console.error('Last.fm API returned error:', data.message);
            return { isPlaying: false, errorCode: 'LASTFM_API_ERROR', message: data.message };
        }

        // Handle case where track can be object or array
        const trackData = data.recenttracks?.track;

        if (!trackData) {
            console.log('No track data found in Last.fm response');
            return { isPlaying: false, errorCode: 'NO_TRACK_DATA' };
        }

        // Last.fm returns array when multiple tracks, object when single track
        const track = Array.isArray(trackData) ? trackData[0] : trackData;

        if (!track) {
            return { isPlaying: false, errorCode: 'EMPTY_TRACK_LIST' };
        }

        // Check if currently playing (has @attr.nowplaying)
        const isPlaying = track['@attr']?.nowplaying === 'true';

        // Get the largest available album art
        const images = track.image || [];
        const albumImageUrl = images.find(img => img.size === 'extralarge')?.['#text'] ||
            images.find(img => img.size === 'large')?.['#text'] ||
            images[images.length - 1]?.['#text'] || null;

        return {
            isPlaying,
            title: track.name,
            artist: track.artist?.['#text'] || track.artist?.name || 'Unknown Artist',
            album: track.album?.['#text'] || '',
            albumImageUrl: albumImageUrl && albumImageUrl !== '' ? albumImageUrl : null,
            songUrl: track.url,
        };
    } catch (error) {
        console.error('Error in getNowPlaying:', error);
        return { isPlaying: false, errorCode: 'EXCEPTION', message: error.message };
    }
};
