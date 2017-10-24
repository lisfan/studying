/**
 * @file
 */

/**
 * 这是一个使用 `@namespace` 标记的命名空间
 * @namespace Event
 */

const Event = {
  /**
   * 这是一个使用 `@event` 标记的命名空间
   *
   * @event Event.closeWindow
   */
  closeWindow() {
  },

  /**
   * 这是一个使用 `@emits` 标记的触发
   *
   * @emits Event.closeWindow
   */
  emitEvent() {
  },

  /**
   * 这是一个使用 `@listens` 标记的侦听
   * - 同时使用了 `@param` 标记参数是一个对应的事件对象
   *
   * @param {Event.event:closeWindow} e - A snowball event.
   * @listens Event.closeWindow
   */
  listenEvent(e) {
  },
}



