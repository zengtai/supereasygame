module.exports = {
  images: {
    loader: "custom",
    domains: ["cdn.iwantalipstick.com"],
    disableStaticImages: true,
  },
  // basePath: "/",
  reactStrictMode: true,
  distDir: "build",
  trailingSlash: true,
  generateBuildId: () => "playgamemobi",
};
