"use client";
import { motion } from "framer-motion";
import Link from 'next/link';
import { ArrowRight } from "lucide-react";

// Data for blog posts (you can replace this with a content management library later)
const blogPosts = [
  {
    slug: "reflections-on-chi-2025",
    title: "Reflections on CHI 2025",
    date: "January 8, 2025",
    description: "Thoughts on the latest trends in HCI research and what excites me about the field.",
    tag: "HCI Research"
  },
  {
    slug: "teaching-inclusive-design",
    title: "Teaching Inclusive Design",
    date: "November 15, 2024",
    description: "How I structure my course on accessibility and what students take away from it.",
    tag: "Education"
  }
];

export default function BlogListingPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-16 text-black dark:text-white">Blog</h1>
      
      <div className="space-y-0">
        {blogPosts.map((post) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="py-10 border-b border-zinc-200 dark:border-zinc-700 last:border-b-0"
          >
            <p className="text-sm font-mono text-zinc-500 mb-3">{post.date}</p>
            <h2 className="text-2xl font-bold mb-3 text-black dark:text-white group-hover:text-blue-600 transition-colors">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl">{post.description}</p>
            
            <div className="flex items-center gap-6">
                <Link href={`/blog/${post.slug}`} className="flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 group">
                    Read more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500">{post.tag}</span>
            </div>

          </motion.div>
        ))}
      </div>
    </main>
  );
}
