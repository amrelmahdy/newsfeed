import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { get, save } from '../storage';


interface ThemeContextType {
  theme: string;
  toggleTheme: (newTheme: string) => void;
  useSystemTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => { },
  useSystemTheme: () => { }
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const colorScheme: string = useColorScheme() || 'light';
  const [theme, setTheme] = useState<string>(colorScheme || 'light');
  useEffect(() => {
    const getTheme = async () => {
      try {
        const savedTheme: string | null = await get('Theme');
        if (savedTheme) {
          setTheme(savedTheme);
        }
      } catch (error) {
        console.log('Error loading theme:', error);
      }
    };
    getTheme();
  }, []);

  useEffect(() => {
    if (colorScheme) {
      setTheme(colorScheme);
    }
  }, [colorScheme]);

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
    save('Theme', newTheme); 
    save('ThemeSystemDefault', false);
  };

  const useSystemTheme = () => {
    setTheme(colorScheme);
    save('Theme', colorScheme);
    save('ThemeSystemDefault', true);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, useSystemTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;