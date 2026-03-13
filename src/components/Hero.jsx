import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: shouldReduceMotion ? 0 : 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
    },
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20" data-purpose="hero-section">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          className="editorial-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="col-span-12 lg:col-span-10" variants={itemVariants}>
            <h1 className="text-5xl md:text-8xl font-display italic leading-tight mb-12">
              {t('hero.title')}<span className="not-italic text-brand-dark">{t('hero.titleAccent')}</span>
            </h1>
          </motion.div>

          <motion.div className="col-span-12 lg:col-span-6 flex flex-col items-start gap-8" variants={itemVariants}>
            <p className="text-xl md:text-2xl text-brand-gray leading-relaxed font-light mb-6">
              {t('hero.subtitle')}
            </p>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
