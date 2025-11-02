import { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { ThemeContextType } from './ThemeContext.types';

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toogleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return <ThemeContext.Provider value={{ theme, toogleTheme }}>{children}</ThemeContext.Provider>;
};
