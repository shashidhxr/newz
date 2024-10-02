/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/', // When someone accesses the root URL
          destination: '/welcome', // Redirect them to /welcome
          permanent: true, // Set to true if this is a permanent redirect for SEO
        },
      ];
    },
  };
  
  export default nextConfig;
  