'use client'

import Link from "next/link";
import { Typography, Avatar, Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const { Title } = Typography;
const { Meta } = Card;

export default function CardPlayground() {
    return (
        <div>
            <Title level={1}>Component Testing</Title>
            <Card
                style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                    title="Card title"
                    description="This is the description"
                />
            </Card>
        </div>
    );
}