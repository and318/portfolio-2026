import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Impact from '../components/Impact';
import Capabilities from '../components/Capabilities';
import PortfolioGrid from '../components/PortfolioGrid';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { t } = useLanguage();
  const experienceData = t('experience');

  return (
    <div className="bg-brand-light font-sans">
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
