import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";

const Home = ({ user: { name, age } }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch.user.fetchUser();
  }, []);

  return (
    <div>
      <div>name: {name}</div>
      <div>age: {age}</div>
    </div>
  );
};

export default connect(({ user }) => ({ user }))(Home);
