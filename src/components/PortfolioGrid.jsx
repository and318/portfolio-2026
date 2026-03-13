import React from 'react';
import ProjectCard from './ProjectCard';
import { useLanguage } from '../context/LanguageContext';

const PortfolioGrid = ({ items, title }) => {
    const { t } = useLanguage();
    return (
        <section className="py-32 bg-surface border-y border-separator" data-purpose="experience-section" id="projects">
            <div className="max-w-7xl mx-auto px-6">
                <header className="mb-24">
                    {title && (
                        <h2 className="text-4xl font-display italic">
                            {title}
                        </h2>
                    )}
                </header>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-separator border border-separator text-brand-dark">
                    {items.map((item, index) => (
                        <li key={index}>
                            <ProjectCard
                                title={item.company}
                                role={item.title}
                                period={item.period}
                                description={
                                    <div className="space-y-4">
                                        {Array.isArray(item.description) ?
                                            item.description.map((p, i) => <p key={i}>{p}</p>) :
                                            <p>{item.description}</p>
                                        }
                                    </div>
                                }
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default PortfolioGrid;
