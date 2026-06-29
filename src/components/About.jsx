import { motion } from 'framer-motion';
import { User } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none
                      dark:bg-primary/5 bg-primary/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">About Me</h2>
          <p className="section-subheading">
            Get to know me and my journey in tech
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary flex-shrink-0">
                <User className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold dark:text-white text-slate-900 pt-1">
                Who I Am
              </h3>
            </div>
            <p className="text-base md:text-lg leading-relaxed dark:text-gray-300 text-slate-600">
              I am a B.Tech student specializing in Artificial Intelligence and Machine Learning,
              focused on building scalable and real-world applications. I have a strong foundation
              in Data Structures and Algorithms, enabling me to approach problems with efficiency
              and structured thinking. My primary interest lies in Machine Learning, where I design
              and deploy end-to-end solutions to solve practical problems. I have hands-on experience
              with Python, Scikit-learn, and Streamlit, along with exposure to deployment platforms
              such as AWS, Vercel, and Render. I also utilize modern AI tools to improve development
              speed and create intuitive user experiences. I continuously explore new technologies
              and apply my skills to real-world challenges, aiming to grow as an AI engineer and
              build impactful, high-quality solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
