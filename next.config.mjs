/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://jumpshare.com/s/cEoho7UQsVGWHglBxlfX',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
