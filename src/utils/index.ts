/**
 * 获取lottie文件链接
 */
export function getLottieJsonLink(
  /**  lottie文件名称，不用带.json后缀 */
  name: string
) {
  return `/micromain/lottie/${name}.json`;
}
