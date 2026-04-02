import { describe, it, expect, vi, beforeEach } from 'vitest';

// theme-init logic extracted as a pure function for testing
// The actual inline script in <head> will call this logic
function getInitialTheme(
  storedTheme: string | null,
  prefersDark: boolean,
): 'dark' | 'light' {
  if (storedTheme === 'light' || storedTheme === 'dark') {
    return storedTheme;
  }
  return prefersDark ? 'dark' : 'light';
}

describe('getInitialTheme', () => {
  it('returns stored theme when localStorage has "dark"', () => {
    expect(getInitialTheme('dark', false)).toBe('dark');
  });

  it('returns stored theme when localStorage has "light"', () => {
    expect(getInitialTheme('light', true)).toBe('light');
  });

  it('returns "dark" when no stored theme and OS prefers dark', () => {
    expect(getInitialTheme(null, true)).toBe('dark');
  });

  it('returns "light" when no stored theme and OS prefers light', () => {
    expect(getInitialTheme(null, false)).toBe('light');
  });

  it('ignores invalid stored values and falls back to OS preference', () => {
    expect(getInitialTheme('invalid', true)).toBe('dark');
    expect(getInitialTheme('', false)).toBe('light');
  });
});
