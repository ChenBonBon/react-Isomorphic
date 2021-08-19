import { init } from "@rematch/core";
import loadingPlugin from "@rematch/loading";
import * as models from "./models";

const createStore = (initialState) => {
  const defaultOptions = { models, plugins: [loadingPlugin()] };
  if (initialState) {
    defaultOptions.redux = {
      initialState,
    };
  }
  const store = init(defaultOptions);

  return store;
};

export { createStore };
