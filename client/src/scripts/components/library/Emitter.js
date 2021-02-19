class Emitter {
  constructor() {
    this._events = {};
  }

  /**
   * Subscribe to the event system.
   * @param {String} event
   * @param {Function} listener
   */
  on(event = '', listener = () => {}) {
    if (!this._events.hasOwnProperty(event)) this._events[event] = [];
    return this._events[event].push(listener);
  }

  /**
   * Fires the handlers of a specific event.
   * @param {String} event
   * @param {Object} data
   */
  emit(event = '', data = {}) {
    if (!this._events[event]) return [];
    return this._events[event].forEach((listener) => {
      listener(data);
    });
  }

  /**
   * Unsubscribe, by removing a specific
   * listener from an event.
   * @param {String} event
   * @param {Function} listener
   */
  removeListener(event = '', listener = () => {}) {
    if (!this._events[event])
      throw new Error(`Can't remove listener. Event ${event} doesn't exist!`);
    return (this._events[event] = this._events[event].filter(
      (targetListener) => targetListener !== listener
    ));
  }
}

export default Emitter;
