/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      net: false,
      os: false,
      tls: false,
      fs: false,
      path: false,
      child_process: false,
      canvas: false,
    };
    return config;
  },
  async headers() {
    return [
      {
        // Aplica a todas as páginas
        source: "/(.*)",
        headers: [
          {
            'key': 'Content-Security-Policy',
            'value': "frame-ancestors *",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
