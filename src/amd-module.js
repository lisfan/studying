/**
 * @file
 */

/**
 * 这是一个符合 AMD Module 规范的模块
 * @module AMDModule
 */

define(function () {
  var exports = {};

  /** 导出一个值 */
  exports.exportMember = 10

  /** 导出一个方法 */
  exports.exportMethod = function () {
  }

  return exports;
});