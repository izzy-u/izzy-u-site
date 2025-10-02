/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'; 

module.exports = { basePath: isProd ? '/izzy-u-site' : '', assetPrefix: isProd ? '/izzy-u-site/' :'', images: { unoptimized: true, }}
const nextConfig = {

};

export default nextConfig;
