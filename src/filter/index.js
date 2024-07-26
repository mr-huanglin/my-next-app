/*
 * @Date: 2024-07-26 10:35:40
 * @LastEditTime: 2024-07-26 10:49:38
 */
export const filterImage = (url) => {
  const isHttpUrl = url && url.indexOf('https') === -1
  if (!isHttpUrl) {
    return url
  }

  return `${process.env.NEXT_PUBLIC_OSS_URL}${url}`
}
