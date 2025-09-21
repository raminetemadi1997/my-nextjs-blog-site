import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const isAnalyze = process.env.ANALYZE === "true";

const nextConfig: NextConfig = {};

export default withBundleAnalyzer({
  enabled: isAnalyze,
})(nextConfig);
