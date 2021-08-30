import { loadableReady } from "@loadable/component";
import { ConfigProvider } from "antd";
import "antd/dist/antd.less";
import enUS from "antd/lib/locale/en_US";
import zhCN from "antd/lib/locale/zh_CN";
import zhHK from "antd/lib/locale/zh_HK";
import Cookies from "js-cookie";
import { hydrate, render } from "react-dom";
import { IntlProvider } from "react-intl";
import { BrowserRouter as Router } from "react-router-dom";
import en_US from "../locales/en-US.json";
import zh_CN from "../locales/zh-CN.json";
import zh_HK from "../locales/zh-HK.json";
import App from "./App";

const container = document.getElementById("app");
const isDev = process.env.NODE_ENV === "development";

const preloadedState = window.__PRELOADED_STATE__ || undefined;

delete window.__PRELOADED_STATE__;

const getLocale = () => {
  const language = Cookies.get("language") || "en_US";
  let locale = enUS;
  switch (language) {
    case "zh_CN":
      locale = zhCN;
      break;
    case "zh_HK":
      locale = zhHK;
      break;
    default:
      locale = enUS;
      break;
  }

  return locale;
};

const getMessage = () => {
  const language = Cookies.get("language") || "en_US";
  let message = en_US;
  switch (language) {
    case "zh_CN":
      message = zh_CN;
      break;
    case "zh_HK":
      message = zh_HK;
      break;
    default:
      message = en_US;
      break;
  }

  return message;
};

if (isDev) {
  render(
    <IntlProvider messages={getMessage()} locale="en" defaultLocale="en">
      <ConfigProvider locale={getLocale()}>
        <Router>
          <App preloadedState={preloadedState} />
        </Router>
      </ConfigProvider>
    </IntlProvider>,
    container
  );
  module.hot.accept();
} else {
  loadableReady().then(() => {
    hydrate(
      <ConfigProvider locale={getLocale()}>
        <Router>
          <App preloadedState={preloadedState} />
        </Router>
      </ConfigProvider>,
      container
    );
  });
}
