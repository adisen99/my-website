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
          <h1 className="text-2xl font-bold tracking-tight">
            Hey I'm Aditya
          </h1>
          <div className="space-y-4 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
            {/* add my name pronounciation here */}
            <p className="text-sm italic text-zinc-500 dark:text-zinc-400">
              (Pronounced: <span className="font-mono">uh-DIT-yuh or aa-dhith-yah where <i>aa</i> as in "far," <i>dh</i> as in "there,"<i>ith</i> as in "myth," and <i>yah</i> as in "Maya". 
              It is a Sanskrit-origin name pronounced with a slight emphasis on the second syllable and means "Sun God".</span>)
            </p>
            {/* add some spacing */}
            <div className="h-2"></div>
            <p>
              I am a PhD student at <span className="font-bold">University of Melbourne</span>, where my research explores changes in the El Niño-Southern Oscillation (ENSO), its impacts and its changes
              in a warming world under both high and low emissions futures. I am passionate about understanding the complex interactions between the ocean and atmosphere, and how these 
              interactions influence global climate patterns and human systems.
            </p>
            <p>
              Beyond the lab, I am an avid photographer. I find that the patience required for photographing moments -- mirrors the meticulous nature of academic research—both require a 
              keen eye for the details that others might overlook.
            </p>
            <p>
              Currently, I am working on understanding the robustness of projected ENSO teleconnection changes and the diagnosing the sources of uncertainties in the models 
              using single model large ensembles. I am always open to collaborations regarding ENSO, climate variability, and nonlinear response under zero-emission scenarios.
            </p>
            <p
              className="text-sm italic text-zinc-500 dark:text-zinc-400"
            >
              (This website is a work in progress, so expect more updates and content in the future! For collaborations, questions, or just to say hi, 
              feel free to reach out via email or connect on LinkedIn (links in the footer). I am always excited to connect with fellow researchers, students, and anyone 
              interested in climate science and photography!)
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
            <div className="aspect-w-16 aspect-h-9 relative overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800">
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
