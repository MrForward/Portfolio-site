import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState('light');

  // Only run on client to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
    // Check local storage or system preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <button
        className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
        aria-label="Toggle Dark Mode"
      >
        <div className="h-5 w-5" />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
      aria-label="Toggle Dark Mode"
    >
      {theme === 'light' ? (
        // Moon icon (shown in light mode, click to switch to dark)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-700"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        // Sun icon (shown in dark mode, click to switch to light)
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-yellow-400"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
        </svg>
      )}
    </button>
  );
}
