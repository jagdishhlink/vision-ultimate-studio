/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp', 'image/avif'],
    unoptimized: true,
    dangerouslyAllowSVG: true,
  },
  env: {
    BUSINESS_NAME: 'Vision_ultimate Studio',
    BUSINESS_PHONE: '091730 31325',
    BUSINESS_ADDRESS: 'Swarnim Bussiness hub, GIDC Bhat, Motera, Ahmedabad, Gujarat 380005',
  },
};

module.exports = nextConfig;
