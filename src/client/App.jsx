import { Select } from "antd";
import "antd/dist/antd.less";
import Cookies from "js-cookie";
import { Provider } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import routes from "../routes";
import { createStore } from "../store";

const { Option } = Select;

const App = ({ preloadedState, cookie }) => {
  const getLanguageFromCookie = () => {
    let language = null;
    if (cookie) {
      const cookieKeyValues = cookie.split(";");
      cookieKeyValues.forEach((item) => {
        const [key, value] = item.trim().split("=");
        if (key === "language") {
          language = value;
        }
      });
    }

    return language;
  };

  const changeLang = (value) => {
    Cookies.set("language", value);
    window.location.reload();
  };

  return (
    <Provider store={createStore(preloadedState)}>
      <ul>
        {routes.map((route) => (
          <li key={route.path}>
            <Link to={route.path}>{route.path}</Link>
          </li>
        ))}
      </ul>
      <Select
        defaultValue={getLanguageFromCookie() || Cookies.get("language") || "en_US"}
        dropdownMatchSelectWidth={false}
        style={{ position: "fixed", top: 0, right: "50%" }}
        onChange={changeLang}
      >
        <Option key="en" value="en_US">
          EN
        </Option>
        <Option key="cn" value="zh_CN">
          简体中文
        </Option>
        <Option key="hk" value="zh_HK">
          繁体中文
        </Option>
      </Select>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.path}
            exact={route.exact}
            path={route.path}
            render={() => <route.component childRoutes={route.routes} />}
          ></Route>
        ))}
      </Switch>
    </Provider>
  );
};

export default App;
