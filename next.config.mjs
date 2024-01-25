/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: config => {
     config.resolve.fallback = { ...config.resolve.fallback, net: false, os: false, tls: false, fs: false, path: false, child_process: false, canvas: false };
     return config;
  },
  async headers() {
     return [
       {
         // Aplica a todas as páginas
         source: "/(.*)",
         headers:[
          {
            "key": 'Content-Security-Policy',
            "value": "frame-ancestors *",
          },
        { "key": "Access-Control-Allow-Credentials", "value": "true" },
        { "key": "Access-Control-Allow-Origin", "value": "*" },
        { "key": "Access-Control-Allow-Methods", "value": "GET,DELETE,PATCH,POST,PUT" },
        { "key": "Access-Control-Allow-Headers", "value": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" }
      ]
       },
     ];
  },
 }
 
 export default nextConfig