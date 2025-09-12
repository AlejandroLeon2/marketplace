// src/translations/i18n.ts
let translations: Record<string, string> = {};
let currentLang = "es";

export async function loadTranslations(lang: string) {
  try {
    const res = await fetch(`/translations/${lang}.json`);
    const data = await res.json();

    console.log("Traducciones cargadas:", lang, data);

    translations = data;       // 👈 asignamos directamente
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
