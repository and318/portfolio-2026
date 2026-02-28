import React from 'react';
import ProjectCard from './ProjectCard';

const PortfolioGrid = ({ items, title }) => {
    return (
        <section className="py-32 bg-surface border-y border-separator" data-purpose="experience-section" id="projects">
            <div className="max-w-7xl mx-auto px-6">
                <header className="mb-24">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-gray mb-4 block">Selected Partnerships</span>
                    {title && (
                        <h2 className="text-4xl font-display italic">
                            {title}
                        </h2>
                    )}
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-separator border border-separator text-brand-dark">
                    {items.map((item, index) => (
                        <ProjectCard
                            key={index}
                            title={item.company}
                            role={item.title}
                            period={item.period}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioGrid;
