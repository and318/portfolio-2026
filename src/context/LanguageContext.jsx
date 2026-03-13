import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../constants/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem('language');
        return saved || 'es';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
        document.documentElement.lang = language;
        document.title = language === 'es'
            ? 'Ingeniero UX/UI Senior & Desarrollador Front-End | Andrés Saavedra'
            : 'Senior UX/UI Engineer & Front-End Developer | Andrés Saavedra';
    }, [language]);

    const t = (path) => {
        const keys = path.split('.');
        let value = translations[language];

        for (const key of keys) {
            if (value && value[key]) {
                value = value[key];
            } else {
                return path; // Fallback to path if not found
            }
        }

        return value;
    };

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
