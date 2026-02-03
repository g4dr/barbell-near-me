/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'barbell-near-me.com'],
  },
  async rewrites() {
    return [
      {
        source: '/barbells-in-:city',
        destination: '/barbells/near-me?city=:city',
      },
      {
        source: '/barbells-near-me',
        destination: '/barbells/near-me',
      },
    ];
  },
};

module.exports = nextConfig;
