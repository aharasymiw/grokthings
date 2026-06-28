/* Pages Functions middleware.
 *
 * The canonical home of this site is https://grokthings.com. We 301-redirect
 * to it from every other hostname the project answers on:
 *   - the project's *.pages.dev hosts (production subdomain + per-deployment
 *     aliases), which Cloudflare always exposes and can't be deleted, and
 *   - the www subdomain, so there's a single canonical host.
 * Requests already on grokthings.com pass straight through to the static site.
 */
export async function onRequest(context) {
  const { request, next } = context
  const url = new URL(request.url)
  const host = url.hostname

  if (host.endsWith('.pages.dev') || host === 'www.grokthings.com') {
    const target = new URL(url.pathname + url.search, 'https://grokthings.com')
    return Response.redirect(target.toString(), 301)
  }

  return next()
}
