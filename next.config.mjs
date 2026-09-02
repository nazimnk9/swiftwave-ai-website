/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  async redirects() {
    return [
      {
        source: '/pricing',
        destination: 'https://callpilot.pro/pricing',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
