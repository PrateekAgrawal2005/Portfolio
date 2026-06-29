import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { SiGithub } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none
                      dark:bg-primary/5 bg-primary/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Get In Touch</h2>
          <p className="section-subheading">
            Have a project in mind or want to collaborate? Let's connect.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-8 md:p-10 text-center">
            {/* Contact links */}
            <div className="space-y-4 mb-8">
              <a
                href="mailto:prateek.agrawal.ml@gmail.com"
                className="flex items-center justify-center gap-3 text-base md:text-lg transition-colors duration-200
                           dark:text-gray-300 dark:hover:text-white
                           text-slate-600 hover:text-slate-900"
              >
                <Mail className="w-5 h-5 text-primary" />
                prateek.agrawal.ml@gmail.com
              </a>

              <a
                href="https://github.com/PrateekAgrawal2005"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-base md:text-lg transition-colors duration-200
                           dark:text-gray-300 dark:hover:text-white
                           text-slate-600 hover:text-slate-900"
              >
                <SiGithub className="w-5 h-5 text-primary" />
                github.com/PrateekAgrawal2005
              </a>

              <a
                href="https://linkedin.com/in/prateek-agrawal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 text-base md:text-lg transition-colors duration-200
                           dark:text-gray-300 dark:hover:text-white
                           text-slate-600 hover:text-slate-900"
              >
                <FaLinkedinIn className="w-5 h-5 text-primary" />
                linkedin.com/in/prateek-agrawal
              </a>
            </div>

            {/* Divider */}
            <div className="w-full h-px mb-8 dark:bg-white/10 bg-gray-200" />

            {/* CTA */}
            <p className="text-lg md:text-xl font-semibold mb-6 dark:text-white text-slate-900">
              Let's build something amazing together
            </p>
            <a
              href="mailto:prateek.agrawal.ml@gmail.com"
              className="btn-primary inline-flex items-center gap-2"
            >
              Say Hello
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
