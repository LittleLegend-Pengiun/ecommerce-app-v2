import React from 'react';
import { Row, Col, Carousel } from 'antd';
import styled from 'styled-components';
import { AppleOutlined } from '@ant-design/icons';
import Image from 'next/image';

const CatalogWrapper = styled.div`
  width: 100%;
  max-width: 75rem; /* 1200px → 75rem */
  margin: auto;
  padding: 1.25rem 0.9375rem; /* 20px → 1.25rem, 15px → 0.9375rem */

  @media (max-width: 80rem) {
    /* 1280px → 80rem */
    max-width: 95%;
  }

  @media (max-width: 48rem) {
    /* 768px → 48rem */
    max-width: 100%;
    padding: 0.625rem; /* 10px → 0.625rem */
  }
`;

const BannerContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: auto;
  overflow: hidden;
  border-radius: 0.75rem; /* 12px → 0.75rem */
`;

const StyledCarousel = styled(Carousel)`
  width: 100%;
`;

const SlideWrapper = styled.div`
  background: black;
  color: white;
  border-radius: 0.75rem; /* 12px → 0.75rem */
  padding: 2.5rem; /* 40px → 2.5rem */
  overflow: hidden;
`;

const TextContent = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;

  h3 {
    font-size: 1.5rem; /* 24px → 1.5rem */
    font-weight: bold;
    margin: 0;
  }

  p {
    font-size: 1rem; /* 16px → 1rem */
    margin: 0.625rem 0; /* 10px → 0.625rem */
  }

  @media (max-width: 48rem) {
    text-align: center;
    align-items: center;
  }
`;

const ImageContainer = styled(Col)`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  img {
    max-width: 15.625rem; /* 250px → 15.625rem */
    height: auto;
  }

  @media (max-width: 48rem) {
    justify-content: center;
    margin-top: 1.25rem; /* 20px → 1.25rem */
  }
`;

const AppleIcon = styled(AppleOutlined)`
  font-size: 1.875rem; /* 30px → 1.875rem */
  margin-bottom: 0.625rem; /* 10px → 0.625rem */
`;

const banners = [
  {
    id: 1,
    title: 'iPhone 14 Series',
    subtitle: 'Up to 10% off Voucher',
    img: '/home-page-img/iphone.png', // Replace with real image
  },
  {
    id: 2,
    title: 'MacBook Pro',
    subtitle: 'Get the best performance',
    img: '/home-page-img/iphone.png',
  },
  {
    id: 3,
    title: 'Samsung Galaxy S23',
    subtitle: 'Limited time offers available',
    img: '/home-page-img/iphone.png',
  },
];

const CatalogAndBanner = () => {
  return (
    <CatalogWrapper>
      <Row gutter={24} justify="center">
        <Col xs={24} sm={24} md={20} lg={18}>
          <BannerContainer>
            <StyledCarousel autoplay>
              {banners.map((banner) => (
                <SlideWrapper key={banner.id}>
                  <Row align="middle">
                    {/* Left: Text Content */}
                    <TextContent xs={24} sm={12}>
                      <AppleIcon />
                      <h3>{banner.title}</h3>
                      <p>{banner.subtitle}</p>
                    </TextContent>

                    {/* Right: Image */}
                    <ImageContainer xs={24} sm={12}>
                      <Image
                        src={banner.img}
                        alt={banner.title}
                        width={1000}
                        height={2000}
                      />
                    </ImageContainer>
                  </Row>
                </SlideWrapper>
              ))}
            </StyledCarousel>
          </BannerContainer>
        </Col>
      </Row>
    </CatalogWrapper>
  );
};

export default CatalogAndBanner;
