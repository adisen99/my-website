import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-100 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
        {/* Copyright and Year */}
        <p className="text-xs text-zinc-500 dark:text-zinc-500">
          &copy; 2026 Aditya Sengupta
        </p>

        {/* Social Links/Logos */}
        <div className="flex space-x-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
            <Twitter size={20} />
          </a>
          <a href="mailto:your.email@uni.edu" className="text-zinc-500 hover:text-black dark:hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
