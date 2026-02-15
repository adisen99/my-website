"use client";
import { motion } from "framer-motion";
import { summary } from "framer-motion/client";
import { ExternalLink, ChevronDown } from "lucide-react";

// The data structure now needs a year property
const allPapers = [
  {
    title: "Do CMIP6 Models Capture Seasonal and Regional Differences in the Asymmetry of ENSO-Precipitation Teleconnections?",
    authors: "Aditya Sengupta, Andrew D King, Josephine R Brown",
    year: "2025",
    journal: "JGR: Atmospheres",
    link: "https://doi.org/10.1029/2024JD041031",
    type: "Article",
    summary: "The impact of ENSO on regional rainfall is often opposite between these two major phases of ENSO in various regions around the world. However, the two ENSO patterns of rainfall are not always mirror images of one another. Essentially, the rainfall response can often be higher or lower in magnitude during one phase compared to the other, which is often described as an asymmetric response of precipitation to ENSO. We assess the ability of 50 coupled climate models in simulating the seasonal and regional differences in asymmetric response using observations and reanalysis data sets as reference. Model performance is found to be poor across all regions and season, mainly because of the inability of the models in simulating the observed skewness in the regional precipitation anomaly distribution"
  },
  {
    title: "Inequity in Population Exposure to Accelerated Warming",
    authors: "Aditya Sengupta, Andrew D King, Robert G Ryan",
    year: "2024",
    journal: "Geophysical Research Letters",
    link: "https://doi.org/10.1029/2024GL110644",
    type: "Letter",
    summary: "The issue of whether climate change is accelerating has sparked heated debate in recent months. Here, we examine for acceleration in warming rates and explore possible causes for regional differences. We find, the rate of global warming is accelerating, and show that regions with large population and low socioeconomic development experience reduced acceleration due to high local aerosol emissions. As we transition to clean-energy alternatives, rapid reduction in aerosol emissions without a concurrent reduction in greenhouse gas emissions could expose a large fraction of the world's most vulnerable people to a sudden acceleration of warming. This would also increase exposure to more intense and frequent heat extremes for highly vulnerable populations. These results call for targeted climate adaptation strategies that direct attention to low-socioeconomic aerosol masked regions."
  },
  {
    title: "Exploring climate stabilisation at different global warming levels in ACCESS-ESM-1.5",
    authors: "Andrew D King, Tilo Ziehn, Matt Chamberlain, Alex Borowiak, Jo Brown, Liam Cassidy, Andrea Dittus, Michael Grose, Nicola Maher, S. Paik, Sarah Perkins-Kirkpatrick, Aditya Sengupta.",
    year: "2024",
    journal: "Earth System Dynamics",
    link: "https://doi.org/10.5194/esd-15-1353-2024",
    type: "Article",
    summary: "Governments are targeting net-zero emissions later this century with the aim of limiting global warming in line with the Paris Agreement. However, few studies explore the long-term consequences of reaching net-zero emissions and the effects of a delay in reaching net-zero. We use the Australian Earth system model to examine climate evolution under net-zero emissions. We find substantial changes which differ regionally, including continued Southern Ocean warming and Antarctic sea ice reduction."
  },
  {
    title: "Assessing the performance of satellite derived and reanalyses data in capturing seasonal changes in extreme precipitation scaling rates over the Indian subcontinent",
    authors: "Aditya Sengupta, Naresh Krishna Vissa, Indrani Roy",
    year: "2023",
    journal: "Atmospheric Research",
    link: "https://doi.org/10.1016/j.atmosres.2023.106741",
    type: "Article",
    summary: "In the study, the performance of three high resolution data sets - GPM-IMERG satellite derived, ERA5 and IMDAA reanalysis precipitation - in determining the seasonal variations in precipitation-temperature scaling rates are investigated. When compared with the IMD data, IMERG and IMDAA capture the spatial variations and magnitude of scaling rates of daily precipitation extremes much better than ERA5"
  },
  {
    title: "Seasonal variations in the dynamic and thermodynamic response of precipitation extremes in the Indian subcontinent",
    authors: "Aditya Sengupta, Naresh Krishna Vissa, Indrani Roy",
    year: "2022",
    journal: "Climate Dynamics",
    link: "https://doi.org/10.1007/s00382-022-06613-6",
    type: "Article",
    summary: "The major objectives of this study were three-fold. First, to analyse the seasonal cahnges in the apparent scaling rates over the Indian subcontinent and to determine the differences in the departure from the expected climate scaling rate using ERA5 reanalysis temperature and precipiatation data. Second, to use ERA5 data on pressure levels to determine the seasonal variations of the dynamic and thermodynamic contribution to precipitation extremes and find the factos that cause these deviations in scaling rates. Third, to further probe into these variations using composite analysis of the various climate variables as dynamic and thermodynamic indices to find the major driving factors behind extremes across seasons."
  },
  {
    title: "Probing into the wintertime meteorology and particulate matter (PM2.5 and PM10) forecast over Delhi",
    authors: "Aditya Sengupta et al.",
    year: "2022",
    journal: "Atmospheric Pollution Research",
    link: "https://doi.org/10.1016/j.apr.2022.101426",
    type: "Article",
    summary: "Analysing the performance of high resolution air-quality and meteorological parameters obtained from the forecasting system developed at IITM, Pune against observation data from the WIFEX campaign and to calculate statistical performance and skill score of model AQI output against CPCB observation data over Delhi-NCR during winter 2020-2021."
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
      <h1 className="text-4xl font-bold mb-12">Publications</h1>
      
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
                <h3 className="text-lg font-semibold group-hover:text-blue-400 transition-colors flex items-center gap-2">
                  <a href={paper.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    {paper.title} 
                    <ExternalLink size={14} className="text-zinc-500 opacity-70 group-hover:opacity-100 transition-opacity" />
                  </a>
                </h3>
                
                <p className="text-sm text-zinc-500 mb-2">{paper.authors}</p>
                
                <div className="flex items-center gap-3">
                    <span className="text-sm text-zinc-600 dark:text-zinc-400 italic">{paper.journal}</span>
                  <span className="px-2 py-0.5 text-xs uppercase tracking-widest bg-zinc-800 text-zinc-200 border border-zinc-700 rounded">
                    {paper.type}
                  </span>
                </div>

                {paper.summary && (
                  <details className="mt-4 cursor-pointer">
                  <summary className="flex items-center gap-1 text-sm text-blue-500 hover:underline">
                    Show summary <ChevronDown size={14} />
                  </summary>
                  <p className="text-sm text-zinc-400 mt-3">{paper.summary}</p>
                  </details>
                )}

              </motion.div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
