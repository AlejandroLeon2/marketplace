// // Importamos los diccionarios de traducción
// import es from "./es.json";
// import en from "./en.json";
// import fr from "./fr.json";

// // 🌍 Idiomas soportados
// export type Languages = "es" | "en" | "fr";

// // 🔑 Claves de traducción (basadas en es.json)
// export type TranslationKey = keyof typeof es;

// // 📚 Diccionario de traducciones
// const translations: Record<Languages, Record<TranslationKey, string>> = {
//   es,
//   en,
//   fr,
// };

// // Idioma actual (persistido en localStorage o español por defecto)
// let currentLang: Languages =
//   (typeof localStorage !== "undefined" &&
//     (localStorage.getItem("lang") as Languages)) ||
//   "es";

// /**
//  * Cambia el idioma actual y lo guarda en localStorage
//  */
// export function setLanguage(lang: Languages) {
//   if (translations[lang]) {
//     currentLang = lang;
//     if (typeof localStorage !== "undefined") {
//       localStorage.setItem("lang", lang);
//     }
//   }
// }

// /**
//  * Obtiene el idioma actual
//  */
// export function getLanguage(): Languages {
//   return currentLang;
// }

// /**
//  * Traduce una clave según el idioma actual
//  */
// export function t(key: TranslationKey): string {
//   return translations[currentLang][key] ?? key;
// }

// /**
//  * Actualiza todos los elementos con data-i18n
//  */
// export function updateTexts() {
//   if (typeof document !== "undefined") {
//     document.querySelectorAll("[data-i18n]").forEach((el) => {
//       const key = el.getAttribute("data-i18n") as TranslationKey;
//       if (key && translations[currentLang][key]) {
//         el.textContent = translations[currentLang][key];
//       }
//     });
//   }
// }

// // 🔥 Exponer al navegador
// if (typeof window !== "undefined") {
//   (window as any).t = t;
//   (window as any).setLanguage = (lang: Languages) => {
//     setLanguage(lang);
//     updateTexts();
//   };
// }


// src/translations/i18n.ts
let translations: Record<string, string> = {};
let currentLang = "es";

export async function loadTranslations(lang: string) {
  try {
    const res = await fetch(`/translations/${lang}.json`);
    translations = await res.json();
    currentLang = lang;
    applyTranslations();
  } catch (e) {
    console.error("Error cargando traducciones:", e);
  }
}

export function applyTranslations() {
  document.querySelectorAll<HTMLElement>("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (!key) return;

    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      (el as HTMLInputElement).placeholder =
        translations[key] || el.getAttribute("placeholder") || "";
    } else {
      el.textContent = translations[key] || el.textContent || "";
    }
  });
}
