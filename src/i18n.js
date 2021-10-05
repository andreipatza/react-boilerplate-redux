import i18n from 'i18next'
import backend from 'i18next-http-backend'
import detector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

// the translations
// (tip move them in a JSON file and import them)
i18n
  .use(detector)
  .use(backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    nsSeparator: false,
    keySeparator: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: { translation: require('./locales/en/translation.json') },
      ro: { translation: require('./locales/ro/translation.json') },
    },
  })

export default i18n
