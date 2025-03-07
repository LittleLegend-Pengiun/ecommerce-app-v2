import React from 'react';
import { Carousel } from 'antd';
import { AppleOutlined } from '@ant-design/icons';
import {
  ImageContainer,
  ShopButton,
  Slide,
  SliderContainer,
  TextContent,
} from './HomePageSlider.styles';

// Banner Data
const banners = [
  {
    id: 1,
    title: 'iPhone 14 Series',
    subtitle: 'Up to 10% off Voucher',
    img: 'https://via.placeholder.com/250x300', // Replace with real image
  },
  {
    id: 2,
    title: 'MacBook Pro',
    subtitle: 'Get the best performance',
    img: 'https://via.placeholder.com/250x300',
  },
  {
    id: 3,
    title: 'Samsung Galaxy S23',
    subtitle: 'Limited time offers available',
    img: 'https://via.placeholder.com/250x300',
  },
];

const SliderBanner = () => {
  return (
    <SliderContainer>
      <Carousel
        autoplay
        dots={{ className: 'custom-dots' }}
        adaptiveHeight={true}
      >
        {banners.map((banner) => (
          <Slide key={banner.id}>
            {/* Left Side */}
            <TextContent>
              <AppleOutlined
                style={{ fontSize: '30px', marginBottom: '10px' }}
              />
              <h3>{banner.title}</h3>
              <p>{banner.subtitle}</p>
              <ShopButton href="#">Shop Now →</ShopButton>
            </TextContent>

            {/* Right Side */}
            <ImageContainer>
              <img src={banner.img} alt={banner.title} />
            </ImageContainer>
          </Slide>
        ))}
      </Carousel>
    </SliderContainer>
  );
};

export default SliderBanner;
