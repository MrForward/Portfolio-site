import { useState, useEffect } from 'react';
import Image from 'next/image';

// Vinyl disk with album art - rotates on hover, works in light/dark mode
const VinylDisk = ({ albumArt, isHovered }) => (
    <div className={`relative w-8 h-8 flex-shrink-0 transition-transform duration-1000 ${isHovered ? 'rotate-180' : ''}`}>
        {/* Outer vinyl ring - adapts to theme */}
        <div className="absolute inset-0 bg-gray-300 dark:bg-gray-600 rounded-full shadow-sm" />
        {/* Vinyl grooves effect */}
        <div className="absolute inset-[3px] bg-gray-400 dark:bg-gray-700 rounded-full" />
        <div className="absolute inset-[5px] bg-gray-300 dark:bg-gray-600 rounded-full" />
        {/* Inner album art circle */}
        <div className="absolute inset-[7px] rounded-full overflow-hidden bg-gray-200 dark:bg-gray-500">
            {albumArt ? (
                <Image
                    src={albumArt}
                    alt="Album"
                    fill
                    className="object-cover"
                    sizes="18px"
                    unoptimized
                />
            ) : (
                <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-500" />
            )}
        </div>
        {/* Center hole */}
        <div className="absolute inset-[12px] bg-gray-100 dark:bg-gray-800 rounded-full" />
    </div>
);

// Get status based on time (IST timezone logic)
const getStatus = () => {
    const hour = new Date().getHours();

    if (hour >= 21 || hour < 2) {
        return { location: 'Deep work', emoji: '🌙' };
    } else if (hour >= 2 && hour < 7) {
        return { location: 'Sleeping', emoji: '😴' };
    } else if (hour >= 7 && hour < 10) {
        return { location: 'At Home', emoji: '🏠' };
    } else if (hour >= 10 && hour < 14) {
        return { location: 'Cafe Run', emoji: '☕' };
    } else {
        return { location: 'At Office', emoji: '💼' };
    }
};

export default function NowPlaying() {
    const [song, setSong] = useState(null);
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState({ location: 'Hyderabad', emoji: '📍' });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        setStatus(getStatus());

        const fetchNowPlaying = async () => {
            try {
                const res = await fetch('/api/lastfm/now-playing');
                if (!res.ok) throw new Error('Failed to fetch');
                const data = await res.json();
                // Only update if we have valid song data
                if (data.title) {
                    setSong(data);
                }
            } catch (err) {
                console.error('Error fetching music data:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchNowPlaying();

        // Refresh every 30 seconds
        const interval = setInterval(fetchNowPlaying, 30000);

        // Update status every minute
        const statusInterval = setInterval(() => setStatus(getStatus()), 60000);

        return () => {
            clearInterval(interval);
            clearInterval(statusInterval);
        };
    }, []);

    // Don't render until we have data
    if (loading && !song) {
        return null;
    }

    return (
        <div className="mt-12 text-sm text-gray-500 dark:text-gray-400">
            {/* Stack vertically on mobile, inline on desktop */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                {/* Music Status */}
                {song?.title && (
                    <a
                        href={song.songUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <VinylDisk albumArt={song.albumImageUrl} isHovered={isHovered} />
                        <span className="leading-snug">
                            Listening to{' '}
                            <span className="text-gray-700 dark:text-gray-200 font-medium">
                                {song.title}
                            </span>
                            {' '}by{' '}
                            <span className="text-gray-700 dark:text-gray-200 font-medium">
                                {song.artist}
                            </span>
                        </span>
                        <svg className="w-3.5 h-3.5 opacity-50 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                )}

                {/* Separator - only on desktop */}
                {song?.title && (
                    <span className="text-gray-300 dark:text-gray-600 hidden sm:inline">|</span>
                )}

                {/* Status/Location */}
                <div className="flex items-center gap-1.5">
                    <span>{status.emoji}</span>
                    <span>{status.location}</span>
                </div>
            </div>
        </div>
    );
}
