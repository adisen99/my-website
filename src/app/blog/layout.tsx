"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showBackLink = pathname !== '/blog';

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {showBackLink && (
        <Link href="/blog" className="flex items-center gap-2 text-zinc-500 hover:text-blue-600 transition-colors mb-8 dark:text-zinc-400 dark:hover:text-blue-400">
           Back to Blog
        </Link>
      )}

      {/* This simple class is all you need for beautiful styling */}
      <article className="prose dark:prose-invert max-w-4xl mx-auto">
        {children}
      </article>

    </div>
  );
}
