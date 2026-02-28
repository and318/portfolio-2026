import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
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
              Transformando necesidades de negocio en <span className="not-italic text-brand-dark">productos digitales escalables.</span>
            </h1>
          </motion.div>

          <motion.div className="col-span-12 lg:col-span-6 flex flex-col items-start gap-8" variants={itemVariants}>
            <p className="text-xl md:text-2xl text-brand-gray leading-relaxed font-light">
              Senior UX/UI Engineer & Front-End Developer con más de 10 años de experiencia uniendo la estrategia visual con la excelencia técnica.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <ScrollLink
                to="projects"
                smooth={true}
                duration={800}
                className="px-8 py-4 bg-brand-dark text-brand-light text-sm font-bold uppercase tracking-widest hover:bg-brand-gray transition-all cursor-pointer"
                aria-label="Ver experiencia profesional"
              >
                Iniciar Proyecto
              </ScrollLink>

              <ScrollLink
                to="contacto"
                smooth={true}
                duration={800}
                className="px-8 py-4 border border-brand-dark text-brand-dark text-sm font-bold uppercase tracking-widest hover:bg-brand-dark hover:text-white transition-all cursor-pointer"
                aria-label="Ir a sección de contacto"
              >
                Descargar CV
              </ScrollLink>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
