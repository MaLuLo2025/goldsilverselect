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
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "img-src 'self' data: https:",
      "font-src 'self' https://fonts.gstatic.com",
      "connect-src 'self' https://*.supabase.co https://api.stripe.com https://web-production-3df4b.up.railway.app https://api.tradesilvester.com https://*.google-analytics.com https://*.analytics.google.com https://select-admin-teal.vercel.app",
      "frame-src 'self' https://js.stripe.com https://sgi-analytics.vercel.app https://thegoldwindow.ai",
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
      {
        source: '/js/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=3600' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // silvergoldinsights.com: www → non-www canonical redirect
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www\\.silvergoldinsights\\.com' }],
        destination: 'https://silvergoldinsights.com/:path*',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        // silvergoldinsights.com — serve static files from public/preview/sgi/
        {
          source: '/',
          destination: '/preview/sgi/index.html',
          has: [{ type: 'host', value: '(www\\.)?silvergoldinsights\\.com' }],
        },
        {
          source: '/education',
          destination: '/preview/sgi/education/index.html',
          has: [{ type: 'host', value: '(www\\.)?silvergoldinsights\\.com' }],
        },
        {
          source: '/education/',
          destination: '/preview/sgi/education/index.html',
          has: [{ type: 'host', value: '(www\\.)?silvergoldinsights\\.com' }],
        },
        {
          source: '/research',
          destination: '/preview/sgi/research/index.html',
          has: [{ type: 'host', value: '(www\\.)?silvergoldinsights\\.com' }],
        },
        {
          source: '/research/',
          destination: '/preview/sgi/research/index.html',
          has: [{ type: 'host', value: '(www\\.)?silvergoldinsights\\.com' }],
        },
        {
          source: '/js/:path*',
          destination: '/preview/sgi/js/:path*',
          has: [{ type: 'host', value: '(www\\.)?silvergoldinsights\\.com' }],
        },
        {
          source: '/sitemap.xml',
          destination: '/preview/sgi/sitemap.xml',
          has: [{ type: 'host', value: '(www\\.)?silvergoldinsights\\.com' }],
        },
        {
          source: '/robots.txt',
          destination: '/preview/sgi/robots.txt',
          has: [{ type: 'host', value: '(www\\.)?silvergoldinsights\\.com' }],
        },
        // tradesilvester.com — serve static files from public/tradesilvester/
        {
          source: '/',
          destination: '/tradesilvester/index.html',
          has: [{ type: 'host', value: '(www\\.)?tradesilvester\\.com' }],
        },
        {
          source: '/app.html',
          destination: '/tradesilvester/app.html',
          has: [{ type: 'host', value: '(www\\.)?tradesilvester\\.com' }],
        },
        {
          source: '/favicon.svg',
          destination: '/tradesilvester/favicon.svg',
          has: [{ type: 'host', value: '(www\\.)?tradesilvester\\.com' }],
        },
        {
          source: '/icons.svg',
          destination: '/tradesilvester/icons.svg',
          has: [{ type: 'host', value: '(www\\.)?tradesilvester\\.com' }],
        },
        {
          source: '/assets/:path*',
          destination: '/tradesilvester/assets/:path*',
          has: [{ type: 'host', value: '(www\\.)?tradesilvester\\.com' }],
        },
        {
          source: '/:path(silvester-logo-.*\\.png)',
          destination: '/tradesilvester/:path',
          has: [{ type: 'host', value: '(www\\.)?tradesilvester\\.com' }],
        },
      ],
      afterFiles: [
        // Path-based rewrites for goldsilverselect.com subpages
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
      ],
    };
  },
};

module.exports = nextConfig;
