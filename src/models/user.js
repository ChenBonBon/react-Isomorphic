import { fetchUser } from "../services/user";

export const user = {
  state: {
    user: {},
  },
  reducers: {
    SET_USER(state, payload) {
      return {
        ...state,
        user: payload,
      };
    },
  },
  effects: (dispatch) => ({
    async fetchUser(params) {
      try {
        const res = await fetchUser(params);
        dispatch.user.SET_USER(res);
      } catch (error) {
        console.error(error);
      }
    },
    async updateUser({ payload }) {
      await new Promise((resolve, reject) => setTimeout(resolve, 1000));
      dispatch.user.SET_USER(payload);
    },
  }),
};
