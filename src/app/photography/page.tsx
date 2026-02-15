"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";

const photos = [
  { id: 1, src: "/photography/shot1.jpg", title: "Shot 1" },
  { id: 2, src: "/photography/shot2.jpg", title: "Shot 2" },
];

export default function PhotographyPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = () => setActiveIndex(null);
  const showPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + photos.length) % photos.length);
  };
  const showNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % photos.length);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex]);

  return (
    <main className="max-w-6xl mx-auto p-8">
      <header className="mb-12">
        <h1 className="text-3xl font-serif font-bold">Photography</h1>
        <p className="text-gray-500">A collage of moments, automatically arranged by image dimensions.</p>
      </header>

      <motion.div
        className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]"
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
            whileHover={{ scale: 0.995 }}
            className="group relative mb-4 break-inside-avoid overflow-hidden rounded-sm bg-gray-100 cursor-zoom-in"
            onClick={() => setActiveIndex(photo.id - 1)}
          >
            <img
              src={photo.src}
              alt={photo.title}
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <p className="text-white text-xs uppercase tracking-widest">{photo.title}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={closeLightbox}
          >
            <button
              aria-label="Close image"
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-zinc-200/80 dark:bg-zinc-800/80 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
            >
              <X size={18} />
            </button>

            <button
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-4 sm:left-8 p-2 rounded-full bg-zinc-200/80 dark:bg-zinc-800/80 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            <motion.img
              key={photos[activeIndex].src}
              src={photos[activeIndex].src}
              alt={photos[activeIndex].title}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-h-[88vh] max-w-[88vw] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-4 sm:right-8 p-2 rounded-full bg-zinc-200/80 dark:bg-zinc-800/80 hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}