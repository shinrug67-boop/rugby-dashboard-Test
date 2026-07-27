// Vercel Edge Middleware. Runs before any file is served, on Vercel only
// (GitHub Pages has no equivalent -- see PROJECT_NOTES.md for why GitHub
// Pages must stay disabled once this is live).
//
// Simple gate: if the `sb-auth` flag cookie set by login.html isn't
// present, redirect to login.html instead of serving the requested page.
// This does NOT verify a JWT signature -- it only checks that the visitor
// went through login.html at some point. Real data protection for match
// data lives in Supabase RLS (see game.html); this middleware exists so
// the other pages' embedded season-aggregate data isn't served to anyone
// who never logged in at all.

export default function middleware(request) {
  // Parse the Cookie header manually (standard Fetch API only -- no `next`
  // package dependency, so this stays a plain static/"Other" Vercel project).
  const cookieHeader = request.headers.get('cookie') || '';
  const isAuthed = cookieHeader.split(';').some(c => c.trim().startsWith('sb-auth='));
  if (isAuthed) return;

  const url = new URL(request.url);
  url.pathname = '/login.html';
  url.searchParams.set('next', new URL(request.url).pathname);
  return Response.redirect(url, 307);
}

export const config = {
  matcher: ['/((?!login.html|middleware.js|favicon.ico).*)'],
};
