import { getNowPlaying } from '../../../lib/lastfm';

export default async function handler(req, res) {
    // Set CORS and caching headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'public, s-maxage=30, stale-while-revalidate=15');

    try {
        const song = await getNowPlaying();
        return res.status(200).json(song);
    } catch (error) {
        console.error('Last.fm API error:', error);
        return res.status(500).json({ error: 'Failed to fetch Last.fm data', isPlaying: false });
    }
}
