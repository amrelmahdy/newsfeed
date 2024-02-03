import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { get, save } from '../storage';


interface ThemeContextType {
  theme: string;
  isSystemDefault: boolean,
  toggleTheme: (newTheme: string) => void;
  useSystemTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  isSystemDefault: false,
  toggleTheme: () => { },
  useSystemTheme: () => { }
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const colorScheme: string = useColorScheme() || 'light';
  const [theme, setTheme] = useState<string>(colorScheme || 'light');
  const [isSystemDefault, setIsSystemDefault] = useState<boolean>(false);
  useEffect(() => {
    const getTheme = async () => {
      try {
        const savedTheme: string | null = await get('Theme');
        const savedIsSystemDefault: boolean | null = await get('ThemeSystemDefault');
        if (savedTheme) {
          setTheme(savedTheme);
        }
        if (savedIsSystemDefault) {
          setIsSystemDefault(savedIsSystemDefault);
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
    setIsSystemDefault(false);
    save('Theme', newTheme);
    save('ThemeSystemDefault', false);
  };

  const useSystemTheme = () => {
    setTheme(colorScheme);
    setIsSystemDefault(true);
    save('Theme', colorScheme);
    save('ThemeSystemDefault', true);
  };

  return (
    <ThemeContext.Provider value={{ theme, isSystemDefault, toggleTheme, useSystemTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;