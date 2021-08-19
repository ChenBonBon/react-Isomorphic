import { loadableReady } from "@loadable/component";
import "antd/dist/antd.less";
import { hydrate, render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const container = document.getElementById("app");
const isDev = process.env.NODE_ENV === "development";

const preloadedState = window.__PRELOADED_STATE__ || undefined;

delete window.__PRELOADED_STATE__;

if (isDev) {
  render(
    <Router>
      <App preloadedState={preloadedState} />
    </Router>,
    container
  );
  module.hot.accept();
} else {
  loadableReady().then(() => {
    hydrate(
      <Router>
        <App preloadedState={preloadedState} />
      </Router>,
      container
    );
  });
}
