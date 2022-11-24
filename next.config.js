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
};
