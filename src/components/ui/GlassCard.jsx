import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', hover = true, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.4, 
        delay,
        ease: [0.25, 0.1, 0.25, 1] // Smooth easing curve
      }}
      className={`
        glass-card
        p-6
        ${hover ? 'hover:-translate-y-1' : ''}
        transition-transform
        duration-200
        ease-out
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
