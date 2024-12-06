import type { Handle } from '@sveltejs/kit';

export const setSecurityHeaders = (headers: Headers) => {
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('X-Frame-Options', 'DENY');
  headers.set('Referrer-Policy', 'no-referrer');
  headers.set('Permissions-Policy', 'geolocation=(), microphone=()');
  headers.set('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self';");
};

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);

  // Create a new Headers object if response.headers is not an instance of Headers
  const headers = new Headers(response.headers);

  setSecurityHeaders(headers);

  // Return a new response with the updated headers
  return new Response(response.body, {...response,headers});
};