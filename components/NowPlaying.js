import { useState, useEffect } from 'react';
import Image from 'next/image';

// Neon Glow Vinyl record - dark vinyl with cyan/pink edge glow, continuously spinning
const VinylRecord = ({ albumArt }) => (
    <div className="relative w-8 h-8 flex-shrink-0 animate-spin" style={{ animationDuration: '3s' }}>
        {/* Neon glow effect - cyan to pink gradient shadow */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full opacity-75 blur-[2px]" />

        {/* Outer vinyl ring - dark base */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black rounded-full shadow-lg" />

        {/* Vinyl grooves with subtle shine */}
        <div className="absolute inset-[2px] bg-gray-950 rounded-full" />
        <div className="absolute inset-[3px] bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-full" />
        <div className="absolute inset-[5px] bg-gray-950 rounded-full" />
        <div className="absolute inset-[6px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-full" />

        {/* Inner label/album art circle with neon accent */}
        <div className="absolute inset-[8px] rounded-full overflow-hidden bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500">
            {albumArt && (
                <Image
                    src={albumArt}
                    alt="Album"
                    fill
                    className="object-cover"
                    sizes="16px"
                    unoptimized
                />
            )}
        </div>

        {/* Center spindle hole */}
        <div className="absolute inset-[12px] bg-gray-900 rounded-full border border-gray-700" />
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

    return (
        <div className="mt-12 text-sm text-gray-500 dark:text-gray-400">
            {/* Vertical stack on mobile, inline on desktop */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                {/* Music Status */}
                {song?.title && (
                    <a
                        href={song.songUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start sm:items-center gap-2.5 hover:text-gray-700 dark:hover:text-gray-200 transition-colors"
                    >
                        <VinylRecord albumArt={song.albumImageUrl} />
                        <span className="leading-snug flex-1">
                            {song.isPlaying ? 'Listening to' : 'Last played'}{' '}
                            <span className="text-gray-700 dark:text-gray-200 font-medium">
                                {song.title}
                            </span>
                            {' '}by{' '}
                            <span className="text-gray-700 dark:text-gray-200 font-medium">
                                {song.artist}
                            </span>
                        </span>
                        <svg className="w-3.5 h-3.5 opacity-50 flex-shrink-0 mt-1 sm:mt-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                )}

                {/* Separator - only on desktop */}
                {song?.title && (
                    <span className="text-gray-300 dark:text-gray-600 hidden sm:inline">|</span>
                )}

                {/* Status/Location - aligned with icon column on mobile */}
                <div className="flex items-center gap-2.5">
                    {/* Spacer to align with vinyl record on mobile */}
                    <div className="w-8 flex justify-center sm:hidden">
                        <span className="text-base">{status.emoji}</span>
                    </div>
                    {/* Desktop emoji */}
                    <span className="hidden sm:inline">{status.emoji}</span>
                    <span>{status.location}</span>
                </div>
            </div>
        </div>
    );
}
