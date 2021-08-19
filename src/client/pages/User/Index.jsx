import { Spin } from "antd";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";

const UserIndex = ({ user, fetchLoading }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.user.fetchUser();
  }, []);

  return (
    <Spin spinning={fetchLoading}>
      <h1>Current name: {user.name}</h1>
      <h1>Current age: {user.age}</h1>
    </Spin>
  );
};

export default connect(({ user, loading }) => ({
  user,
  fetchLoading: loading.effects.user.fetchUser || false,
}))(UserIndex);
