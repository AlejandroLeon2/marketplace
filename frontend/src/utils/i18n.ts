type Lang = 'es' | 'en';

// Importa los JSON 
import es from '../lang/es.json';
import en from '../lang/en.json';

const translations: Record<Lang, Record<string, string>> = {
  es: es as any,
  en: en as any
};

let current: Lang = (typeof localStorage !== 'undefined' ? (localStorage.getItem('lang') as Lang) : null) || 'es';

export function initI18n() {
  if (typeof document === 'undefined') return; // seguridad SSR

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setupListeners();
      setLanguage(current);
    });
  } else {
    setupListeners();
    setLanguage(current);
  }
}

function setupListeners() {
  const menu = document.getElementById('menu-lang');
  if (!menu) return;
  menu.querySelectorAll<HTMLElement>('a[data-lang]').forEach(a => {
    a.addEventListener('click', (ev) => {
      ev.preventDefault();
      const raw = a.getAttribute('data-lang') || '';
      // permitimos tanto "es"/"en" como "Español"/"English"
      let lang: Lang = raw === 'en' || raw.toLowerCase().startsWith('en') ? 'en' : 'es';
      setLanguage(lang);
    });
  });
}

export function setLanguage(lang: Lang) {
  current = lang;
  applyTranslations();
  try { localStorage.setItem('lang', lang); } catch (e) { /* ignore */ }

  // actualizar etiqueta en el botón de idioma si existe
  const textLang = document.getElementById('text-lang');
  if (textLang && translations[lang]['text-lang']) {
    textLang.textContent = translations[lang]['text-lang'];
  }

  document.documentElement.lang = lang;
}

function applyTranslations() {
  const map = translations[current];
  Object.keys(map).forEach(key => {
    const el = document.getElementById(key);
    if (!el) return;

    // Inputs / textareas -> placeholder
    if (el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement) {
      el.placeholder = map[key];
      return;
    }

    // Si el elemento tiene un hijo con data-i18n-target (opcional), usarlo
    // revisar si es necesario usar 
    const target = el.querySelector<HTMLElement>('[data-i18n-target]');
    if (target) {
      target.textContent = map[key];
      return;
    }

    // Si el elemento no tiene children (solo texto), reemplazar textContent
    if (el.children.length === 0) {
      el.textContent = map[key];
      return;
    }

    // Si tiene children (iconos/SVG), buscamos .i18n-text o la creamos
    let span = el.querySelector<HTMLElement>('.i18n-text');
    if (!span) {
      span = document.createElement('span');
      span.className = 'i18n-text';
      // insertarlo antes del último hijo para mantener iconos si los hay
      el.appendChild(span);
    }
    span.textContent = map[key];
  });
}
