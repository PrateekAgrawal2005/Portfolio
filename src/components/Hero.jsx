import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import { Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 dark:opacity-20 blur-3xl bg-primary" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-15 dark:opacity-15 blur-3xl bg-secondary" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg font-medium mb-2 dark:text-gray-400 text-slate-500"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className="dark:text-white text-slate-900">Prateek</span>{' '}
              <span className="text-gradient">Agrawal</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg md:text-xl mb-6 dark:text-gray-400 text-slate-500"
            >
              Machine Learning Enthusiast | B.Tech AIML Student
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-base md:text-lg mb-8 max-w-xl mx-auto lg:mx-0 dark:text-gray-500 text-slate-400"
            >
              Building scalable and intelligent real-world solutions using Machine Learning.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <a href="#projects" className="btn-primary inline-flex items-center gap-2">
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center gap-2"
              >
                Download Resume
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex justify-center lg:justify-start gap-4"
            >
              <a
                href="https://github.com/PrateekAgrawal2005"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl transition-all duration-300
                           dark:bg-white/5 dark:hover:bg-white/15 dark:text-gray-400 dark:hover:text-white
                           bg-gray-100 hover:bg-gray-200 text-slate-500 hover:text-slate-900
                           hover:scale-110"
                aria-label="GitHub Profile"
              >
                <SiGithub className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/prateek-agrawal-311744333/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl transition-all duration-300
                           dark:bg-white/5 dark:hover:bg-white/15 dark:text-gray-400 dark:hover:text-white
                           bg-gray-100 hover:bg-gray-200 text-slate-500 hover:text-slate-900
                           hover:scale-110"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a
                href="mailto:prateek.agrawal.ml@gmail.com"
                className="p-3 rounded-xl transition-all duration-300
                           dark:bg-white/5 dark:hover:bg-white/15 dark:text-gray-400 dark:hover:text-white
                           bg-gray-100 hover:bg-gray-200 text-slate-500 hover:text-slate-900
                           hover:scale-110"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right side: Avatar with glow ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80">
              {/* Animated glow ring */}
              <div className="glow-ring animate-glow-rotate" />
              <div className="absolute inset-0 rounded-full animate-glow-pulse"
                   style={{
                     background: 'conic-gradient(from 180deg, #7c3aed, #3b82f6, #7c3aed)',
                     filter: 'blur(12px)',
                     opacity: 0.4,
                   }}
              />

              {/* Inner circle with profile photo */}
              <div className="absolute inset-2 rounded-full overflow-hidden
                              bg-gradient-to-br from-primary via-purple-600 to-secondary
                              flex items-center justify-center
                              shadow-2xl shadow-primary/30">
                <img src="/profile.png" alt="Prateek Agrawal" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
