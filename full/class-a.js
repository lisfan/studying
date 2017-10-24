/**
 * 这是一个使用 `@file` 标记的文件描述内容
 * - 同时使用了 `@author` 标记的作者信息
 * - 同时使用了 `@copyright` 标记的版权信息
 *
 * @file
 * @author lisfan <lisfan@126.com>
 * @copyright Lisfan INC.
 */

/**
 * 这是一个符合 ES Class 规范的类定义，因此有些标签不需要显式写明
 *
 * - 同时使用了`@author` 标记的作者信息
 *
 * @classdesc 这是一个使用 `@classdesc` 定义的专门针对于类的
 * @author lisfan-class <lisfan@126.com>
 */
export class ClassA {
  /**
   * 这是一个构造函数描述
   * @param {object} options - 配置选项
   * @param {number} options.age - 年龄
   * @param {number} options.height - 身高
   */
  constructor(options) {
  }

  /**
   * 这是一个使用 `@member` 标记静态（默认）成员
   * - 同时需要 `@memberOf` 标记的归属名称路径
   *
   * @member {string} virtualMemeber
   * @memberOf ClassA
   */

  /**
   * 这是一个使用 `@member` 标记的实例成员
   * - 同时需要 `@memberOf` 标记的归属名称路径
   * - 同时需要 `@instance` 标记的实例成员
   *
   * @member {string} virtualMethod
   * @memberOf ClassA
   * @instance
   */

  /**
   * 这是一个使用 `@static` 标记的静态成员属性
   * - 同时需要 `@memberOf` 标记的归属名称路径
   * @memberOf ClassA
   * @static
   */
  static staticMember = 10

  /**
   * 这是一个静态成员方法（默认语法）
   */
  static staticMethod() {

  }

  /**
   * 这是一个使用 `@abstract` 标记的抽像方法，需要被继承类实现
   * @abstract
   */
  abstractMethod() {

  }

  /**
   * 这是一个使用 `@private` 标记的私有方法
   * @private
   */
  privateMethod() {

  }

  /**
   * 这是一个使用 `@package` 标记的包私有方法
   * @package
   */
  packageMethod() {

  }

  /**
   * 这是一个使用 `@protected` 标记的受保护的方法
   * @protected
   */
  protectedMethod() {

  }

  /**
   * 这是一个使用 `@public` 标记的公开方法（默认情况）
   * @public
   */
  publicMethod() {

  }

  /**
   * 这是一个使用 `@alias` 标记的别名方法
   * - 同时需要名称路径
   *
   * @alias ClassA#aliasMember
   */
  aliasMember = 'aliasMember'

  /**
   * 这是一个使用 `@deprecated` 标记的方法已被废弃
   * @deprecated 1.1.0
   */
  deprecatedMethod() {

  }

  /**
   * 这是一个使用 `@example` 标记的示例
   *
   * @example
   * // how to use
   *
   * const instance = new ClassA()
   * instance.exampleMethod()
   */
  exampleMethod() {

  }

  /**
   * 这是一个用于**被其他名称路径**下使用 `@borrows` 标记被借用的注释
   */
  borrowsMethod() {

  }

  /**
   * 这是一个定义在ClassA内的属性值，但使用 `@global` 标记更改了它的注释范围
   * @global
   */
  inClassADefineAConstant = 10

  /**
   * 这是一个用于被继承类继承的方法所使用 `@inheritDoc` 引用的注释
   *
   */
  inheritDocMethod() {

  }

  /**
   * 这是一个使用 `@readonly` 标记的只读属性
   * @readonly
   */
  get aLaMode() {
    return this.plain + ' with ice cream';
  }

  /**
   * 这是一个使用 `@see` 标记的链接到`ClassPrototypeA`，查看详细的信息
   *
   * @see ClassPrototypeA
   */
  seeMethod() {
    return this.plain + ' with ice cream';
  }

  /**
   * 这是一个使用 `@since` 标记的功能引入版本
   *
   * @since 1.0.0
   */
  sinceMethod() {
    return this.plain + ' with ice cream';
  }

  /**
   * 这是一个使用 `@summary` 标记简短的描述
   *
   * @summary 这里是一个简短的描述
   */
  summaryMethod() {
    return this.plain + ' with ice cream';
  }

  /**
   * 这是一个使用 `@this` 标记的this指向目标
   *
   * @this ClassPrototypeA
   */
  thisMethod() {
    return this.plain + ' with ice cream';
  }

  /**
   * 这是一个使用 `@throws` 标记的throws指向目标
   *
   * @throws 抛出错误
   * @throws {ClassPrototypeA}
   * @throws {number} 抛出错误
   */
  throwsMethod() {
    return this.plain + ' with ice cream';
  }

  /**
   * 这是一个使用 `@todo` 标记的待做事宜
   *
   * @todo
   * 抛出错误
   * - 这里还需要再优化
   * - 也需要优化
   */
  todoMethod() {
    return this.plain + ' with ice cream';
  }

  /**
   * 这是一个使用 `@tutorial` 标记的链接到目前教程
   *
   * @tutorial tutorials-parent-1
   */
  tutorialMethod() {
    return this.plain + ' with ice cream';
  }
}

