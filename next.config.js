module.exports = {
  images: {
    unoptimized: true,
    // disableStaticImages: true,
  },
  swcMinify: true,
  reactStrictMode: true,
  // distDir: "build",
  trailingSlash: true,
  // basePath: "/",
  compiler: {
    removeConsole: process.env.NODE_ENV === "development" ? false : true,
  },
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return "20221202";
  },
};
