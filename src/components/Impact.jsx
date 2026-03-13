import { useLanguage } from '../context/LanguageContext';

const Impact = () => {
  const { t } = useLanguage();
  return (
    <article className="py-32 bg-brand-dark text-brand-light" data-purpose="profile-section" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <div className="w-full md:w-1/2">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-gray mb-4 block">{t('impact.label')}</span>
            <h2 className="text-4xl md:text-6xl font-display italic mb-8">{t('impact.title')}</h2>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-lg text-brand-gray leading-relaxed mb-6 font-light">
              {t('impact.bio1')}
            </p>
            <p className="text-lg text-brand-gray leading-relaxed mb-12 font-light">
              {t('impact.bio2')}
            </p>

            <div className="border-t border-brand-light/10 pt-8 flex gap-8">
              <div>
                <span className="block text-2xl font-bold italic">10+</span>
                <span className="text-xs uppercase tracking-widest text-brand-gray">{t('impact.statYears')}</span>
              </div>
              <div>
                <span className="block text-2xl font-bold italic">50+</span>
                <span className="text-xs uppercase tracking-widest text-brand-gray">{t('impact.statProjects')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Impact;
