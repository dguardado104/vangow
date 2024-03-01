import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import enJSON from './locales/en.json'
import esJSON from './locales/es.json'
import HttpApi from 'i18next-http-backend'

i18n
  .use(HttpApi)
  .use(initReactI18next).init({
    resources: {
      en: { ...enJSON },
      es: { ...esJSON },
    },
    lng: "en",
  });