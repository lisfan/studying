/**
 * @file
 */

/**
 * 这是一个内置的String对象
 *
 * 这是一个使用 `@external` 标记的外部引用虚拟注释
 * - 同时使用了 `@see` 标记文档链接指向
 * - 同时使用了 `@link` 标记定义了链接
 *
 * @external String
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String|String}
 */

/**
 * 这是一个使用 `@function` 标记关联 external:String
 * 作为String的一个扩展实例方法
 *
 * @function external:String#customOutput
 */
String.prototype.customOutput = function () {
}

/**
 * 这是一个使用 `@memberOf` 标记关联 external:String
 * 作为String的一个扩展实例方法
 * 实现方法不同于上一个
 * - 同时使用了 `@name` 标记为新名称
 * - 同时使用了 `@instance` 标记为实例成员
 * - 同时使用了 `@function` 标记为函数
 *
 * @memberOf external:String
 * @name otherCustomOutput
 * @instance
 * @function
 */
String.prototype.otherCustomOutput = function () {
}

/**
 * 这是一个使用 `@extends` 标记关联 external:String
 * 从String类继承，创建一个新继承类
 *
 * @extends external:String
 */
class ExternalString extends String {
}