import React, { useMemo } from 'react';
import { Card, Button, Carousel, Row, Col } from 'antd';
import styled from 'styled-components';
import { AppleOutlined } from '@ant-design/icons';
import SliderBanner from '@/components/atoms/HomepageSlider/HomePageSlider';

const SidebarWrapper = styled.div`
  padding: 10px;
`;

const SidebarMenu = styled(Row)`
  row-gap: 10px;
`;

const SidebarItem = styled(Col)`
  font-size: 16px;
  font-weight: 500;

  a {
    color: black;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: #1890ff;
    }
  }
`;

const BannerWrapper = styled(Card).attrs({ variant: 'outlined' })`
  border-radius: 12px;
  overflow: hidden;
  background: black;
  color: white;
  text-align: left;
  padding: 20px;

  .ant-card-body {
    padding: 0;
  }
`;

const BannerImage = styled.img`
  width: 100%;
  border-radius: 12px;
`;

const ProductTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
`;

const StyledButton = styled(Button)`
  background: white;
  color: black;
  border: none;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 8px;
  margin-top: 10px;

  &:hover {
    background: #ddd;
  }
`;

const CatalogAndBanner = () => {
  const categories = useMemo(
    () => [
      "Women's Fashion",
      "Men's Fashion",
      'Electronics',
      'Home & Lifestyle',
      'Medicine',
      'Sports & Outdoor',
      'Baby & Toys',
      'Groceries & Pets',
      'Health & Beauty',
    ],
    [],
  );

  const banners = useMemo(
    () => [
      {
        id: 1,
        title: 'iPhone 14 Series',
        img: 'https://via.placeholder.com/600x300',
      },
      {
        id: 2,
        title: 'Samsung Galaxy S23',
        img: 'https://via.placeholder.com/600x300',
      },
      {
        id: 3,
        title: 'MacBook Pro 16"',
        img: 'https://via.placeholder.com/600x300',
      },
    ],
    [],
  );

  return (
    <Row gutter={24}>
      <Col xs={24} sm={8} md={6} lg={5} xl={4}>
        <SidebarWrapper>
          <SidebarMenu gutter={[0, 10]}>
            {categories.map((category, index) => (
              <SidebarItem key={index} span={24}>
                <a href="#">{category}</a>
              </SidebarItem>
            ))}
          </SidebarMenu>
        </SidebarWrapper>
      </Col>

      <Col xs={24} sm={16} md={18} lg={19} xl={20}>
        {/* <Carousel autoplay>
          {banners.map((banner) => (
            <BannerWrapper key={banner.id}>
              <AppleOutlined style={{ fontSize: "24px" }} />
              <ProductTitle>{banner.title}</ProductTitle>
              <BannerImage src={banner.img} alt="Product" />
              <StyledButton>Shop Now →</StyledButton>
            </BannerWrapper>
          ))}
        </Carousel> */}
        <SliderBanner />
      </Col>
    </Row>
  );
};

export default CatalogAndBanner;
