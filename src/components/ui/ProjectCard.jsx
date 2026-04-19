import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { fadeIn } from '../../constants/variants';

const ProjectCard = ({ project, index }) => {
  const { title, subtitle, description, tech, github, live, category } = project;

  const getCategoryColor = (cat) => {
    const colors = {
      'AI/ML': 'from-blue-500 to-violet-500',
      'GenAI': 'from-violet-500 to-purple-500',
      'ML': 'from-purple-500 to-fuchsia-500',
      'Cloud': 'from-emerald-500 to-teal-500',
    };
    return colors[cat] || 'from-slate-500 to-slate-400';
  };

  return (
    <motion.div
      variants={fadeIn('up', 'spring', index * 0.1, 0.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="glass-card overflow-hidden group hover:-translate-y-2 transition-all duration-300 ease-out flex flex-col h-full"
    >
      {/* Category Badge */}
      <div className="px-6 pt-6 pb-2">
        <span className={`inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full 
                         bg-gradient-to-r ${getCategoryColor(category)} text-white shadow-sm`}>
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 flex flex-col flex-grow">
        <div className="flex items-start gap-3 mb-4">
          <div className="p-2 rounded-xl bg-violet-500/10 group-hover:bg-violet-500/20 transition-colors shrink-0">
            <Folder className="w-6 h-6 text-violet-400" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-violet-300 transition-colors leading-tight">
              {title}
            </h3>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">{subtitle}</p>
          </div>
        </div>

        <p className="text-slate-400 text-base leading-relaxed mb-6 line-clamp-3 flex-grow">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tech.map((item, i) => (
            <span 
              key={i}
              className="px-2.5 py-1 text-xs font-bold rounded-md bg-white/5 text-slate-300 border border-white/10 group-hover:border-violet-500/30 transition-colors"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-auto">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 
                        text-slate-300 hover:text-white text-sm font-bold transition-all
                        border border-white/10 hover:border-white/20"
            >
              <Github className="w-5 h-5" />
              Source
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600
                        hover:from-violet-700 hover:to-purple-700 text-white text-sm font-bold 
                        transition-all shadow-lg shadow-violet-500/25 hover:shadow-violet-600/40 btn-glow"
            >
              <ExternalLink className="w-5 h-5" />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
