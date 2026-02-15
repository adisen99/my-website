"use client";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from 'next/link';

// Data for the recent updates section
const updates = [
  {
    date: "2025-12-15",
    text: "New briefing note on climat beyond Net Zero now out on ARC Centre of Excellence for 21st Century Weather website.",
    link: "https://21centuryweather.org.au/engage/topic-briefs/beyond-net-zero/"
  },
  {
    date: "2024-05-10",
    text: "Read our new Conversation article on how far we have come in understanding the climate system and it's changes, and where we are headed ahead of COP30",
    link: "https://21centuryweather.org.au/engage/conversation/understanding-the-climate-system/"
  },
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
            <h1 className="text-4xl font-bold">Aditya Sengupta</h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-300">
            PhD student, Climate Science, University of Melbourne
          </p>
          <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-400">
            {/* add a quotation here with a long line on left spanning the entire quote multi-line and lighter colors compared to text that follows*/}
            <span className="block border-l-4 border-zinc-300 dark:border-zinc-600 pl-4 italic text-zinc-500 dark:text-zinc-400 mb-4">
              "Any fool can know, the point is to understand. If you can't explain it simply, you don't understand it well enough." - Albert Einstein</span>
          </p>
          <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-400">
            I am a PhD student and researcher at the University of Melbourne, where I explore the intricacies of the Earth's climate system and its impacts on society. 
            My work focuses on understanding the complex interactions between atmospheric processes, ocean dynamics, and its impacts on human systems. 
            This website serves as a platform to share my research, insights, projects and life with the broader community. Feel free to explore and connect!
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
        className="border-t border-zinc-200 dark:border-zinc-700 mt-16 pt-12"
      >
        <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-600 dark:text-zinc-400 mb-6">Recent Updates</h2>
        <div className="space-y-4">
          {updates.map((update) => (
            <div key={update.date} className="flex flex-col md:flex-row gap-2">
              <span className="text-sm font-mono text-zinc-500 dark:text-zinc-400 w-24 flex-shrink-0">{update.date}</span>
                <a href={update.link} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-2 transition-colors">
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
