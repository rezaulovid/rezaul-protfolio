import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  async headers() {
    return [
      {
        source: '/resume/:path*',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'attachment',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
