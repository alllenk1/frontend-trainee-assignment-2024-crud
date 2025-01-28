export { default } from 'next-auth/middleware';

export const config = { matcher: ['/', '/advertisements/:id*', '/orders'] };
