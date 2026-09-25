/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static exports when using <Image /> tags
  },
};

export default nextConfig;
