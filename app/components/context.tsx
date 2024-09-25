'use client';
import { createContext, useContext, useState } from 'react';

type Theme = {
  theme: string;
  toggleTheme: () => void;
};

const defaultTheme: Theme = {
  theme: 'dark',
  toggleTheme: () => {},
};
const ThemeContext = createContext(defaultTheme);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  const value = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeProvider;
