import { Carousel, Col } from 'antd';
import styled from 'styled-components';
import { AppleOutlined } from '@ant-design/icons';

export const BannerContainer = styled.div`
  width: 100%;
  max-width: 90vw;
  margin: auto;
  overflow: hidden;
  border-radius: 0.75rem; /* 12px → 0.75rem */
`;

export const StyledCarousel = styled(Carousel)`
  width: 100%;
`;

export const SlideWrapper = styled.div`
  background: black;
  color: white;
  border-radius: 0.75rem; /* 12px → 0.75rem */
  padding: 2.5rem; /* 40px → 2.5rem */
  overflow: hidden;
`;

export const TextContent = styled(Col)`
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

export const ImageContainer = styled(Col)`
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

export const AppleIcon = styled(AppleOutlined)`
  font-size: 1.875rem; /* 30px → 1.875rem */
  margin-bottom: 0.625rem; /* 10px → 0.625rem */
`;
