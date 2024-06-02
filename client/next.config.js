const withPWA = require("next-pwa")({
  dest: "public",
  // disable: process.env.NODE_ENV === "development",
  // register: true,
  // scope: "/",
  // sw: "service-worker.js",
});

/**
 * @type {import('next').NextConfig}
 */
module.exports = withPWA({
  output: "export",
  trailingSlash: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe",
          },
          {
            key: "Access-Control-Allow-Credentials",
            value: "true",
          },
        ],
      },
    ];
  },
  // async rewrites() {
  //     return [
  //         {
  //             source: "/api/:path*",
  //             destination: "https://api.example.com/:path*",
  //         },
  //     ];
  // },
  // async redirects() {
  //     return [
  //         {
  //             source: "/api/:path*",
  //             destination: "https://api.example.com/:path*",
  //             permanent: true,
  //         },
  //     ];
  // },
});
