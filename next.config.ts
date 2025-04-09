import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import type { NextConfig } from 'next';

const baseConfig: NextConfig = {
  /* config options here */
};

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig = withVanillaExtract(baseConfig);

export default nextConfig;
