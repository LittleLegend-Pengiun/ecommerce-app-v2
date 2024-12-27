import React from 'react';
import logo from '@/assets/images/slider/logo.png';
import {
  StyleNameProduct,
  WrapperReportText,
  WrapperPriceText,
  WrapperCardStyle,
  WrapperText,
} from './style';
import { StarFilled } from '@ant-design/icons';

interface CardComponentProps {
  productName: string;
  productImg: string;
  productPrice: string | number;
  soldQuantity: number;
}

const CardComponent: React.FC<CardComponentProps> = ({
  productName,
  productImg,
  productPrice,
  soldQuantity
}) => {
  return (
    <WrapperCardStyle
      hoverable
      style={{ width: 240 }}
      bodyStyle={{ padding: '10px' }}
      cover={<img alt="example" src={productImg} />}
    >
      <img
        src={logo.src}
        alt="logo"
        style={{
          width: '90px',
          height: '20px',
          borderTopLeftRadius: '3px',
          position: 'absolute',
          top: '-1px',
          left: '-1px'
        }}
      />
      <WrapperText>
        <StyleNameProduct>{productName}</StyleNameProduct>
        <WrapperReportText>
          <span>
            <span style={{ marginRight: '6px' }}>4.96</span>
            <StarFilled style={{ fontSize: '12px', color: '#ffad27' }} />
          </span>
          <span>Đã bán {soldQuantity}</span>
        </WrapperReportText>
      </WrapperText>
      <WrapperPriceText>
        {productPrice}
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CardComponent;