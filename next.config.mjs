/*
 * @Author: huanglin
 * @LastEditTime: 2024-07-25 09:51:39
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // 完全禁用图像优化，不然会收费
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.thecatapi.com',
        port: ''
      }
    ]
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true
      }
    ]
  }
  // i18n: {
  //   locales: ['en', 'zh-CN'],
  //   defaultLocale: 'en',
  // },
}

export default nextConfig
