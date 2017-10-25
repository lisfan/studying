/**
 * @file
 */

/**
 * @namespace
 * @borrows ClassA#borrowsMethod as borrowsMethod
 */
const NamespaceA = {
  borrowsMethod() {
  },
  /**
   * 这是一个命名空间的实例方法
   * @instance
   */
  instanceMethod() {
  },
  /**
   * 这是一个命名空间的静态方法
   */
  staticMethod() {
  },

  /**
   * 这是一个命名空间的私有方法
   * @inner
   */
  innerMethod() {
  },
  /**
   * 这是一个命名空间的私有属性
   * @inner
   */
  innerMember: 10,
  /**
   * 这是一个使用 `@ignore` 标记的忽略输出
   *
   * @ignore
   */
  ignoreMember: 10,
  /**
   * 访问其他名称路径下的使用`@variation`标记的同名路径
   * @see NamespaceA(2).variationMethod
   */
  variationMethod() {

  }
}




