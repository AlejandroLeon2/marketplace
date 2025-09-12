

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

  // idioma inicial
  loadTranslations("es");
}

