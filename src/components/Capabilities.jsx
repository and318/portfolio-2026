import { useLanguage } from '../context/LanguageContext';

const CapabilityBlock = ({ title, description }) => {
  return (
    <li data-purpose="skill-card">
      <h4 className="text-sm font-bold uppercase tracking-widest mb-4">{title}</h4>
      <p className="text-brand-gray leading-relaxed">
        {description}
      </p>
    </li>
  );
};

const Capabilities = () => {
  const { t } = useLanguage();
  const strategicCapabilities = t('capabilities.items');

  return (
    <section id="expertise" className="py-32 bg-brand-light" data-purpose="capabilities-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="editorial-grid">
          <div className="col-span-12 md:col-span-4 mb-16 md:mb-0">
            <p className="text-2xl font-display italic leading-relaxed">
              {t('capabilities.tagline')}
            </p>
          </div>
          <ul className="col-span-12 md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {strategicCapabilities.map((item, index) => (
              <CapabilityBlock key={index} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
