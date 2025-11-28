import type { NextConfig } from "next";
import { build } from 'velite';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { dev, isServer }) => {
    if (dev && isServer) {
      const { build } = require('velite');
      build({ watch: true, clean: false });
    }
    return config;
  },
};

export default nextConfig;

