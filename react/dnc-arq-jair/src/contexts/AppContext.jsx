import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState('br');

  const value = {
    isLoading,
    setIsLoading,
    language,
    setLanguage,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContext;
import { useState, useEffect } from 'react';
import { AppContext } from './AppContext';
import { getApiData } from '@services/js/apiServices';

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState('br');
  const [languages, setLanguages] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const getTexts = await getApiData('webtext');
        setLanguages(getTexts);
      } catch (e) {
        console.error('Error fetching languages:', e);
      } finally {
        setLoading(false);
      }
    };
    fetchLanguages();
  }, []);

  return <AppContext.Provider value={{ language, languages, setLanguage, loading }}>{children}</AppContext.Provider>;
};
