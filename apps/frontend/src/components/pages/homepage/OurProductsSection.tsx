import React from 'react'
import { Col, Row, Typography } from 'antd'
import Image from 'next/image';

const { Title } = Typography;

export default function OurProductsSection() {
  return (
    <>
    <Row>
        <Col span={1}><Image src={'/icons/CategoryRectangle.svg'} alt='rec' width={40} height={40}/></Col>
        <Col span={21}>
        <Title level={4}>Our Products</Title>
        </Col>
    </Row>
    <Title level={2}>Explore Our Products</Title>
    </>
  )
}

