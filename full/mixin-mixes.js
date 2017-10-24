/**
 *
 * @file
 */

/**
 * 这是一个使用 `@mixin` 标记的混和定义对象
 *
 * @mixin mixinObj
 */
const mixinObj = {
  /**
   * on方法
   */
  on: function (eventName, handler) {
    // code...
  },

  /**
   * off方法
   */
  off: function (eventName, eventData) {
    // code...
  }
}

/**
 * 这是一个使用 `@mixes` 标记的混入了mixinObj对象
 *
 * @mixes mixinObj
 */
const mixes = {}