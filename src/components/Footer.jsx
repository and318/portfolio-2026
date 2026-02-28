import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-brand-light py-20 border-t border-separator" data-purpose="footer" id="contacto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-6xl font-display italic mb-8 text-brand-dark">¿Listo para el siguiente paso?</h2>
          <a className="text-2xl md:text-4xl underline underline-offset-8 text-brand-dark hover:text-brand-gray transition-all" href="mailto:hello@example.com">
            hello@ux-engineer.com
          </a>
        </div>
        <div className="flex flex-col items-end gap-4 text-sm font-medium uppercase tracking-widest text-brand-dark">
          <a className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gray" href="https://linkedin.com">LinkedIn</a>
          <a className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gray" href="https://github.com">GitHub</a>
          <a className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gray" href="https://dribbble.com">Dribbble</a>
          <span className="text-brand-gray mt-8">© {new Date().getFullYear()} PORTFOLIO — Santiago, CL.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
