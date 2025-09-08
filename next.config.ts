import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const isAnalyze = process.env.ANALYZE === "true";

const nextConfig: NextConfig = {
  devIndicators: false,
  webpack(config, { isServer }) {
    if (!isServer) {
      
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      };
    }
    return config;
  },
};

export default withBundleAnalyzer({
  enabled: isAnalyze,
})(nextConfig);
