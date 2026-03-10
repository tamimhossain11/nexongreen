const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    if (!isServer) {
      config.resolve.alias["private-next-instrumentation-client"] = path.join(
        __dirname,
        "instrumentation-client.js"
      );
    }
    return config;
  },
};

module.exports = nextConfig;
