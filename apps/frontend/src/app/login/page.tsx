'use client';

import React, { useState } from "react";
import Image from "next/image";
import { Form, Input, Button, Typography } from "antd";
import styled, { ThemeProvider } from "styled-components";
import "antd/dist/reset.css";
import { userAtom } from "@/state/atoms/user";
import { useAtom } from "jotai";
import { useRouter } from "next/navigation";
import { Alert } from "antd";

const { Title, Text } = Typography;

const theme = {
  colors: {
    background: "#D9534F", // Red button background
  },
};

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;

const ImageSection = styled.div`
margin-top: 80px;
margin-bottom: 140px;
margin-left: 0px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem;
  background: white;
`;

const StyledInput = styled(Input)`
  border: none;
  border-bottom: 2px solid #ccc;
  border-radius: 0;
  padding: 10px;
  font-size: 16px;
  &:focus, &:hover {
    border-bottom: 2px solid #000;
    box-shadow: none;
  }
`;

const StyledPasswordInput = styled(Input.Password)`
  border: none;
  border-bottom: 2px solid #ccc;
  border-radius: 0;
  padding: 10px;
  font-size: 16px;
  &:focus, &:hover {
    border-bottom: 2px solid #000;
    box-shadow: none;
  }
`;

const StyledButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.background};
  border: none;
  width: 143px;
  height: 45px;
  font-size: 16px;
  &:hover, &:focus {
    background-color: darkred;
  }
`;

const LoginPage: React.FC = () => {
  const [, setUser] = useAtom(userAtom);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const onFinish = async (values: { email: string; password: string }) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        setIsOpen(true);
      } else {
        const data = await response.json();
        setUser(data.user);
        router.push('/');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ImageSection>
          <Image
            src="/login-page-img/login-side-image.jpg"
            alt="Shopping and Mobile"
            width={500}
            height={500}
            style={{ width: "100%", height: "auto" }}
          />
        </ImageSection>

        <FormSection>
          <Title level={2}>Log in to Exclusive</Title>
          <Text type="secondary">Enter your details below</Text>

          <Form layout="vertical" onFinish={onFinish} style={{ marginTop: "1rem" }}>
            {isOpen && (
              <Alert
                message="Login Failed"
                description="Invalid email or password. Please try again."
                type="error"
                closable
                onClose={handleClose}
                showIcon
                style={{
                  marginBottom: '10px'
                }}
              />
            )}
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please enter your email or phone" }]}
            >
              <StyledInput placeholder="Email or Phone Number" size="large" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: "Please enter your password" }]}
            >
              <StyledPasswordInput placeholder="Password" size="large" />
            </Form.Item>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <StyledButton type="primary" htmlType="submit" size="large">
                Log In
              </StyledButton>
              <Text type="danger" style={{ cursor: "pointer" }}>
                Forgot Password?
              </Text>
            </div>
          </Form>
        </FormSection>
      </Container>
    </ThemeProvider>
  );
};

export default LoginPage;
