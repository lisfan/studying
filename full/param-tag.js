/**
 * @file
 */

/**
 * @namespace
 */
const ParamTag = {
  /**
   * 这是最简单的参数注释
   * @param somebody
   */
  param: function (somebody) {
  },
  /**
   * 这是指定了类型的参数注释
   * @param {string} somebody -
   * 这里使用到了`markdown`语法
   * - 谢谢
   * - 不用谢
   */
  param2: function (somebody) {
  },

  /**
   * 这是指定了类型和进行了描述参数注释
   * @param {string} somebody Somebody's name.
   */
  param3: function (somebody) {
  },

  /**
   * 这是指定了类型和进行了描述参数注释，通过`-`符分割描述
   * @param {string} somebody - Somebody's name.
   */
  param4: function (somebody) {
  },
  /**
   * 这是对一个复杂对象参数进行了描述
   * @param {Object} employee - The employee who is responsible for the project.
   * @param {string} employee.name - The name of the employee.
   * @param {string} employee.department - The employee's department.
   * @param {string} employee.xxx - The name of the employee.
   * @param {string} employee.xxx.yyy - The employee's department.
   * @param {string} employee.xxx.zzz - The name of the employee.
   * @param {string} employee.xxx.xxx - The employee's department.
   * @param {string} employee.yyy - The name of the employee.
   * @param {string} employee.yyy.yyy - The name of the employee.
   * @param {string} employee.yyy.zzz - The name of the employee.
   * @param {string} employee.zzz - The name of the employee.
   */
  param5: function (employee) {
  },
  /**
   * 参数类型是一个字符串数组
   * @param {string[]} employees - The employees who are responsible for the project.
   */
  param6: function (employees) {
  },
  /**
   * 参数类型是一个对象数组，同时分别指定了对象的格式
   * @param {Object[]} employees - The employees who are responsible for the project.
   * @param {string} employees[].name - The name of an employee.
   * @param {string} employees[].department - The employee's department.
   */
  param7: function (employees) {
  },
  /**
   * 参数类型是可选的
   * @param {string} [somebody] - Somebody's name.
   */
  param8: function (somebody) {
  },
  /**
   * 参数类型是可选的（另一种表达方式）
   * @param {string=} somebody - Somebody's name.
   */
  param9: function (somebody) {
  },
  /**
   * 参数类型是可选的，且存在默认值
   * @param {string} [somebody=John Doe] - Somebody's name.
   */
  param10: function (somebody) {
  },
  /**
   * 参数类型是一个联合类型
   * @param {(string|string[])} [somebody=John Doe] - Somebody's name, or an array of names.
   */
  param11: function (somebody) {
  },
  /**
   * 参数类型是支持任意类型
   * @param {*} somebody - Whatever you want.
   */
  param12: function (somebody) {
  },
  /**
   * 参数类型是可以接受指定类型的无限个数量参数
   * @param {...number} num - A positive or negative number.
   */
  param13: function (num) {
  },

  /**
   * 参数类型是一个回调函数，且回调函数只接受一个参数
   * @param {function(number)} cb - The callback that handles the response.
   */
  param14: function (cb) {
  },

  /**
   * 参数类型引用了一个自定义的回调函数
   * - 在回调函数自身接受多个参数的情况下使用
   * @param {ParamTag.requestCallback} cb - The callback that handles the response.
   */
  param15: function (cb) {
  },

  /**
   * 值可以是null
   * @param {?number} cb - The callback that handles the response.
   */
  param16: function (cb) {
  },

  /**
   * 值不可以是null
   * @param {!number} cb - The callback that handles the response.
   */
  param17: function (cb) {
  },

  /**
   * 自定义回调函数
   *
   * @callback ParamTag.requestCallback
   * @param {number} responseCode
   * @param {string} responseMessage
   */

  /**
   * 自定义类型
   * @typedef {number|string} ParamTag.defineType
   */

  /**
   * 自定义字典类型
   * @typedef {object} ParamTag.defineDict
   * @property {boolean} hasCourage1 - Indicates whether the Courage component is present.
   * @property {number} hasCourage2 - Indicates whether the Courage component is present.
   * @property {string} hasCourage3 - Indicates whether the Courage component is present.
   */

  /**
   * 自定义函数
   * @typedef {function} ParamTag.defineFunction
   * @param {number} hasCourage - Indicates whether the Courage component is present.
   */
  /**
   * 这是最简单的参数注释
   * @param somebody
   */
  return: function (somebody) {
  },
  /**
   * 这是指定了类型的参数注释
   * @return {string} somebody
   */
  return2: function (somebody) {
  },

  /**
   * 这是指定了类型和进行了描述参数注释
   * @return {string} somebody Somebody's name.
   */
  return3: function (somebody) {
  },
}
