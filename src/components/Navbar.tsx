"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoSrc = mounted && resolvedTheme === 'dark'
    ? '/images/logo_dark.png'
    : '/images/logo_light.png';

  return (
    <nav className="flex justify-between items-center p-6 border-b border-transparent transition-colors">
      <div>
        <Link href="/" className="inline-flex items-center" aria-label="Go to homepage">
          <Image
            src={logoSrc}
            alt="Aditya Sengupta"
            width={260}
            height={96}
            className="h-10 w-auto"
            priority
          />
        </Link>
      </div>
      
      <div className="flex items-center space-x-6 md:space-x-8">
        {/* Navigation Links */}
        <div className="hidden sm:flex space-x-6 text-sm font-medium">
          <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline underline-offset-4 transition-colors">Home</Link>
          <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline underline-offset-4 transition-colors">About</Link>
          <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline underline-offset-4 transition-colors">Blog</Link>
          <Link href="/cv" className="text-gray-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline underline-offset-4 transition-colors">CV</Link>
          <Link href="/publications" className="text-gray-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline underline-offset-4 transition-colors">Publications</Link>
          <Link href="/talks" className="text-gray-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline underline-offset-4 transition-colors">Talks</Link>
          <Link href="/photography" className="text-gray-600 dark:text-gray-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline underline-offset-4 transition-colors">Photography</Link>
        </div>
        
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
