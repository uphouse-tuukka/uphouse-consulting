// This script runs inline in <head> to prevent FOUC.
// It is NOT bundled — it's inlined as a <script> tag in BaseLayout.
// Keep it minimal: read preference, apply class, done.
export const themeInitScript = `
(function() {
  var stored = null;
  try { stored = localStorage.getItem('theme'); } catch(e) {}
  var theme = (stored === 'light' || stored === 'dark') ? stored : 'dark';
  if (theme === 'light') {
    document.documentElement.classList.add('light');
  }
})();
`;
