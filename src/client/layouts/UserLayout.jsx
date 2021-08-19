import { Tabs } from "antd";
import { Route, Switch, useHistory, useLocation } from "react-router-dom";

const { TabPane } = Tabs;
const UserLayout = ({ childRoutes }) => {
  const history = useHistory();
  const location = useLocation();

  const { pathname } = location;

  const redirect = (key) => {
    history.push(`/user${key}`);
  };

  return (
    <div>
      <Tabs
        onTabClick={redirect}
        defaultActiveKey={pathname.replace("/user", "")}
      >
        <TabPane tab="Overview" key=""></TabPane>
        <TabPane tab="Data" key="/data"></TabPane>
        <TabPane tab="Setting" key="/setting"></TabPane>
      </Tabs>
      <Switch>
        {childRoutes.map((route) => (
          <Route key={route.path} {...route}></Route>
        ))}
      </Switch>
    </div>
  );
};

export default UserLayout;
