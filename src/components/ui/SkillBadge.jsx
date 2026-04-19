import { motion } from 'framer-motion';

const SkillBadge = ({ name, level, delay = 0 }) => {
  const getLevelColor = (level) => {
    switch (level) {
      case 'Advanced':
        return 'from-violet-500 to-purple-500';
      case 'Intermediate':
        return 'from-purple-500 to-fuchsia-500';
      default:
        return 'from-slate-500 to-slate-400';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="group relative hover:scale-105 hover:-translate-y-0.5 transition-transform duration-200 ease-out"
    >
      <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10 
                      group-hover:border-violet-500/50 transition-colors duration-200">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getLevelColor(level)}`} />
          <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-200">
            {name}
          </span>
          <span className="text-xs text-slate-500">•</span>
          <span className="text-xs text-slate-500">{level}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillBadge;
