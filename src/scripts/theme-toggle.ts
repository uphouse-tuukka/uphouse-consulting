// Client-side toggle logic. Loaded as a small inline script or island.
export function initThemeToggle(): void {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  function updateToggle(): void {
    const isLight = document.documentElement.classList.contains('light');
    toggle!.textContent = isLight ? 'Dark' : 'Light';
    toggle!.setAttribute('aria-pressed', isLight ? 'false' : 'true');
  }

  toggle.addEventListener('click', () => {
    const isCurrentlyLight = document.documentElement.classList.contains('light');
    if (isCurrentlyLight) {
      document.documentElement.classList.remove('light');
      try { localStorage.setItem('theme', 'dark'); } catch(e) {}
    } else {
      document.documentElement.classList.add('light');
      try { localStorage.setItem('theme', 'light'); } catch(e) {}
    }
    updateToggle();
  });

  updateToggle();
}
