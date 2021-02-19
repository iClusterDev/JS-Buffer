import Store from '../library/Store';

const state = {
  display: {
    width: 800,
    height: 600,
  },
};

const mutations = {
  changeDisplay: (state, payload = {}) => {
    state.display = { ...payload };
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
