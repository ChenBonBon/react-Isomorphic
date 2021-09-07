import { Form } from "antd";
import { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import { connect, useDispatch } from "react-redux";
import { formLayout } from "../../../utils/utils";

const UserData = ({
  user: {
    user: { name, company, email, mobile },
  },
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch.user.fetchUser();
  }, []);

  return (
    <Form {...formLayout}>
      <Form.Item label={<FormattedMessage id="display.name" />}>
        {name}
      </Form.Item>
      <Form.Item label={<FormattedMessage id="company" />}>{company}</Form.Item>
      <Form.Item label={<FormattedMessage id="email" />}>{email}</Form.Item>
      <Form.Item label={<FormattedMessage id="phone" />}>{mobile}</Form.Item>
    </Form>
  );
};

export default connect(({ user }) => ({ user }))(UserData);
