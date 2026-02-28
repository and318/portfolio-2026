import React from 'react';

const ProjectCard = ({ title, role, period, description }) => {
    return (
        <div className="group bg-surface p-8 hover:bg-brand-light transition-colors flex flex-col h-full">
            <div className="mb-6">
                <h3 className="text-3xl font-light">{title}</h3>
                <p className="text-brand-gray italic text-sm mt-1">{role} / {period}</p>
            </div>

            <div className="text-sm text-brand-gray leading-relaxed space-y-4">
                {description}
            </div>
        </div>
    );
};

export default ProjectCard;
