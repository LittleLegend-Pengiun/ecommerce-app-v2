import Link from "next/link";
import { Card, Typography } from 'antd';

const { Text } = Typography;

export default function Home() {
  return (
    <div>
      <Card title="Card title" bordered={true} style={{ width: 300 }}>
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    </div>
  );
}
