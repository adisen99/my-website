"use client";
import { motion } from "framer-motion";

// 1. Data: In the future, you can move this to a separate file
const photos = [
  { id: 1, src: "/photography/shot1.jpg", title: "Project Alpha" },
  { id: 2, src: "/photography/shot2.jpg", title: "Field Study" },
];

export default function PhotographyPage() {
  return (
    <main className="max-w-6xl mx-auto p-8">
      <header className="mb-12">
        <h1 className="text-3xl font-serif font-bold">Photography</h1>
        <p className="text-gray-500">A collection of moments from the field and beyond.</p>
      </header>

      {/* 2. Grid Layout */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {photos.map((photo) => (
          <motion.div
            key={photo.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 0.98 }} // Elegant "press" effect
            className="relative aspect-[4/5] overflow-hidden rounded-sm bg-gray-100 cursor-pointer"
          >
            <img
              src={photo.src}
              alt={photo.title}
              className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
            />
            {/* Subtle overlay for the title */}
            <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
              <p className="text-white text-xs uppercase tracking-widest">{photo.title}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
}