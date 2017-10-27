/**
 * 这是一个使用 `@enum` 标记的含有相同数据类型的枚举对象
 *
 * @enum {string}
 */
const COLOR = {
  /** 红色 */
  red: '#f00',
  /** 绿色 */
  green: '#0f0',
  /** 蓝色 */
  blue: '#00f',
}

/**
 * 这是一个使用 `@enum` 标记的含有不同枚举对象
 * [注] 一般不建议枚举中含有不同值
 *
 * @enum {string}
 */
const DIFF_VALUE_TYPE = {
  /**
   * 编号
   * @type {number}
   */
  id: 19890129,
  /** 姓名 */
  name: 'msl',
  /** 身高 */
  height: '#00f',
}