import { Spin } from "antd";
import { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { connect, useDispatch } from "react-redux";

const UserIndex = ({
  user: {
    user: { name, age },
  },
  fetchLoading,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.user.fetchUser();
  }, []);

  return (
    <Spin spinning={fetchLoading}>
      <h1>
        <FormattedMessage id="current.name" />: {name}
      </h1>
      <h1>
        <FormattedMessage id="current.age" />: {age}
      </h1>
    </Spin>
  );
};

export default connect(({ user, loading }) => ({
  user,
  fetchLoading: loading.effects.user.fetchUser || false,
}))(UserIndex);
