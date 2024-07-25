/*
 * @Author: mr-huang
 * @LastEditTime: 2024-07-25 10:29:33
 */
import Image from 'next/image'
export default function ComImage(props) {
  const {
    width,
    height,
    src,
    alt = '这是个图片',
    style = {},
    priority = false
  } = props

  const defaultStyle = {
    width: 'auto',
    height: 'auto',
    ...style
  }

  return (
    <Image
      width={width}
      height={height}
      src={src}
      alt={alt}
      style={defaultStyle}
      priority={priority}
    />
  )
}
