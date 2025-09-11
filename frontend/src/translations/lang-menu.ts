// import { setLanguage, updateTexts } from "./i18n";

// export function initLangMenu() {
//   document.querySelectorAll<HTMLAnchorElement>("#menu-lang [data-lang]").forEach((el) => {
//     el.addEventListener("click", (e) => {
//       e.preventDefault();
//       const lang = el.getAttribute("data-lang");
//       if (lang === "es" || lang === "en" || lang === "fr") {
//         setLanguage(lang);
//         updateTexts();

//         // Cambiar el texto visible del botón
//         const textLang = document.getElementById("text-lang");
//         if (textLang) {
//           if (lang === "es") textLang.textContent = "Español";
//           if (lang === "en") textLang.textContent = "English";
//           if (lang === "fr") textLang.textContent = "Français";
//         }

//         // Opcional: setear atributo en <html>
//         document.documentElement.setAttribute("lang", lang);
//       }
//     });
//   });

//   // actualizar textos al cargar
//   updateTexts();
// }

// src/translations/lang-menu.ts
import { loadTranslations } from "./i18n";

export function initLangMenu() {
  document.querySelectorAll<HTMLAnchorElement>("#menu-lang a").forEach((link) => {
    link.addEventListener("click", (ev) => {
      ev.preventDefault();
      const lang = link.getAttribute("data-lang");
      if (lang) {
        loadTranslations(lang);
        const textLang = document.getElementById("text-lang");
        if (textLang) textLang.textContent = link.textContent || lang;
      }
    });
  });

  // cargar idioma inicial
  loadTranslations("es");
}
