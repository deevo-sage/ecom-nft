const withTM = require("next-transpile-modules")(["eth-hooks"]);

/** @type {import('next').NextConfig} */

const nextConfig = withTM({
  reactStrictMode: true,
  images: {
    domains: [
      "avatars.dicebear.com",
      "lh3.googleusercontent.com",
      "images.unsplash.com",
      "firebasestorage.googleapis.com",
      "lh3.google.com",
      "ipfs.io",
    ],
  },
});

module.exports = nextConfig;
