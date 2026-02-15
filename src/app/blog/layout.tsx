import Link from 'next/link';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <Link href="/blog" className="flex items-center gap-2 text-zinc-500 hover:text-blue-600 transition-colors mb-8 dark:text-zinc-400 dark:hover:text-blue-400">
         Back to Blog
      </Link>

      {/* This simple class is all you need for beautiful styling */}
      <article className="prose dark:prose-invert max-w-4xl mx-auto">
        {children}
      </article>

    </div>
  );
}
