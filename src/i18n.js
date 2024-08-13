import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa las traducciones como objetos completos
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';

const resources = {
    en: {
        translation: translationEN
    },
    es: {
        translation: translationES
    }
};

i18n.use(initReactI18next).init({
    resources, // Uso de 'resources' en lugar de 'resourses'
    lng: 'en', // Idioma por defecto
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false
    }
});

export default i18n;