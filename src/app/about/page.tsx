"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Text (Occupies 7 columns) */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-7 space-y-6"
        >
          <h1 className="text-2xl font-bold tracking-tight dark:text-white, light:text-zinc-400">
            Hey I'm Aditya
          </h1>
          
          <div className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
            <p>
              I am a PhD student at <span className="font-bold">University Name</span>, where my research explores the intersection of [Field A] and [Field B]. My work aims to [Briefly describe your research goal or impact].
            </p>
            <p>
              Beyond the lab, I am an avid photographer. I find that the patience required for macro-photography mirrors the meticulous nature of academic research—both require a keen eye for the details that others might overlook.
            </p>
            <p>
              Currently, I am working on [Project X], and I am always open to collaborations regarding [Topic Y].
            </p>
          </div>
        </motion.div>

        {/* Right Side: Square Image (Occupies 5 columns) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-5"
        >
            <div className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800">
            <img 
              src="/images/about_page.jpg" 
              alt="Your Profile" 
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            />
            </div>
        </motion.div>

      </div>
    </main>
  );
}
