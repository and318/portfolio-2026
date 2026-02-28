import React from 'react';
import { motion } from 'framer-motion';
import Container from '../layout/Container';
import Section from '../layout/Section';

const TimelineItem = ({ title, year, description, isLast }) => {
  return (
    <motion.div
      className="relative flex items-center mb-8"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center mr-6">
        <div className="w-4 h-4 rounded-full bg-blue-600 flex-shrink-0"></div>
        {!isLast && <div className="w-px h-full bg-gray-300 dark:bg-gray-700"></div>}
      </div>
      <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-md text-left flex-grow">
        <h3 className="text-lg font-heading font-semibold text-neutral-800 dark:text-neutral-100">
          {title} ({year})
        </h3>
        <p className="text-neutral-600 dark:text-neutral-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const Evolution = () => {
  const timelineEvents = [
    {
      title: 'Diseño Gráfico',
      year: '2008',
      description: 'Inicios en el diseño visual, sentando las bases de la comunicación estética y funcional.',
    },
    {
      title: 'UX/UI Design',
      year: '2012',
      description: 'Transición hacia la experiencia de usuario, enfocándome en la interacción y usabilidad de productos digitales.',
    },
    {
      title: 'Frontend Development',
      year: '2016',
      description: 'Especialización en la implementación técnica de interfaces, dominando tecnologías para construir experiencias robustas.',
    },
    {
      title: 'Bootcamp Talento Digital',
      year: '2020',
      description: 'Intensificación de habilidades en desarrollo Front-End con foco en Vue.js y metodologías ágiles.',
    },
    {
      title: 'Docencia en Diseño de Interfaces',
      year: '2019-2021',
      description: 'Compartiendo conocimientos y formando nuevas generaciones de diseñadores y desarrolladores.',
    },
    {
      title: 'Curso Python PUC (Procesamiento de Datos)',
      year: '2019',
      description: 'Adquisición de habilidades en programación Python para el análisis y manipulación de datos.',
    },
    {
      title: 'Product Leadership & Architecture',
      year: '2021-Actualidad',
      description: 'Rol actual liderando la concepción y arquitectura de productos digitales, combinando visión estratégica con ejecución técnica.',
    },
  ];

  return (
    <Section className="bg-neutral-50 dark:bg-neutral-900">
      <Container>
        <motion.h2
          className="text-4xl font-heading font-bold text-neutral-800 dark:text-neutral-100 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Mi Evolución Profesional
        </motion.h2>
        <div className="relative max-w-2xl mx-auto">
          {timelineEvents.map((event, index) => (
            <TimelineItem key={index} {...event} isLast={index === timelineEvents.length - 1} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Evolution;
