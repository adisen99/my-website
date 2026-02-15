"use client";
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-6 border-b border-gray-100 dark:border-gray-800 transition-colors">
      <div className="font-bold text-xl tracking-tighter dark:text-white">
        <Link href="/">DR. NAME</Link>
      </div>
      
      <div className="flex items-center space-x-6 md:space-x-8">
        {/* Navigation Links */}
        <div className="hidden sm:flex space-x-6 text-sm font-medium text-gray-600 dark:text-gray-400">
          <Link href="/" className="hover:text-black dark:hover:text-white transition">Home</Link>
          <Link href="/about" className="hover:text-black dark:hover:text-white transition">About</Link>
          <Link href="/blog" className="hover:text-black dark:hover:text-white transition">Blog</Link>
          <Link href="/publications" className="hover:text-black dark:hover:text-white transition">Publications</Link>
          <Link href="/talks" className="hover:text-black dark:hover:text-white transition">Talks</Link>
          <Link href="/photography" className="hover:text-black dark:hover:text-white transition">Photography</Link>
        </div>
        
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
