import { Get } from "../request";

export const user = {
  state: {
    name: "",
    age: 0,
  },
  reducers: {
    SET_USER(state, payload) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: (dispatch) => ({
    async fetchUser() {
      try {
        const res = await Get(`${globalThis.mockApi}/fetchUser`);
        const { name, age } = res;
        dispatch.user.SET_USER({ name, age });
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
