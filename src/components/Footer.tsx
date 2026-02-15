import {
  SiGithub,
  SiOrcid,
  SiGooglescholar,
  SiGmail,
  SiBluesky,
  SiLinkedin,
  SiResearchgate,
  SiInstagram,
  SiX,
} from "react-icons/si";

const socialLinks = [
  { name: "GitHub", href: "https://github.com/adisen99", Icon: SiGithub },
  { name: "ORCID", href: "https://orcid.org", Icon: SiOrcid },
  { name: "Google Scholar", href: "https://scholar.google.com", Icon: SiGooglescholar },
  { name: "Bluesky", href: "https://bsky.app", Icon: SiBluesky },
  { name: "LinkedIn", href: "https://linkedin.com/in/adisen99", Icon: SiLinkedin },
  { name: "ResearchGate", href: "https://www.researchgate.net/profile/Aditya-Sengupta-2", Icon: SiResearchgate },
  { name: "Instagram", href: "https://instagram.com", Icon: SiInstagram },
  { name: "Twitter", href: "https://twitter.com", Icon: SiX },
  { name: "Email", href: "mailto:aditya.sengupta@student.unimelb.edu.au", Icon: SiGmail },
];

const Footer = () => {
  return (
    <footer className="border-t border-transparent">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        {/* Copyright and Year */}
        <p className="text-xs text-zinc-500 dark:text-zinc-500">
          &copy; 2026 Aditya Sengupta
        </p>

        {/* Social Links/Logos */}
        <div className="flex flex-wrap justify-center sm:justify-end gap-4">
          {socialLinks.map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              title={name}
              className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
