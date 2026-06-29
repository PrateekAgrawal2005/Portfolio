import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none
                      dark:bg-primary/5 bg-primary/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Education</h2>
          <p className="section-subheading">
            My academic background
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary flex-shrink-0">
                <GraduationCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 dark:text-white text-slate-900">
                  B.Tech in Artificial Intelligence and Machine Learning
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-sm dark:text-gray-400 text-slate-500">
                    <MapPin className="w-4 h-4" />
                    Acropolis Institute of Technology and Research
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-sm dark:text-gray-400 text-slate-500">
                    <Calendar className="w-4 h-4" />
                    2024
                  </span>
                </div>
                <p className="text-sm dark:text-gray-400 text-slate-500 leading-relaxed">
                  Pursuing a Bachelor of Technology with a specialization in AI and ML, building
                  a strong foundation in computer science, machine learning algorithms, and
                  real-world application development.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
