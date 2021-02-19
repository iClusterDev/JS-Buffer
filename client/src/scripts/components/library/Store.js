import Emitter from './Emitter';

class Store {
  constructor(config = {}) {
    if (Store.instance) {
      return Store.instance;
    } else {
      const { state = {}, actions = {}, mutations = {} } = config;
      const self = this;
      self.events = new Emitter();
      self.status = 'resting';
      self.mutations = mutations;
      self.actions = actions;
      self.state = new Proxy(state, {
        set: function (state, key, value) {
          if (!state.hasOwnProperty(key)) {
            console.error(`The key "${key}" cannot be added manually`);
            return true;
          }
          if (self.status !== 'mutation') {
            console.error(
              `You should use a mutation to set "${key}" to "${value}"`
            );
          } else {
            state[key] = value;
            self.events.emit(`${key}-change`, self.state[key]);
            self.status = 'resting';
          }
          return true;
        },
      });

      Store.instance = self;
      return self;
    }
  }

  dispatch(actionKey, payload) {
    const self = this;
    if (typeof self.actions[actionKey] !== 'function') {
      console.error(`Action ${actionKey} doesn't exist!`);
      return false;
    }
    self.status = 'action';
    self.actions[actionKey](self, payload);
    return true;
  }

  commit(mutationKey, payload) {
    const self = this;
    if (typeof self.mutations[mutationKey] !== 'function') {
      console.error(`Mutation ${mutationKey} doesn't exist!`);
      return false;
    }
    self.status = 'mutation';
    self.mutations[mutationKey](self.state, payload);
    return true;
  }
}

export default Store;
