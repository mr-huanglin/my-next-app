/**
 * @description: 判断是否json数据
 * @param {*} data
 * @return {*}
 */
export function isJson(data) {
  try {
    // 尝试解析数据为JSON
    const parsedData = JSON.parse(data)

    // 如果成功解析为JSON，则返回解析后的数据
    return parsedData
  } catch (error) {
    // 解析失败，返回原始数据
    return data
  }
}

// 数字每千位加逗号
/**
 *
 * @param {Number} num
 * @returns
 */
export function toThousands(num) {
  return (
    num &&
    num.toString().replace(/\d+/, function (s) {
      return s.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
    })
  )
}
