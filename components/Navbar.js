import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Work', path: '/work' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <nav ref={menuRef} className="relative flex justify-between items-center py-10 mb-12">
      {/* Brand */}
      <div className="text-xl font-bold tracking-tight flex-shrink-0 mr-6 z-50">
        <Link href="/">
          Krishna.
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        <ul className="flex gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={`hover:text-indigo-500 transition-colors ${router.pathname === item.path
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-600 dark:text-gray-400'
                  }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>

      {/* Mobile: Theme Toggle + Hamburger */}
      <div className="flex md:hidden items-center gap-4 z-50">
        <ThemeToggle />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 -mr-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            // Close Icon (X)
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 shadow-lg z-40 md:hidden transform transition-all duration-300 ease-out ${isMenuOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        <ul className="py-4 px-6 space-y-1">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.path}
                className={`block py-3 text-lg font-medium transition-colors ${router.pathname === item.path
                    ? 'text-indigo-600 dark:text-indigo-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400'
                  }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
