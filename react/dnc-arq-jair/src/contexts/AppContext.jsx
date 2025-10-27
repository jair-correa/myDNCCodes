import React, { createContext, useState, useEffect } from 'react';
import { getApiData } from '@services/js/apiServices';

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState('br');
  const [languages, setLanguages] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const getTexts = await getApiData('webtext');
        setLanguages(getTexts);
      } catch (e) {
        console.error('Error fetching languages:', e);
        setLanguages({});
      } finally {
        setLoading(false);
      }
    };
    fetchLanguages();
  }, []);

  const safeLanguages = languages?.[language] ?? {
    general: {
      footerLogoText: '',
    },
    menu: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
  };

  // Ensure consumers that access appContext.languages[appContext.language]
  // always have an object for the current language to avoid runtime errors.
  const providedLanguages = languages ?? { [language]: safeLanguages };

  return <AppContext.Provider value={{ language, setLanguage, languages: providedLanguages, loading, isLoading: loading, setLoading }}>{children}</AppContext.Provider>;
};
