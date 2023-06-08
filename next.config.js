/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.lorem.space",
        port: "",
        pathname: "/image/**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "/640/**",
      },
      {
        protocol: "https",
        hostname: "www.searchenginejournal.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "placeimg.com",
        port: "",
        pathname: "/640/**",
      },
    ],
  },
  // env: {
  //   customKey: 'customValue',
  // },
  // // basePath: '/dist'
  // compress: true,
  // async redirects() {
  //   return [
  //     {
  //       source: '/hola',
  //       destination: 'https://github.com/henryp11',
  //       permanent: true,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
