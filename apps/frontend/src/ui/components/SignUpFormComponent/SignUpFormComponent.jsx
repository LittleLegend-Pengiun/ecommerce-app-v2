import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    WrapperInputField,
    WrapperTitle,
    WrapperForm,
    WrapperButton,
    WrrapperNavigateSignIn,
    WrappperAcceptPolicy,
} from './style'
import { Form } from 'antd';

const SignUpFormComponent = () => {
    const navigate = useNavigate();
    const onFinish = async (values) => {
        console.log('Success:', values);
        const username = values.username;
        const password = values.password;
        const fullname = values.fullName;
        const phonenumber = values.phone;
        const email = values.email;
        try {
            const res = await axios.post(`${process.env.REACT_APP_AUTHEN_MS_URL}/signup`, {
                username: username,
                password: password,
                fullname: fullname,
                phonenumber: phonenumber,
                email: email,
            });
            if (res.status === 200) {
                alert('Đăng ký tài khoản thành công');
                navigate('/sign-in');
            }
            else {
                alert('Đăng ký không thành công. Vui lòng thực hiện lại')
            }
        }
        catch (error) {
            if (error.response.status === 400) {
                alert('Tên đăng nhập đã tồn tại. Vui lòng chọn tên đăng nhập khác');
            }
            else {
                alert('Hệ thống đang gặp sự cố. Vui lòng thử lại sau');
            }
        }

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <center style={{ height: '100%' }}>
            <WrapperForm
                name="register"
                initialValues=
                {{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <WrapperTitle>Đăng ký tài khoản để trải nghiệm tất cả các tính năng của BKU SHOP</WrapperTitle>
                <p>Nhập các thông tin bên dưới <span style={{ color: 'red' }}>(*) Bắt buộc</span></p>
                <Form.Item
                    name="fullName"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập tên đầy đủ',
                        },
                    ]}
                >
                    <WrapperInputField
                        type="text"
                        size="large"
                        placeholder="Tên đầy đủ (*)"
                    />
                </Form.Item>
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
                        type="text"
                        size="large"
                        placeholder="Email (*)"
                    />
                </Form.Item>
                <Form.Item
                    name="phone"
                    rules={[
                        {
                            type: 'string',
                            message: 'Số điện thoại không hợp lệ',
                        },
                        {
                            required: true,
                            message: 'Vui lòng nhập số điện thoại',
                        },
                    ]}
                >
                    <WrapperInputField
                        type="text"
                        size="large"
                        placeholder="Số điện thoại (*)"
                    />
                </Form.Item>
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập tên đăng nhập',
                        },
                    ]}
                >
                    <WrapperInputField
                        type="text"
                        size="large"
                        placeholder="Tên đăng nhập (*)"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng nhập mật khẩu',
                        },
                    ]}
                >
                    <WrapperInputField
                        type="password"
                        size="large"
                        placeholder="Mật khẩu (*)"
                    />
                </Form.Item>
                <Form.Item
                    name="confirmPassword"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng xác nhận mật khẩu',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('Mật khẩu không trùng khớp');
                            },
                        }),
                    ]}
                >
                    <WrapperInputField
                        type="password"
                        size="large"
                        placeholder="Xác nhận mật khẩu (*)"
                    />
                </Form.Item>
                <Form.Item
                    name="acceptPolicy"
                    valuePropName="checked"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng đồng ý với điều khoản',
                        },
                    ]}
                >
                    <WrappperAcceptPolicy>
                        <label>Đồng ý các điều khoản (*)</label>
                        <a href="#">Điều khoản</a>
                    </WrappperAcceptPolicy>
                </Form.Item>
                <Form.Item>
                    <WrapperButton
                        size="large"
                        textButton="Đăng ký tài khoản"
                        type="primary"
                        htmlType="submit"
                    />
                </Form.Item>
                <WrrapperNavigateSignIn>
                    <span>Bạn đã có tài khoản?</span>
                    <a href="/sign-in">Đăng nhập</a>
                </WrrapperNavigateSignIn>
            </WrapperForm>
        </center>
    )
}

export default SignUpFormComponent