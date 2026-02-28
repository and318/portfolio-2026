export const containerStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger children by 0.1 seconds
    },
  },
};

export const itemStagger = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
