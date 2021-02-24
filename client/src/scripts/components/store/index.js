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
  },
};

const mutations = {
  resize: (state, payload = {}) => {
    const { width, height, ...rest } = state.display;
    state.display = { ...payload, ...rest };
  },
};

const actions = {
  resize: (context, payload = {}) => {
    const { width = null, height = null } = payload;
    if (width && height) {
      context.commit('resize', { width, height });
    }
  },
};

export default new Store({
  state,
  actions,
  mutations,
});
