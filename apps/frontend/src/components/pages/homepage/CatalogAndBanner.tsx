import React from 'react';
import { Row, Col, Menu } from 'antd';
import styled from 'styled-components';
import SliderBanner from '@/components/atoms/HomepageSlider/HomePageSlider';

const categories = [
  {
    key: 'womens-fashion',
    label: 'Woman’s Fashion',
    children: [
      { key: 'womens-shirt', label: 'Shirt' },
      { key: 'womens-pants', label: 'Pants' },
    ],
  },
  {
    key: 'mens-fashion',
    label: 'Men’s Fashion',
    children: [
      { key: 'mens-shirt', label: 'Shirt' },
      { key: 'mens-pants', label: 'Pants' },
    ],
  },
  { key: 'electronics', label: 'Electronics' },
  { key: 'home-lifestyle', label: 'Home & Lifestyle' },
  { key: 'medicine', label: 'Medicine' },
  { key: 'sports-outdoor', label: 'Sports & Outdoor' },
  { key: 'babys-toys', label: 'Baby’s & Toys' },
  { key: 'groceries-pets', label: 'Groceries & Pets' },
  { key: 'health-beauty', label: 'Health & Beauty' },
];

const StyledMenu = styled(Menu)`
  border: none;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
`;

const CatalogAndBanner = () => {
  return (
    <Row gutter={24}>
      <Col xs={24} sm={8} md={6} lg={5} xl={4}>
        <StyledMenu mode="vertical" items={categories} />
      </Col>

      <Col xs={24} sm={16} md={18} lg={19} xl={20}>
        <SliderBanner />
      </Col>
    </Row>
  );
};

export default CatalogAndBanner;
