import React, { forwardRef } from 'react'
import { useRouter, redirect } from 'next/navigation';
import {
  WrapperInputField,
  WrapperTitle,
  WrapperForm,
  WrapperButton,
  WrrapperNavigateSignUp,
  WrapperForgotPassword,
  WrappperRemember,
  WrapperMoreAction,
} from './style'
import { Form, InputRef } from 'antd';
import axios, { AxiosResponse, AxiosError } from 'axios';

// Interface for form values
interface LoginFormValues {
  email: string;
  password: string;
  remember?: boolean;
}

// Interface for the login response
interface LoginResponse {
  token: string;
  username: string;
}

// Input field props type
interface InputFieldProps {
  size?: 'large' | 'middle' | 'small';
  type?: "text" | "password" | "number" | "checkbox" | "date";
  placeholder?: string;
}

// Forward ref type for the input field
const ForwardedInputField = forwardRef<InputRef, InputFieldProps>((
  props: InputFieldProps,
  ref: React.ForwardedRef<InputRef>
) => (
  <WrapperInputField ref={ref} {...props} />
));

const LoginFormComponent: React.FC = () => {
  const router = useRouter()

  const onFinish = (values: unknown): void => {
    const loginFormValues = values as LoginFormValues;

    const username = loginFormValues.email;
    const password = loginFormValues.password;

    axios.post(
      `${process.env.REACT_APP_AUTHEN_MS_URL}/login`,
      {
        username,
        password,
      }
    ).then((res: AxiosResponse<LoginResponse>) => {
      if (res.status === 200) {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('username', res.data.username);
        redirect('/');
      } else {
        alert('Failed:' + JSON.stringify(loginFormValues));
      }
    }).catch(error => {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 400) {
        alert('Tài khoản hoặc mật khẩu không chính xác.\n\nVui lòng kiểm tra lại!');
      } else {
        alert('Hệ thống đang gặp sự cố.\nVui lòng quay lại sau!');
      }
    });
  };

  const onFinishFailed = (errorInfo: any): void => {
    console.log('Failed:', errorInfo);
  };

  return (
    <center style={{ height: '100%' }}>
      <WrapperForm
        name="login"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <WrapperTitle>Chào mừng đến với BKU SHOP </WrapperTitle>
        <p>Đăng nhập tài khoản của bạn</p>
        <Form.Item
          name="email"
          rules=
          {[
            {
              required: true,
              message: 'Vui lòng nhập email hoặc số điện thoại!',
            },
          ]}
        >
          <ForwardedInputField
            type="text"
            size="large"
            placeholder="Email hoặc số điện thoại"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules=
          {[
            {
              required: true,
              message: 'Vui lòng nhập mật khẩu!',
            },
          ]}
        >
          <ForwardedInputField
            type="password"
            size="large"
            placeholder="Mật khẩu"
          />
        </Form.Item>
        <WrapperMoreAction>
          <Form.Item
            name="remember"
            valuePropName="checked"
          >
            <WrappperRemember>
              <label>Nhớ tài khoản</label>
            </WrappperRemember>
          </Form.Item>

          <Form.Item>
            <WrapperForgotPassword>
              <a href="/forgot-password">Quên mật khẩu?</a>
            </WrapperForgotPassword>
          </Form.Item>

        </WrapperMoreAction>

        <Form.Item
        >
          <WrapperButton
            size="large"
            textButton="Đăng nhập"
            type="primary"
            htmlType="submit"
          />
        </Form.Item>
        <WrrapperNavigateSignUp>
          <span>Bạn chưa có tài khoản?</span>
          <a href="/sign-up">Đăng ký</a>
        </WrrapperNavigateSignUp>
      </WrapperForm>
    </center>
  )
}

export default LoginFormComponent