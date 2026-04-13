// Client-side toggle logic. Loaded as a small inline script or island.
interface ThemeToggleElement extends HTMLElement {
  __themeToggleHandler?: EventListener;
}

export function initThemeToggle(): void {
  function syncThemeFromStorage(): void {
    let storedTheme: string | null = null;
    try {
      storedTheme = localStorage.getItem("theme");
    } catch (e) {}

    if (storedTheme === "light") {
      document.documentElement.classList.add("light");
      return;
    }

    if (storedTheme === "dark") {
      document.documentElement.classList.remove("light");
    }
  }

  syncThemeFromStorage();

  const toggle = document.getElementById(
    "theme-toggle",
  ) as ThemeToggleElement | null;
  if (!toggle) return;
  const toggleElement = toggle;

  function updateToggle(): void {
    const isLight = document.documentElement.classList.contains("light");
    const nextLabel = isLight
      ? toggleElement.dataset.darkLabel ?? "Dark"
      : toggleElement.dataset.lightLabel ?? "Light";
    const nextAria = isLight
      ? toggleElement.dataset.darkAria ?? "Dark mode"
      : toggleElement.dataset.lightAria ?? "Light mode";
    const lightIconElement = toggleElement.querySelector(
      "[data-theme-toggle-icon-light]",
    );
    const darkIconElement = toggleElement.querySelector(
      "[data-theme-toggle-icon-dark]",
    );
    const labelElement = toggleElement.querySelector<HTMLElement>(
      "[data-theme-toggle-label]",
    );

    if (lightIconElement && darkIconElement) {
      if (isLight) {
        lightIconElement.classList.add("hidden");
        darkIconElement.classList.remove("hidden");
      } else {
        lightIconElement.classList.remove("hidden");
        darkIconElement.classList.add("hidden");
      }
    }

    if (labelElement) {
      labelElement.textContent = nextLabel;
    } else {
      toggleElement.textContent = nextLabel;
    }
    toggleElement.setAttribute("aria-label", nextAria);
    toggleElement.setAttribute("aria-pressed", isLight ? "false" : "true");
  }

  if (toggleElement.__themeToggleHandler) {
    toggleElement.removeEventListener("click", toggleElement.__themeToggleHandler);
  }

  const handleClick: EventListener = () => {
    const isCurrentlyLight =
      document.documentElement.classList.contains("light");
    if (isCurrentlyLight) {
      document.documentElement.classList.remove("light");
      try {
        localStorage.setItem("theme", "dark");
      } catch (e) {}
    } else {
      document.documentElement.classList.add("light");
      try {
        localStorage.setItem("theme", "light");
      } catch (e) {}
    }
    updateToggle();
  };

  toggleElement.__themeToggleHandler = handleClick;
  toggleElement.addEventListener("click", handleClick);

  updateToggle();
}
