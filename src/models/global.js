export const global = {
  state: {
    context: null,
  },
  reducers: {
    SET_CONTEXT(state, payload) {
      return {
        ...state,
        context: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async updateContext({ context, callback }) {
      dispatch.global.SET_CONTEXT(context);
      if (callback) {
        callback();
      }
    },
  }),
};
