import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-brand-light py-20 border-t border-separator" data-purpose="footer" id="contacto">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-end gap-12">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-6xl font-display italic mb-8 text-brand-dark">{t('footer.cta')}</h2>
          <a className="text-2xl md:text-4xl underline underline-offset-8 text-brand-dark hover:text-brand-gray transition-all" href="mailto:hola@and318.com">
            hola@and318.com
          </a>
        </div>
        <div className="flex flex-col items-end gap-4 text-sm font-medium uppercase tracking-widest text-brand-dark">
          <a className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gray" target='_blank' rel='noopener noreferrer' href="https://linkedin.com/in/andressaavedraag">{t('footer.social.linkedin')}</a>
          <a className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gray" target='_blank' rel='noopener noreferrer' href="https://github.com/and318">{t('footer.social.github')}</a>
          <span className="text-brand-gray mt-8">{t('footer.credits').replace('{year}', new Date().getFullYear())}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
