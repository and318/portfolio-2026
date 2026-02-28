import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Impact from '../components/Impact';
import Capabilities from '../components/Capabilities';
import PortfolioGrid from '../components/PortfolioGrid';
import Footer from '../components/Footer';

// Exact data from Stitch design
const experienceData = [
  {
    company: "BancoEstado",
    title: "UX Designer",
    period: "2021 - Actualidad",
    description: (
      <>
        <p>Diseñé e implementé interfaces para tótems de autoservicio utilizados por clientes en zonas remotas del país.</p>
        <p>Lideré el desarrollo del sistema de diseño del área Empresas, creando una librería de componentes en Angular que permitió estandarizar interfaces, mejorar accesibilidad y optimizar flujos digitales.</p>
      </>
    )
  },
  {
    company: "Entel",
    title: "Analista TI / UX",
    period: "2020 - 2021",
    description: (
      <>
        <p>Rediseñé los flujos digitales de contratación de seguros, mejorando la visibilidad de productos y optimizando el funnel comercial.</p>
        <p>Apoyé la toma de decisiones mediante análisis y reportes en Power BI.</p>
      </>
    )
  },
  {
    company: "Buk",
    title: "Diseñador Front-End",
    period: "2018 - 2019",
    description: (
      <>
        <p>Diseño e implementación de interfaces para plataforma integral de recursos humanos.</p>
        <p>Colaboré en la evolución del producto mediante mejoras en experiencia de usuario y consistencia visual.</p>
      </>
    )
  },
  {
    company: "Rocketbot",
    title: "Gerente Regional y Co-Founder",
    period: "2017 - 2018",
    description: (
      <>
        <p>Co-fundador de solución RPA con modelo SaaS, participando en definición de producto y análisis de procesos empresariales para automatización.</p>
        <p>Lideré la expansión regional en Colombia, trabajando directamente con clientes corporativos en la optimización de procesos y eficiencia operativa.</p>
      </>
    )
  },
  {
    company: "R2DA",
    title: "Co-Founder - Diseñador UI",
    period: "2016 - 2017",
    description: (
      <ul className="list-disc ml-4 space-y-2">
        <li>Co- Fundador R2DA, empresa de desarrollo a medida</li>
        <li>Gestión de equipos TI.</li>
        <li>Diseño de interfaces y apps móviles.</li>
      </ul>
    )
  },
  {
    company: "Acid Labs",
    title: "Diseñador Front-End",
    period: "2012 - 2016",
    description: (
      <>
        <p>Diseñador Front-End durante 5 años en proyectos de e-commerce, mobile y plataformas digitales para clientes como reconocidas marcas de retail y salud.</p>
        <p>Participé en el diseño e implementación de soluciones digitales, colaborando con equipos multidisciplinarios desde la conceptualización hasta la ejecución.</p>
      </>
    )
  },
  {
    company: "Pymefácil",
    title: "Lead Designer",
    period: "2010 - 2012",
    description: (
      <>
        <p>Diseñador gráfico en la primera agencia de emprendimiento de Chile.</p>
        <p>Diseño de marca, desarrollo web y estrategia de marketing para nuevas empresas.</p>
      </>
    )
  },
  {
    company: "C. Pedro de Valdivia",
    title: "Web & Editorial",
    period: "2009 - 2010",
    description: (
      <>
        <p>Diseño y desarrollo web para colegios y pre-universitarios de la corporación.</p>
        <p>Diseño editorial de agendas y anuarios y pruebas multimedia para alumnos de pre-básica.</p>
      </>
    )
  }
];

const Home = () => {
  return (
    <div className="bg-brand-light font-sans">
      <Navbar />
      <Hero />
      <main>
        {/* Changed order to exactly match Stitch: Projects, Expertise, Profile */}
        <PortfolioGrid items={experienceData} title="Trayectoria Profesional" />
        <Capabilities />
        <Impact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
