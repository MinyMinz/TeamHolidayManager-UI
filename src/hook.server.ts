import type { Handle } from '@sveltejs/kit';

// export const setSecurityHeaders = (headers: Headers) => {
//   headers.set('X-Content-Type-Options', 'nosniff');
//   headers.set('X-Frame-Options', 'DENY');
//   headers.set('Referrer-Policy', 'no-referrer');
//   headers.set('Permissions-Policy', 'geolocation=(), microphone=()');
//   headers.set('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self';");
// };

const securityHeaders ={
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'Referrer-Policy': 'no-referrer',
  'Permissions-Policy': 'geolocation=(), microphone=()',
  'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self';"
}

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);

  Object.entries(securityHeaders).forEach(
    ([key, value]) => response.headers.set(key, value)
  );
  return response;
};