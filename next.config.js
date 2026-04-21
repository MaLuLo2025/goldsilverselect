/** @type {import('next').NextConfig} */

const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: https:",
      "font-src 'self'",
      "connect-src 'self' https://*.supabase.co https://api.stripe.com https://web-production-3df4b.up.railway.app https://api.tradesilvester.com https://*.google-analytics.com https://*.analytics.google.com https://select-admin-teal.vercel.app",
      "frame-src https://js.stripe.com https://sgi-analytics.vercel.app",
    ].join('; ')
  }
];

const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/SGI',
        destination: '/sgi',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/tradesilvester',
        destination: '/tradesilvester/index.html',
      },
      {
        source: '/silvester',
        destination: '/silvester/index.html',
      },
      {
        source: '/tory',
        destination: '/tory/index.html',
      },
    ];
  },
};

module.exports = nextConfig;
