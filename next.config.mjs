/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/', // The path you want to redirect from
          destination: '/welcome', // The path you want to redirect to
          permanent: true, // Set to true for a 301 redirect, false for a 302 redirect
        },
      ];
    },
  };
  
  export default nextConfig;
  