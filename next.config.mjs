/*
 * @Author: huanglin
 * @LastEditTime: 2024-07-12 16:35:36
 */
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true
      }
    ]
  },
  // i18n: {
  //   locales: ['en', 'zh-CN'],
  //   defaultLocale: 'en',
  // },
}

export default nextConfig
