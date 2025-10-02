/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'; 

const nextConfig = {
basePath: isProd ? '/izzy-u-site' : '', assetPrefix: isProd ? '/izzy-u-site/' :'', images: { unoptimized: true, },
};
  


export default nextConfig;
