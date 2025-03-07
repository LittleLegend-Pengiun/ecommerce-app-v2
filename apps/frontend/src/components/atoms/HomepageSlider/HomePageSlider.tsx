import React from 'react';
import { Row, Col } from 'antd';
import Image from 'next/image';
import {
  CatalogWrapper,
  BannerContainer,
  StyledCarousel,
  SlideWrapper,
  TextContent,
  AppleIcon,
  ImageContainer,
} from './HomePageSlider.styles';

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
