// Fade-up animation for project cards on home page.
// Uses IntersectionObserver. Falls back to visible if unsupported.

export function initScrollFade(): void {
  const elements = document.querySelectorAll('.fade-up');

  if (!('IntersectionObserver' in window)) {
    // Fallback: show everything immediately
    elements.forEach((el) => {
      (el as HTMLElement).style.opacity = '1';
      (el as HTMLElement).style.transform = 'none';
    });
    return;
  }

  // Set initial hidden state
  elements.forEach((el) => {
    const htmlEl = el as HTMLElement;
    htmlEl.style.opacity = '0';
    htmlEl.style.transform = 'translateY(16px)';
    htmlEl.style.transition = 'opacity 0.4s ease-out, transform 0.4s ease-out';
    const delay = htmlEl.parentElement?.style.getPropertyValue('--fade-delay') || '0ms';
    htmlEl.style.transitionDelay = delay;
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const htmlEl = entry.target as HTMLElement;
          htmlEl.style.opacity = '1';
          htmlEl.style.transform = 'none';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 },
  );

  elements.forEach((el) => observer.observe(el));
}
