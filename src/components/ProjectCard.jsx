import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: '-50px' }}
      className="glass-card group flex flex-col h-full"
    >
      {/* Color accent bar */}
      <div className="h-1 w-full rounded-t-2xl bg-gradient-to-r from-primary to-secondary" />

      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-xl font-bold mb-3 dark:text-white text-slate-900 group-hover:text-gradient transition-all duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed mb-4 flex-1 dark:text-gray-400 text-slate-500">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((tech) => (
            <span key={tech} className="tech-tag text-xs">
              {tech}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg
                       transition-all duration-300
                       dark:bg-white/5 dark:hover:bg-white/15 dark:text-gray-300 dark:hover:text-white
                       bg-gray-100 hover:bg-gray-200 text-slate-600 hover:text-slate-900
                       hover:scale-105"
            aria-label={`View ${project.title} on GitHub`}
          >
            <SiGithub className="w-4 h-4" />
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg
                       transition-all duration-300
                       bg-gradient-to-r from-primary to-secondary text-white
                       hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
            aria-label={`View ${project.title} live demo`}
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}
