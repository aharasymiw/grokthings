/* Pages Functions middleware.
 *
 * The canonical home of this site is https://grokthings.com. Cloudflare always
 * exposes the project's *.pages.dev hostnames (the production subdomain and
 * per-deployment aliases) and they can't be deleted — so we 301-redirect any
 * request that arrives on a *.pages.dev host to the same path on the custom
 * domain. Requests on grokthings.com pass straight through to the static site.
 */
export async function onRequest(context) {
  const { request, next } = context
  const url = new URL(request.url)

  if (url.hostname.endsWith('.pages.dev')) {
    const target = new URL(url.pathname + url.search, 'https://grokthings.com')
    return Response.redirect(target.toString(), 301)
  }

  return next()
}
