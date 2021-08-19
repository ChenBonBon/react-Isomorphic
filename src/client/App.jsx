import "antd/dist/antd.less";
import { Provider } from "react-redux";
import { Link, Route, Switch } from "react-router-dom";
import routes from "../routes";
import { createStore } from "../store";

const App = ({ preloadedState }) => {
  return (
    <Provider store={createStore(preloadedState)}>
      <ul>
        {routes.map((route) => (
          <li key={route.path}>
            <Link to={route.path}>{route.path}</Link>
          </li>
        ))}
      </ul>
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
