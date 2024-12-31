'use client'

import { Typography, Button, Row, Col, Flex } from "antd";

const { Title } = Typography;

export default function ButtonPlayground() {
    return (
        <div>
            <Title level={1}>Component Testing</Title>
            <Flex gap="small" wrap>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
            </Flex>
        </div>
    );
}