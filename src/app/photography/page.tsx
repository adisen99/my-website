"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const photoSections = [
  {
    title: "Musings",
    photos: Array.from({ length: 17 }, (_, i) => ({
      src: `/photography/musings${i + 1}.jpg`,
      title: `Musings ${i + 1}`,
    })),
  },
  {
    title: "Hawaii",
    photos: Array.from({ length: 17 }, (_, i) => ({
      src: `/photography/hawaii${i + 1}.jpg`,
      title: `Hawaii ${i + 1}`,
    })),
  },
  {
    title: "Travel",
    photos: Array.from({ length: 7 }, (_, i) => ({
      src: `/photography/travel${i + 1}.jpg`,
      title: `Travel ${i + 1}`,
    })),
  },
  {
    title: "Solitude",
    photos: Array.from({ length: 7 }, (_, i) => ({
      src: `/photography/solitude${i + 1}.jpg`,
      title: `Solitude ${i + 1}`,
    })),
  },
  {
    title: "Together",
    photos: Array.from({ length: 6 }, (_, i) => ({
      src: `/photography/together${i + 1}.jpg`,
      title: `Together ${i + 1}`,
    })),
  },
  {
    title: "Wilson's Prom",
    photos: Array.from({ length: 7 }, (_, i) => ({
      src: `/photography/wilsons_prom${i + 1}.jpg`,
      title: `Wilson's Prom ${i + 1}`,
    })),
  },
  {
    title: "Sandy",
    photos: Array.from({ length: 5 }, (_, i) => ({
      src: `/photography/sandy${i + 1}.jpg`,
      title: `Sandy ${i + 1}`,
    })),
  },
  {
    title: "Melbourne",
    photos: Array.from({ length: 16 }, (_, i) => ({
      src: `/photography/melbourne${i + 1}.jpg`,
      title: `Melbourne ${i + 1}`,
    })),
  },
];

export default function PhotographyPage() {
  const { resolvedTheme } = useTheme();
  const allPhotos = photoSections.flatMap((section) => section.photos);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [sourceAttempt, setSourceAttempt] = useState<Record<string, number>>({});

  const getSourceCandidates = (src: string) => {
    const base = src.replace(/\.[^/.]+$/, "");
    return [
      `${src}?v=20260215f`,
      src,
      `${base}.JPG`,
      `${base}.jpeg`,
      `${base}.png`,
      `${base}.webp`,
      `${base}.HEIC`,
    ];
  };

  const resolveImageSrc = (src: string) => {
    const index = sourceAttempt[src] ?? 0;
    const candidates = getSourceCandidates(src);
    return candidates[Math.min(index, candidates.length - 1)];
  };

  const handleImageError = (src: string) => {
    setSourceAttempt((prev) => ({ ...prev, [src]: (prev[src] ?? 0) + 1 }));
  };

  const closeLightbox = () => setActiveIndex(null);
  const showPrev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + allPhotos.length) % allPhotos.length);
  };
  const showNext = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % allPhotos.length);
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
        {/* add space */}
        <div className="h-4"></div>
        <p className="text-gray-500">A collage of moments for your perusal.</p>
      </header>

      <div className="space-y-12">
        {photoSections.map((section) => (
          <section key={section.title}>
            <h2 className="text-xl font-serif font-semibold mb-4">{section.title}</h2>
            <motion.div
              className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1 } }
              }}
            >
              {section.photos.map((photo) => (
                <motion.div
                  key={`${section.title}-${photo.src}`}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ scale: 0.995 }}
                  className="group relative mb-4 break-inside-avoid overflow-hidden rounded-sm bg-gray-100 cursor-zoom-in"
                  onClick={() => setActiveIndex(allPhotos.findIndex((p) => p.src === photo.src))}
                >
                  <img
                    src={resolveImageSrc(photo.src)}
                    alt={photo.title}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    onError={() => handleImageError(photo.src)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </section>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ backgroundColor: resolvedTheme === "dark" ? "#09090b" : "#ffffff" }}
            onClick={closeLightbox}
          >
            <button
              aria-label="Close image"
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full text-white bg-black/35 dark:bg-zinc-800/80 hover:bg-black/50 dark:hover:bg-zinc-700 transition-colors"
            >
              <X size={18} />
            </button>

            <button
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              className="absolute left-4 sm:left-8 p-2 rounded-full text-white bg-black/35 dark:bg-zinc-800/80 hover:bg-black/50 dark:hover:bg-zinc-700 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>

            <motion.img
              key={allPhotos[activeIndex].src}
              src={resolveImageSrc(allPhotos[activeIndex].src)}
              alt={allPhotos[activeIndex].title}
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="max-h-[88vh] max-w-[88vw] object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              onError={() => handleImageError(allPhotos[activeIndex].src)}
            />

            <button
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              className="absolute right-4 sm:right-8 p-2 rounded-full text-white bg-black/35 dark:bg-zinc-800/80 hover:bg-black/50 dark:hover:bg-zinc-700 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}