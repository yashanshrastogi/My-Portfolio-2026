import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, align = 'center' }) => {
  const alignClass = align === 'center' ? 'text-center' : align === 'left' ? 'text-left' : 'text-right';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-16 ${alignClass}`}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4 section-heading tracking-tight">
        <span className="heading-underline gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate-400 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mt-6 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
