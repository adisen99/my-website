"use client";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from 'next/link';

// Data for the recent updates section
const updates = [
  {
    date: "2024-06-15",
    text: "Published a new paper on inclusive design in ACM CHI 2024.",
    link: "https://example.com/paper1"
  },
  {
    date: "2024-05-10",
    text: "Presented at the Accessibility Summit 2024.",
    link: "https://example.com/presentation"
  },
  {
    date: "2024-04-22",
    text: "Launched a new research project on assistive technologies.",
    link: "https://example.com/project"
  }
]

export default function Home() {
  return (
    // Removed min-h-[calc(100vh-100px)] and flex classes. 
    // The global layout's flex-grow handles this now.
    <main className="max-w-6xl mx-auto px-6 py-16">
      {/* Main Bio Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
        {/* Left: Tall Image */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="md:col-span-1">
          <div className="aspect-[3/4] w-full relative overflow-hidden rounded-lg">
            <img src="/images/home_page.jpg" alt="Profile" className="object-cover w-full h-full" />
          </div>
        </motion.div>
        
        {/* Right: Bio & Quote */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="md:col-span-2 space-y-6">
          <h1 className="text-4xl font-bold dark:text-white">Dr. Your Name</h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-300">
            Assistant Professor of Computer Science, University Name
          </p>
          <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-400">
            "I research human-computer interaction and accessibility. My work focuses on designing inclusive technologies that empower diverse communities."
          </p>
          <Link href="/about" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium group">
            More about me <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      {/* Recent Updates Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
        // Added mt-16 for space above this section. Removed pt-12.
        className="border-t border-zinc-100 dark:border-zinc-800 mt-16 pt-12" 
      >
        <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500 mb-6">Recent Updates</h2>
        <div className="space-y-4">
          {updates.map((update) => (
            <div key={update.date} className="flex flex-col md:flex-row gap-2">
              <span className="text-sm font-mono text-zinc-400 w-24 flex-shrink-0">{update.date}</span>
              <a href={update.link} target="_blank" rel="noopener noreferrer" className="text-zinc-700 dark:text-zinc-300 hover:underline hover:text-blue-600 flex items-center gap-2">
                {update.text}
                <ExternalLink size={14} />
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
