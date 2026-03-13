import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

const SEO = ({ title, description, schemaData }) => {
    const { language } = useLanguage();

    const siteTitle = title || (language === 'es'
        ? 'Andrés Saavedra | Ingeniero UX/UI Senior & Desarrollador Front-End'
        : 'Andrés Saavedra | Senior UX/UI Engineer & Front-End Developer');

    const siteDescription = description || (language === 'es'
        ? 'Senior UX/UI Engineer & Front-End Developer con más de 10 años de experiencia transformando necesidades de negocio en productos digitales escalables.'
        : 'Senior UX/UI Engineer & Front-End Developer with over 10 years of experience transforming business needs into scalable digital products.');

    const canonicalUrl = window.location.href;

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="description" content={siteDescription} />
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:image" content="https://and318.com/og-image.jpg" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={canonicalUrl} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={siteDescription} />
            <meta property="twitter:image" content="https://and318.com/og-image.jpg" />

            {/* Structured Data */}
            {schemaData && (
                <script type="application/ld+json">
                    {JSON.stringify(schemaData)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
