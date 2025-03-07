import React from 'react';
import { Row, Col } from 'antd';
import Image from 'next/image';
import {
  StyledCarousel,
  SlideWrapper,
  TextContent,
  AppleIcon,
  ImageContainer,
  ShopButton,
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
    <StyledCarousel autoplay>
      {banners.map((banner) => (
        <SlideWrapper key={banner.id}>
          <Row align="middle">
            {/* Left: Text Content */}
            <TextContent xs={24} sm={12}>
              <AppleIcon />
              <h3>{banner.title}</h3>
              <p>{banner.subtitle}</p>
              <ShopButton href="#">Shop Now →</ShopButton>
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
  );
};

export default CatalogAndBanner;
