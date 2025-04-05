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
import LoginPage from "@/components/pages/login/LoginPage";

const { Title, Text } = Typography;

const Login: React.FC = () => {

  return (
    <LoginPage />
  );
};

export default Login;
