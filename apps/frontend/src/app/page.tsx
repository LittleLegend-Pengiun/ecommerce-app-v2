'use client'

import Link from "next/link";
import { Card, Typography } from 'antd';
import { Layout } from 'antd';
import { useAtom } from "jotai";
import { cartAtom } from "@/state/atoms/cart";

const { Title } = Typography;
const { Content } = Layout;

export default function Home() {

  return (
    <>
      <Title level={1}>Home</Title>
    </>
  );
}
