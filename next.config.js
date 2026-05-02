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

    // Force single React instance to fix React 19 RC jsxDEV cold-compile crash
    config.resolve.alias["react"] = path.resolve(__dirname, "node_modules/react");
    config.resolve.alias["react-dom"] = path.resolve(__dirname, "node_modules/react-dom");

    return config;
  },
};

module.exports = nextConfig;
