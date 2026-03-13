import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Impact from '../components/Impact';
import Capabilities from '../components/Capabilities';
import PortfolioGrid from '../components/PortfolioGrid';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { t, language } = useLanguage();
  const experienceData = t('experience');

  const professionalSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Andrés Saavedra",
    "jobTitle": language === 'es' ? "Ingeniero UX/UI Senior" : "Senior UX/UI Engineer",
    "url": "https://and318.com",
    "sameAs": [
      "https://linkedin.com/in/andressaavedraag",
      "https://github.com/and318"
    ],
    "description": language === 'es'
      ? "Senior UX/UI Engineer & Front-End Developer con más de 10 años de experiencia."
      : "Senior UX/UI Engineer & Front-End Developer with over 10 years of experience."
  };

  return (
    <div className="bg-brand-light font-sans">
      <SEO schemaData={professionalSchema} />
      <Navbar />
      <Hero />
      <main>
        <PortfolioGrid items={experienceData} title={t('portfolio.title')} />
        <Capabilities />
        <Impact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
