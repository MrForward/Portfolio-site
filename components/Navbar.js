import Link from 'next/link';
import { useRouter } from 'next/router';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const router = useRouter();
  
  const navItems = [
    { name: 'About', path: '/about' }, 
    { name: 'Work', path: '/work' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="flex justify-between items-center py-10 mb-12">
      <div className="text-xl font-bold tracking-tight">
        <Link href="/">
          Portfolio.
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <ul className="flex gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.path} className={`hover:text-blue-500 transition-colors ${router.pathname === item.path ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400'}`}>
                  {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
