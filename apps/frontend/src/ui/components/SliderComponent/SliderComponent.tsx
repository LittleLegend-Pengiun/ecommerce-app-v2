import React from 'react';
import Slider from "react-slick";
import { Image } from 'antd';

interface SliderComponentProps {
  arrImages: string[]; // Array of image URLs
}

const SliderComponent: React.FC<SliderComponentProps> = ({ arrImages }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
  };

  return (
    <Slider {...settings}>
      {arrImages.map((item, key) => (
        <Image
          src={item}
          alt="slider"
          preview={false}
          width="100%"
          height="360px"
          style={{
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
          }}
          key={key}
        />
      ))}
    </Slider>
  );
};

export default SliderComponent;
