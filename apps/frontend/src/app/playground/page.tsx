'use client'

import Link from "next/link";
import { Card, Typography } from 'antd';
import { Layout } from 'antd';

const { Title } = Typography;
const { Content } = Layout;

export default function Home() {
    return (
        <Title level={1}>Playground Testing</Title>
    );
}
