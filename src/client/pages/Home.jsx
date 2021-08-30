import { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { connect, useDispatch } from "react-redux";

const Home = ({ user: { name, age } }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch.user.fetchUser();
  }, []);

  return (
    <div>
      <div>
        <FormattedMessage id="name" />: {name}
      </div>
      <div>
        <FormattedMessage id="age" />: {age}
      </div>
    </div>
  );
};

export default connect(({ user }) => ({ user }))(Home);
