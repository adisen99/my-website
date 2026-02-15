import type { NextConfig } from 'next';
import withMDX from '@next/mdx';

const mdx = withMDX({ extension: /\.mdx?$/ });

const nextConfig: NextConfig = {
  // Keep routing to standard JS/TS extensions. We import MDX manually
  // from `src/content` to avoid duplicate automatic page registration
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
};

// Wrap the Next config with the MDX plugin so .mdx files are compiled to modules
export default mdx(nextConfig) as NextConfig;
