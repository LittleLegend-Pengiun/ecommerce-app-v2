import React from 'react';
import { Carousel } from 'antd';
import styled from 'styled-components';
import { AppleOutlined } from '@ant-design/icons';

// Styled Carousel Wrapper
const SliderContainer = styled.div`
  max-width: 1300px;
  margin: auto;
  border-radius: 12px;
`;

// Styled Slide Content
const Slide = styled.div`
  background: black;
  color: white;
  padding: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  width: max-content;
`;

// Left Side (Text + Icon)
const TextContent = styled.div`
  max-width: 50%;

  h3 {
    font-size: 24px;
    font-weight: bold;
    margin: 0;
  }

  p {
    font-size: 16px;
    margin: 10px 0;
  }
`;

// Right Side (Image)
const ImageContainer = styled.div`
  max-width: 50%;
  display: flex;
  justify-content: flex-end;

  img {
    max-width: 250px;
    height: auto;
  }
`;

// Styled Button
const ShopButton = styled.a`
  display: inline-block;
  background: white;
  color: black;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 8px;
  margin-top: 10px;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    background: #ddd;
  }
`;

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
