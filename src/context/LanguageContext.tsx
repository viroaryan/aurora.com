'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'hi';

type Translations = {
    [key in Language]: {
        [key: string]: string;
    };
};

const translations: Translations = {
    en: {
        "nav-features": "Features",
        "nav-docs": "Documentation",
        "nav-changelog": "Changelog",
        "nav-blog": "Blog",
        "btn-download": "Download",
        "hero-title": "Version Control. At the speed of thought.",
        "hero-desc": "Aurora is the world's fastest version control engine, built in Go. By eliminating staging area friction and introducing smart automatic saves, Aurora keeps you in flow state.",
        "hero-btn-install": "Download Installer",
        "hero-btn-docs": "Explore Documentation",
        "features-title": "Designed for modern teams.",
        "features-desc": "No more detached HEAD states. No more broken local configurations. Aurora is built to be robust, secure, and blazingly fast."
    },
    hi: {
        "nav-features": "विशेषताएं",
        "nav-docs": "दस्तावेज़",
        "nav-changelog": "बदलाव लॉग",
        "nav-blog": "ब्लॉग",
        "btn-download": "डाउनलोड",
        "hero-title": "वर्जन कंट्रोल। सोच की रफ्तार पर।",
        "hero-desc": "अरोरा गो (Go) में बना दुनिया का सबसे तेज़ वर्जन कंट्रोल इंजन है। स्टेजिंग एरिया की झंझटों को खत्म करके और स्मार्ट ऑटोमैटिक सेव्स के साथ, यह आपको बिना रुकावट काम करने में मदद करता है।",
        "hero-btn-install": "इंस्टॉलर डाउनलोड करें",
        "hero-btn-docs": "दस्तावेज़ पढ़ें",
        "features-title": "आधुनिक टीमों के लिए डिज़ाइन किया गया।",
        "features-desc": "अब कोई उलझाने वाले एरर नहीं। कोई टूटी हुई लोकल सेटिंग्स नहीं। अरोरा को मजबूत, सुरक्षित और बेहद तेज़ बनाने के लिए बनाया गया है।"
    }
};

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguageState] = useState<Language>('en');

    useEffect(() => {
        const savedLang = localStorage.getItem('aurora-lang') as Language;
        if (savedLang === 'en' || savedLang === 'hi') {
            setLanguageState(savedLang);
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('aurora-lang', lang);
    };

    const t = (key: string): string => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
