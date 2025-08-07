import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `@use 'src/app/styles/module-tools.scss' as *;`,
  },
};

export default nextConfig;
