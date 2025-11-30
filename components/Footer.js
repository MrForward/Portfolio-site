const Footer = () => {
    return (
      <footer className="py-10 mt-20 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
        <div className="flex justify-center gap-6 mb-4">
           {/* Social Icons Placeholders */}
           <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Twitter</a>
           <a href="#" className="hover:text-black dark:hover:text-white transition-colors">GitHub</a>
           <a href="#" className="hover:text-black dark:hover:text-white transition-colors">LinkedIn</a>
        </div>
        <p>© {new Date().getFullYear()} Minimal Portfolio. All rights reserved.</p>
      </footer>
    );
  };
  
  export default Footer;
  