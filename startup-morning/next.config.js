/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'secure.meetupstatic.com',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig