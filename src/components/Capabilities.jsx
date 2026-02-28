import React from 'react';

const CapabilityBlock = ({ title, description }) => {
  return (
    <div data-purpose="skill-card">
      <h4 className="text-sm font-bold uppercase tracking-widest mb-4">{title}</h4>
      <p className="text-brand-gray leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const Capabilities = () => {
  const strategicCapabilities = [
    {
      title: 'UX/UI Design',
      description: 'Diseño centrado en el usuario enfocado en usabilidad, accesibilidad y estética minimalista para plataformas SaaS complejas.',
    },
    {
      title: 'Front-End Development',
      description: 'Implementación de interfaces robustas con React, Vue y arquitecturas modernas, priorizando el rendimiento y la escalabilidad.',
    },
    {
      title: 'Design Systems',
      description: 'Creación y mantenimiento de librerías de componentes consistentes que aceleran el ciclo de desarrollo y diseño.',
    },
    {
      title: 'Digital Strategy',
      description: 'Consultoría estratégica para alinear los objetivos técnicos con la visión de negocio a largo plazo.',
    },
  ];

  return (
    <section id="expertise" className="py-32 bg-brand-light" data-purpose="capabilities-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="editorial-grid">
          <div className="col-span-12 md:col-span-4 mb-16 md:mb-0">
            <h2 className="text-xs font-bold uppercase tracking-widest text-brand-gray mb-8">Expertise & Services</h2>
            <p className="text-2xl font-display italic leading-relaxed">
              Un enfoque híbrido que garantiza coherencia desde el prototipo hasta el código final.
            </p>
          </div>
          <div className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {strategicCapabilities.map((item, index) => (
              <CapabilityBlock key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
