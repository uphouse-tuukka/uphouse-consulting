// Client-side toggle logic. Loaded as a small inline script or island.
interface ThemeToggleElement extends HTMLElement {
  __themeToggleHandler?: EventListener;
}

export function initThemeToggle(): void {
  function syncThemeFromStorage(): void {
    let storedTheme: string | null = null;
    try {
      storedTheme = localStorage.getItem('theme');
    } catch (e) {}

    if (storedTheme === 'light') {
      document.documentElement.classList.add('light');
      return;
    }

    if (storedTheme === 'dark') {
      document.documentElement.classList.remove('light');
    }
  }

  syncThemeFromStorage();

  const toggle = document.getElementById('theme-toggle') as ThemeToggleElement | null;
  if (!toggle) return;

  function updateToggle(): void {
    const isLight = document.documentElement.classList.contains('light');
    toggle.textContent = isLight ? 'Dark' : 'Light';
    toggle.setAttribute('aria-pressed', isLight ? 'false' : 'true');
  }

  if (toggle.__themeToggleHandler) {
    toggle.removeEventListener('click', toggle.__themeToggleHandler);
  }

  const handleClick: EventListener = () => {
    const isCurrentlyLight = document.documentElement.classList.contains('light');
    if (isCurrentlyLight) {
      document.documentElement.classList.remove('light');
      try { localStorage.setItem('theme', 'dark'); } catch(e) {}
    } else {
      document.documentElement.classList.add('light');
      try { localStorage.setItem('theme', 'light'); } catch(e) {}
    }
    updateToggle();
  };

  toggle.__themeToggleHandler = handleClick;
  toggle.addEventListener('click', handleClick);

  updateToggle();
}
