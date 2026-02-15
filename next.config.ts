import type { NextConfig } from 'next';
import withMDX from '@next/mdx';

const mdx = withMDX({ extension: /\.mdx?$/ });

const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
};

export default mdx(nextConfig) as NextConfig;
