import React from 'react';
import Section from '../layout/Section';
import PortfolioGrid from './PortfolioGrid';

const Experience = () => {
  const experiences = [
    {
      title: 'UX Designer Senior',
      company: 'BancoEstado',
      period: '2021 - Actualidad',
      description: 'Liderazgo en diseño de sistemas bancarios, desarrollo de Design Systems en Angular y optimización de experiencias en canales de autoservicio para miles de usuarios. Impacto directo en la eficiencia y accesibilidad.',
    },
    {
      title: 'Analista TI / UX',
      company: 'Entel',
      period: '2020 - 2021',
      description: 'Rediseño de flujos digitales clave, incluyendo la contratación de seguros, mejorando la visibilidad del producto y optimizando el funnel comercial. Contribución estratégica en la toma de decisiones basada en datos.',
    },
    {
      title: 'Diseñador Front-End',
      company: 'Buk',
      period: '2018 - 2019',
      description: 'Diseño e implementación de interfaces para una plataforma integral de RRHH. Contribución activa en la mejora continua del producto a través de la experiencia de usuario y la consistencia visual.',
    },
    {
      title: 'Co-Founder & Gerente Regional',
      company: 'Rocketbot (RPA Startup)',
      period: '2017 - 2018',
      description: 'Co-fundador de una solución SaaS de automatización robótica de procesos (RPA). Participación en la definición de producto, estrategia UX y expansión regional en Colombia, Chile y Perú. Enfoque en optimización de procesos empresariales.',
    },
    {
      title: 'Diseñador Front-End',
      company: 'Acid Labs',
      period: '2012 - 2016',
      description: 'Desarrollo de proyectos para e-commerce, mobile y plataformas digitales para clientes como The North Face, Marmot, Salcobrand. Colaboración con equipos multidisciplinarios en todas las fases del proyecto.',
    },
    {
      title: 'Lead Designer',
      company: 'Pymefácil',
      period: '2010 - 2012',
      description: 'Diseñador gráfico en la primera agencia de emprendimiento de Chile. Desarrollo de marca, diseño web y estrategia de marketing para startups. Foco en la creación de identidad digital para nuevas empresas.',
    },
    {
      title: 'Diseñador Gráfico Web y Editorial',
      company: 'Corporación Pedro de Valdivia',
      period: '2009 - 2010',
      description: 'Diseño y desarrollo web para instituciones educativas, así como diseño editorial para agendas y material multimedia. Experiencia inicial en proyectos digitales y gráficos.',
    },
  ];

  return (
    <Section id="experiencia" className="p-0 m-0">
      <PortfolioGrid items={experiences} title="Experiencia Profesional Clave" />
    </Section>
  );
};

export default Experience;
