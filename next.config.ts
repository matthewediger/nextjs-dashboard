import type { NextConfig } from 'next';
import { version } from 'next/package.json';

const isCanary = version.includes('canary');

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    ppr: isCanary ? 'incremental' : undefined,
  }
};

export default nextConfig;
