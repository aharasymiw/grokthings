/*
 * Runs before first paint to prevent a theme/style "flash".
 * Reads saved choices; otherwise defers to the OS via CSS prefers-color-scheme
 * (theme) and the Calm house style (style).
 * Kept as an external file (not inline) so the strict CSP can use script-src 'self'.
 */
(function () {
  try {
    var saved = localStorage.getItem('grok-theme');
    if (saved === 'light' || saved === 'dark') {
      document.documentElement.setAttribute('data-theme', saved);
    }
    var style = localStorage.getItem('grok-style');
    if (style === 'felt' || style === 'lisafrank') {
      document.documentElement.setAttribute('data-style', style);
    }
    var font = localStorage.getItem('grok-font');
    var fonts = ['atkinson', 'comicsans', 'system', 'spacing', 'opendyslexic'];
    document.documentElement.setAttribute(
      'data-font',
      fonts.indexOf(font) >= 0 ? font : 'atkinson'
    );
  } catch (e) {
    /* localStorage blocked (private mode, etc.) — fall back to the defaults. */
  }
})();
