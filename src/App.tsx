import React, { useEffect } from 'react';
import Navigation from './navigation';
import { ThemeProvider } from './theme/ThemeContext';
import { useTranslation, I18nextProvider } from 'react-i18next';
import { get } from './storage';



function App() {
  const { i18n } = useTranslation()
  useEffect(() => {
    getLanguage();
  }, [])

  const getLanguage = async () => {
    const lang: string | undefined = await get('Language') || 'en';
    i18n.changeLanguage(lang);
  }

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider>
        <Navigation />
      </ThemeProvider>
    </I18nextProvider>

  );
}

export default App;
