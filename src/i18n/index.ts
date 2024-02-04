import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './languages/en';
import fr from './languages/fr';
import de from './languages/de';
import es from './languages/es';
import it from './languages/it';

const resources = { 
    en, fr, de, es, it
};
i18n.use(initReactI18next) 
    .init({
        compatibilityJSON: 'v3',
        resources,
        lng: 'en',
        interpolation: {
            escapeValue: false,
        },
    });
export default i18n;