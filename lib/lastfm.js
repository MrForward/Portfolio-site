// Last.fm API utility functions
// Get your API key from: https://www.last.fm/api/account/create

const LASTFM_API_KEY = process.env.LASTFM_API_KEY;
const LASTFM_USERNAME = process.env.LASTFM_USERNAME;

const LASTFM_API_URL = 'https://ws.audioscrobbler.com/2.0/';

/**
 * Get the currently playing or last played track from Last.fm
 */
export const getNowPlaying = async () => {
    // Check if credentials are configured
    if (!LASTFM_API_KEY || !LASTFM_USERNAME) {
        console.error('Last.fm credentials not configured. Please set LASTFM_API_KEY and LASTFM_USERNAME in .env.local');
        return { isPlaying: false };
    }

    const params = new URLSearchParams({
        method: 'user.getrecenttracks',
        user: LASTFM_USERNAME,
        api_key: LASTFM_API_KEY,
        format: 'json',
        limit: '1',
    });

    try {
        const response = await fetch(`${LASTFM_API_URL}?${params}`, { cache: 'no-store' });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Last.fm API error:', response.status, errorText);
            throw new Error(`Failed to fetch from Last.fm: ${response.status}`);
        }

        const data = await response.json();

        // Handle case where track can be object or array
        const trackData = data.recenttracks?.track;

        if (!trackData) {
            console.log('No track data found in Last.fm response');
            return { isPlaying: false };
        }

        // Last.fm returns array when multiple tracks, object when single track
        const track = Array.isArray(trackData) ? trackData[0] : trackData;

        if (!track) {
            return { isPlaying: false };
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
        return { isPlaying: false };
    }
};
