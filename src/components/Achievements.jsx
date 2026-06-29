import { motion } from 'framer-motion';
import achievementsData from '../data/achievements';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-28 relative">
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl pointer-events-none
                      dark:bg-secondary/5 bg-secondary/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Achievements</h2>
          <p className="section-subheading">
            Milestones and accomplishments along the way
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {achievementsData.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                variants={cardVariants}
                className="glass-card p-6 flex items-start gap-4"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary flex-shrink-0">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 dark:text-white text-slate-900">
                    {achievement.title}
                  </h3>
                  <p className="text-sm dark:text-gray-400 text-slate-500 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
