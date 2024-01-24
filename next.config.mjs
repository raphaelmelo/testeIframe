/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack: config => {
      config.resolve.fallback = { ...config.resolve.fallback, net: false, os: false, tls: false, fs: false, path: false, child_process: false, canvas: false };
      return config;
    },
  }
  
  export default nextConfig