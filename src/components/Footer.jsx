import { SiGithub } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import { Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t dark:border-white/10 border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm dark:text-gray-500 text-slate-400 flex items-center gap-1">
            © {currentYear} Prateek Agrawal. Built with{' '}
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> and React
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/PrateekAgrawal2005"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-all duration-300
                         dark:text-gray-500 dark:hover:text-white
                         text-slate-400 hover:text-slate-900
                         hover:scale-110"
              aria-label="GitHub Profile"
            >
              <SiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/prateek-agrawal-311744333/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg transition-all duration-300
                         dark:text-gray-500 dark:hover:text-white
                         text-slate-400 hover:text-slate-900
                         hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a
              href="mailto:prateek.agrawal.ml@gmail.com"
              className="p-2 rounded-lg transition-all duration-300
                         dark:text-gray-500 dark:hover:text-white
                         text-slate-400 hover:text-slate-900
                         hover:scale-110"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
