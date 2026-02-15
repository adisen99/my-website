"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import dynamic from "next/dynamic";

const TalkMap = dynamic(() => import("@/components/TalkMap"), { ssr: false });

// Updated data to match the content in the image
const allTalks = [
  {
    title: "What have we learned from CMIP 2026? Insights from ECR Interactive workshop",
    date: "March 2026",
    venue: "CMIP 2026 workshop",
    location: "Kyoto, Japan",
    tag: "Keynote",
    // link: "#",
    // linkText: "poster",
  },
  {
    title: "Are ENSO teleconnection changes robust to internal variability? Insights from single model large ensembles",
    date: "March 2026",
    venue: "CMIP 2026 workshop",
    location: "Kyoto, Japan",
    tag: "Talk",
    // link: "#",
    // linkText: "poster",
  },
  {
    title: "Exploring AI Reconstructions, Insights into warming trends",
    date: "February 2026",
    venue: "AMOS Conference 2026",
    location: "Hobart, Tasmania, Australia",
    tag: "Poster",
    // link: "#",
    // linkText: "poster",
  },
  {
    title: "Should we be distinguishing between different 'flavours' of La Niñas?",
    date: "June 2025",
    venue: "AMOS Conference 2025",
    location: "Cairns, Queensland, Australia",
    tag: "Talk",
    // link: "#",
    // linkText: "Slides",
  },
  {
    title: "Long term changes in tropical Pacific mean state driven by inter-hemispheric differences due to delayed Southern Ocean warming",
    date: "March 10, 2025",
    venue: "ENSO Wyrtki Symposium",
    location: "Manoa, Hawaii, USA",
    tag: "Poster",
    // link: "#",
    // linkText: "poster",
  },
  {
    title: "Changes in ENSO post net zero: insights from the ACCESS-ESM1.5",
    date: "March 10, 2025",
    venue: "ENSO Wyrtki Symposium",
    location: "Manoa, Hawaii, USA",
    tag: "Poster",
    // link: "#",
    // linkText: "poster",
  },
  {
    title: "Changes in ENSO variability and teleconnections beyond net zero in ACCESS-ESM1.5",
    date: "August 1, 2024",
    venue: "Australian Academy of Science Elizabeth and Frederick White Research Conference on Atmospheric Dynamics",
    location: "Melbourne, Australia",
    tag: "Talk",
    // link: "#",
    // linkText: "Slides",
  },
  {
    title: "Changes in ENSO variability and teleconnections beyond net zero in ACCESS-ESM1.5",
    date: "August 1, 2024",
    venue: "Australian Academy of Science Elizabeth and Frederick White Research Conference on Atmospheric Dynamics",
    location: "Melbourne, Australia",
    tag: "Talk",
    // link: "#",
    // linkText: "Slides",
  },
  {
    title: "Acceleration of local warming damped in urban regions of the Global South", 
    date: "June 28, 2024",
    venue: "International Meeting on Statistical Climatology, Meteo-France",
    location: "Toulouse, France",
    tag: "Talk",
    // link: "#",
    // linkText: "Slides",
  },
  {
    title: "Regional and seasonal diversity of ENSO-precipitation teleconections and their asymmetry in CMIP6 models",
    date: "June 28, 2024",
    venue: "International Meeting on Statistical Climatology, Meteo-France",
    location: "Toulouse, France",
    tag: "Talk",
    // link: "#",
    // linkText: "Slides",
  },
  {
    title: "Assessment of CMIP6 model capabilities in simulating the asymmetric response of precipitation to ENSO",
    date: "February 3, 2024",
    venue: "AMOS Conference 2024",
    location: "Canberra, Australia",
    tag: "Talk",
    // link: "#",
    // linkText: "Slides",
  },
]

// Helper function to group talks by year
const talksByYear = allTalks.reduce((acc, talk) => {
  const year = talk.date.slice(-4);
  (acc[year] = acc[year] || []).push(talk);
  return acc;
}, {} as Record<string, typeof allTalks>);

const talkLocations = [
  {
    city: "Kyoto, Japan",
    label: "CMIP 2026 workshop",
    lat: 35.0116,
    lng: 135.7681,
  },
  {
    city: "Hobart, Australia",
    label: "AMoS Conference 2026",
    lat: -42.8821,
    lng: 147.3272,
  },
  {
    city: "Cairns, Australia",
    label: "AMOS Conference 2025",
    lat: -16.9203,
    lng: 145.771,
  },
  {
    city: "Manoa, Hawaii, USA",
    label: "ENSO Wyrtki Symposium",
    lat: 21.3008,
    lng: -157.817,
  },
  {
    city: "Melbourne, Australia",
    label: "AAS Atmospheric Dynamics Conference",
    lat: -37.8136,
    lng: 144.9631,
  },
  {
    city: "Toulouse, France",
    label: "International Meeting on Statistical Climatology",
    lat: 43.6047,
    lng: 1.4442,
  },
  {
    city: "Canberra, Australia",
    label: "AMOS Conference 2024",
    lat: -35.2809,
    lng: 149.13,
  },
];

export default function TalksPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-12">Talks & Posters</h1>

      <section className="mb-16">
        <h2 className="text-xl font-bold mb-4">Talk Map</h2>
        <p className="text-sm mb-4">Locations where I have presented so far.</p>
        <TalkMap locations={talkLocations} />
      </section>
      
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
                    {/* {talk.linkText && (
                        <a href={talk.link} className="mt-3 flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                            {talk.linkText === "Video" ? <Video size={14}/> : <Presentation size={14}/>}
                            {talk.linkText}
                        </a>
                    )} */}
                  </div>

                  {/* Tag (Keynote, Seminar, Invited) on the right */}
                  <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 ml-4 rounded-full bg-zinc-100 text-zinc-200 dark:bg-zinc-600 dark:text-zinc-200 whitespace-nowrap">
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
