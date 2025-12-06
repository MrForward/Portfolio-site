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
      {/* keep brand from shrinking and give it right margin for spacing */}
      <div className="text-xl font-bold tracking-tight flex-shrink-0 mr-6">
        <Link href="/">
          Krishna.
        </Link>
      </div>

      <div className="flex items-center gap-6">
        {/* add left margin on small screens so "About" doesn't sit too close to brand */}
        <ul className="flex gap-6 text-sm font-medium ml-2 sm:ml-6">
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
