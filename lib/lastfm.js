// Last.fm API utility functions
// Get your API key from: https://www.last.fm/api/account/create

const LASTFM_API_KEY = process.env.LASTFM_API_KEY;
const LASTFM_USERNAME = process.env.LASTFM_USERNAME;

const LASTFM_API_URL = 'https://ws.audioscrobbler.com/2.0/';

/**
 * Get the currently playing or last played track from Last.fm
 */
export const getNowPlaying = async () => {
    const params = new URLSearchParams({
        method: 'user.getrecenttracks',
        user: LASTFM_USERNAME,
        api_key: LASTFM_API_KEY,
        format: 'json',
        limit: '1',
    });

    const response = await fetch(`${LASTFM_API_URL}?${params}`);

    if (!response.ok) {
        throw new Error('Failed to fetch from Last.fm');
    }

    const data = await response.json();

    // Handle case where track can be object or array
    const trackData = data.recenttracks?.track;

    if (!trackData) {
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
};
