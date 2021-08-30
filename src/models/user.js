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
      const res = await Get(`/mock/fetchUser`);
      const { name, age } = res;
      dispatch.user.SET_USER({ name, age });
    },
    async updateUser({ payload }) {
      await new Promise((resolve, reject) => setTimeout(resolve, 1000));
      dispatch.user.SET_USER(payload);
    },
  }),
};
