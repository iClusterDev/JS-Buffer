import Store from '../library/Store';

// 'play'
// 'stop'
// 'pause'

const state = {
  mode: '',
  status: '',
  display: {
    width: 800,
    height: 600,
    maxWidth: 900,
    resizable: true,
  },
};

const mutations = {
  changeDisplay: (state, payload = {}) => {
    const { width, height, ...rest } = state.display;
    state.display = { ...payload, ...rest };
  },
};

const actions = {
  setDisplay: (context, payload = {}) => {
    const { width = null, height = null } = payload;
    if (width && height) {
      context.commit('changeDisplay', { width, height });
    }
  },
};

export default new Store({
  state,
  actions,
  mutations,
});
