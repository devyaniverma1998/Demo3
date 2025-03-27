/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    assetPrefix: "./",     async generateStaticParams() {
      return [];
    },
  };
  
  export default nextConfig;
