import React from 'react';
import { Form } from 'antd';
import { redirect } from 'next/navigation';
import {
  WrapperInputField,
  WrapperTitle,
  WrapperForm,
  WrapperButton,
} from './style';

const RetrievePasswordComponent: React.FC = () => {

  const onFinish = (values: unknown) => {
    console.log('Success:', values);
    redirect('/sign-in');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <center style={{ height: '100%' }}>
      <WrapperForm
        name="retrievepassword"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <WrapperTitle>Khôi phục mật khẩu</WrapperTitle>
        <p>Mật khẩu mới sẽ được gửi đến email của bạn</p>
        <Form.Item
          name="email"
          rules={[
            {
              type: 'email',
              message: 'Email không hợp lệ',
            },
            {
              required: true,
              message: 'Vui lòng nhập email',
            },
          ]}
        >
          <WrapperInputField
            type="email"
            size="large"
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item>
          <WrapperButton
            size="large"
            textButton="Khôi phục"
            type="primary"
            htmlType="submit"
          />
        </Form.Item>
      </WrapperForm>
    </center>
  );
};

export default RetrievePasswordComponent;
