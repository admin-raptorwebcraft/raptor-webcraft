/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'res.cloudinary.com'],
  },
  async rewrites() {
    return [
      {
        source: '/dotnet-api/:path*',
        destination: `${process.env.DOTNET_API_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
