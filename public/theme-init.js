/*
 * Runs before first paint to prevent a theme "flash".
 * Reads a saved choice; otherwise defers to the OS via CSS prefers-color-scheme.
 * Kept as an external file (not inline) so the strict CSP can use script-src 'self'.
 */
(function () {
  try {
    var saved = localStorage.getItem('grok-theme');
    if (saved === 'light' || saved === 'dark') {
      document.documentElement.setAttribute('data-theme', saved);
    }
  } catch (e) {
    /* localStorage blocked (private mode, etc.) — fall back to OS preference. */
  }
})();
