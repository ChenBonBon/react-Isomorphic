import { Button, Form, Input, InputNumber, Spin } from "antd";
import { connect, useDispatch } from "react-redux";

const { Item: FormItem } = Form;

const UserSetting = ({ updateLoading }) => {
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const update = async (values) => {
    const res = await dispatch.user.updateUser({ payload: values });
    console.log(res);
  };

  return (
    <Spin spinning={updateLoading}>
      <Form form={form} labelCol={8} wrapperCol={16} onFinish={update}>
        <FormItem name="name" label="Name">
          <Input />
        </FormItem>
        <FormItem name="age" label="Age">
          <InputNumber />
        </FormItem>
        <Button type="submit">Save</Button>
      </Form>
    </Spin>
  );
};

export default connect(({ loading }) => ({
  updateLoading: loading.effects.user.updateUser || false,
}))(UserSetting);
