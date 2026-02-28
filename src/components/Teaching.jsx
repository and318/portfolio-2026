import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import Section from '../layout/Section';

const Teaching = () => {
  return (
    <Section id="docencia" className="bg-neutral-50 dark:bg-neutral-900">
      <Container>
        <motion.h2
          className="text-4xl font-heading font-bold text-neutral-800 dark:text-neutral-100 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Liderazgo de Conocimiento: Mi Experiencia Docente
        </motion.h2>
        <motion.div
          className="max-w-2xl mx-auto text-center bg-white dark:bg-neutral-800 p-8 rounded-lg shadow-md"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-4">
            Compartir conocimiento y formar a futuras generaciones de profesionales ha sido una parte integral de mi desarrollo.
            Como docente, he tenido la oportunidad de guiar a estudiantes en el apasionante mundo del diseño de interfaces
            y el desarrollo web, transmitiendo no solo técnicas y herramientas, sino también una visión estratégica
            y el pensamiento crítico necesario para innovar en el ámbito digital.
          </p>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Mi experiencia incluye la enseñanza en instituciones de prestigio, donde he podido fomentar el talento y
            contribuir a la creación de productos digitales impactantes. Esta faceta me permite mantenerme
            actualizado y reforzar constantemente mi propio aprendizaje.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Teaching;
