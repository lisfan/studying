/**
 * @file
 */

/**
 * 这是一个使用`var`定义的变量
 */
var variable = 10

/**
 * 这是一个使用`let`定义的变量
 */
let letChange = 30

/**
 * 这是一个使用`const`定义的常量
 */
const constant = 20

/**
 * 这是一个使用 `@default` 标记的当前默认值
 * @default
 */
let defaultValue = 'hello word!'

/**
 * 这是一个使用 `@default` 标记的自定义默认值
 * @default parallel word!
 */
const parallelDefaultValue = 'hello word!'

/**
 * 这是一个使用 `@param` 标记引用自定义回调函数作为参数类型
 * @param {ClassA~callbackDefined} cb - 回调函数
 */
function callbackDefinedMethod(cb) {
}

/**
 * 这是一个使用 `@callback` 标记自定义的参数类型
 *
 * @callback ClassA~callbackDefined
 * @param {number} paramA
 * @param {string} paramB
 */

// /**
//  * 这是一个使用 `@kind` 标记的模型
//  * @kind constant
//  * @module myModule
//  */

/**
 * 这是一个使用 `@kind` 定义的常量
 * @kind constant
 */
let kind = {
  id: 10,
  name: 'msl'
}

/**
 * 这是一个使用 `@property` 定义的字典
 *
 * @property {number} id - 序列号
 * @property {string} name - 名称
 */
let property = {
  id: 10,
  name: 'msl'
}

/**
 * See {@link ClassA} and [MyClass's foo property]{@link ClassA#publicMethod}.
 * Also, check out {@link http://www.google.com|Google} and
 * {@linkplain https://github.com GitHub}.
 */
function seeMethod() {
}

/**
 * @todo
 * # 我说我的眼里只有你
 * - 这是一
 * - 这是二
 */
function todoMethod() {
}
