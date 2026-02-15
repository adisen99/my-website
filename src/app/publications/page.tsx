"use client";
import { motion } from "framer-motion";
import { ExternalLink, ChevronDown } from "lucide-react";

// The data structure now needs a year property
const allPapers = [
  {
    title: "Accessible Touch: Rethinking Mobile Interaction for Motor Impairments",
    authors: "Jane Smith, Alice Johnson, Bob Williams",
    year: "2025",
    venue: "CHI '25: ACM Conference on Human Factors in Computing Systems",
    link: "#",
    type: "Conference"
  },
  {
    title: "AI-Powered Accessibility Assessment: A Large-Scale Study",
    authors: "Jane Smith, Carol Davis",
    year: "2024",
    venue: "ASSETS '24: ACM SIGACCESS Conference",
    link: "#",
    type: "Conference"
  },
  {
    title: "Inclusive Design Patterns for Web Applications",
    authors: "Jane Smith",
    year: "2024",
    venue: "ACM Computing Surveys",
    link: "#",
    type: "Journal"
  },
  {
    title: "Understanding Developer Practices in Accessibility",
    authors: "Eve Martinez, Jane Smith",
    year: "2023",
    venue: "ICSE 123: International Conference on Software Engineering",
    link: "#",
    type: "Conference"
  }
];

// Helper function to group publications by year
const papersByYear = allPapers.reduce((acc, paper) => {
  (acc[paper.year] = acc[paper.year] || []).push(paper);
  return acc;
}, {} as Record<string, typeof allPapers>);

export default function Publications() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-12 dark:text-white">Publications</h1>
      
      {/* Loop through the years in reverse order (newest first) */}
      {Object.keys(papersByYear).sort((a, b) => parseInt(b) - parseInt(a)).map(year => (
        <section key={year} className="mb-16">
          <h2 className="text-2xl font-bold mb-8 dark:text-zinc-400">{year}</h2>
          
          <div className="space-y-12">
            {papersByYear[year].map((paper, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <h3 className="text-lg font-semibold text-white dark:text-white group-hover:text-blue-400 transition-colors flex items-center gap-2">
                  <a href={paper.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    {paper.title} 
                    <ExternalLink size={14} className="text-zinc-500 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </a>
                </h3>
                
                <p className="text-sm text-zinc-500 mb-2">{paper.authors}</p>
                
                <div className="flex items-center gap-3">
                  <span className="text-sm text-zinc-600 dark:text-zinc-400">{paper.venue}</span>
                  <span className="px-2 py-0.5 text-xs uppercase tracking-widest bg-zinc-800 text-zinc-400 border border-zinc-700 rounded">
                    {paper.type}
                  </span>
                </div>

                <button className="flex items-center gap-1 text-sm text-blue-500 mt-2 hover:underline">
                    Show abstract <ChevronDown size={14} />
                </button>

              </motion.div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
