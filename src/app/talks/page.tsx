"use client";
import { motion } from "framer-motion";
import { MapPin, Presentation, Video, ChevronRight, Download } from "lucide-react";

// Updated data to match the content in the image
const allTalks = [
  {
    title: "The Future of Inclusive AI",
    date: "March 15, 2024",
    venue: "Tech Innovators Conference",
    location: "San Francisco, CA",
    tag: "Keynote",
    link: "https://example.com/future-of-inclusive-ai",
    linkText: "Video",
  },
  {
    title: "Advancements in Machine Learning", 
    date: "April 10, 2024",
    venue: "AI Summit 2024",
    location: "New York, NY",
    tag: "Panel",
    link: "https://example.com/advancements-in-machine-learning",
    linkText: "Slides",
  },
  {
    title: "Ethics in Artificial Intelligence",
    date: "May 22, 2023",
    venue: "Global Tech Forum",
    location: "London, UK",
    tag: "Invited",
    link: "https://example.com/ethics-in-ai",
    linkText: "Video",
  },
  {
    title: "AI for Social Good",
    date: "November 5, 2023",
    venue: "Social Impact Conference",
    location: "Toronto, Canada",
    tag: "Seminar",
    link: "https://example.com/ai-for-social-good",
    linkText: "Slides",
  },
]

// Helper function to group talks by year
const talksByYear = allTalks.reduce((acc, talk) => {
  const year = talk.date.slice(-4);
  (acc[year] = acc[year] || []).push(talk);
  return acc;
}, {} as Record<string, typeof allTalks>);

export default function TalksPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-12">Talks & Presentations</h1>
      
      {/* Loop through the years in reverse order (newest first) */}
      {Object.keys(talksByYear).sort((a, b) => parseInt(b) - parseInt(a)).map(year => (
        <section key={year} className="mb-16">
          <h2 className="text-xl font-bold mb-8 text-zinc-500 dark:text-zinc-500">{year}</h2>
          
          <div className="space-y-0">
            {talksByYear[year].map((talk, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                // Added border-b for the divider line seen in the image
                className="group relative py-8 border-b border-zinc-200 dark:border-zinc-700 last:border-b-0"
              >
                <div className="flex justify-between items-start">
                  <div>
                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2">
                      {talk.title}
                    </h3>
                    
                    {/* Date and Location */}
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
                      {talk.venue}
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
                      {talk.date} <MapPin size={12} /> {talk.location}
                    </p>

                    {/* Description (as seen in the first entry in the image) */}
                    {talk.title === "The Future of Inclusive AI" && (
                        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl">
                            Exploring how artificial intelligence can be designed to serve all users.
                        </p>
                    )}

                    {/* Slides/Video Link */}
                    {talk.linkText && (
                        <a href={talk.link} className="mt-3 flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                            {talk.linkText === "Video" ? <Video size={14}/> : <Presentation size={14}/>}
                            {talk.linkText}
                        </a>
                    )}
                  </div>

                  {/* Tag (Keynote, Seminar, Invited) on the right */}
                  <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 ml-4 rounded-full bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 whitespace-nowrap">
                    {talk.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
