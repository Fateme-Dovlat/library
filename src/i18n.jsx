import i18n from "i18next";
import {initReactI18next} from "react-i18next"

import en from "./locales/en.json"
import fa from "./locales/fa.json"
import de from "./locales/de.json"

i18n.use(initReactI18next).init({
    resources:{
        en:{translation:en},
        fa:{translation:fa},
        de:{translation:de}
    },
    lng:"fa",
    fallbackLng:"fa"
})

export default i18n