/* The first focusable element on the page: lets keyboard and screen-reader
   users jump straight past the top bar to the main content. The onClick
   moves focus to <main> (focusable via tabIndex={-1}); the href handles the
   scroll. Doing both is the reliable cross-browser skip-link pattern. */
export function SkipLink() {
  const focusMain = () => {
    document.getElementById('main')?.focus()
  }
  return (
    <a className="skip-link" href="#main" onClick={focusMain}>
      Skip to main content
    </a>
  )
}
