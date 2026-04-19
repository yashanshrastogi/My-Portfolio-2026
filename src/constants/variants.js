export const fadeIn = (direction = 'up', type = 'tween', delay = 0, duration = 0.5) => ({
  hidden: {
    x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
});

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren: delayChildren || 0,
    },
  },
});

export const textVariant = (delay) => ({
  hidden: {
    y: 20,
    opacity: 0,
    filter: 'blur(5px)',
  },
  show: {
    y: 0,
    opacity: 1,
    filter: 'blur(0px)',
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});
