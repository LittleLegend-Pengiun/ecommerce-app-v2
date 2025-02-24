import React from 'react';
import { Card, Rate } from 'antd';
import { HeartOutlined, EyeOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import {
  StyledCard,
  CoverWrapper,
  NewLabel,
  IconsWrapper,
  IconButton,
  AddToCartButton,
  ActionsWrapper,
  Price,
  RatingWrapper,
  ColorsWrapper,
  ColorOption,
} from './ProductCart.styles';

type ProductCardProps = {
  image: string;
  title: string;
  price: number;
  rating: number;
  reviews: number;
  isNew?: boolean;
  colors?: string[];
};

const { Meta } = Card;

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  rating,
  reviews,
  isNew,
  colors,
}) => {
  return (
    <StyledCard
      cover={
        <CoverWrapper>
          <img alt={title} src={image} />
          {isNew && <NewLabel>NEW</NewLabel>}
          <IconsWrapper>
            <IconButton>
              <HeartOutlined />
            </IconButton>
            <IconButton>
              <EyeOutlined />
            </IconButton>
          </IconsWrapper>
          <AddToCartButton className="add-to-cart">Add To Cart</AddToCartButton>
        </CoverWrapper>
      }
    >
      <Meta title={title} />
      <ActionsWrapper>
        <Price>${price}</Price>
        <RatingWrapper>
          <Rate disabled allowHalf defaultValue={rating} />
          <span>({reviews})</span>
        </RatingWrapper>
      </ActionsWrapper>
      {colors && (
        <ColorsWrapper>
          {colors.map((color, index) => (
            <ColorOption key={index} color={color} />
          ))}
        </ColorsWrapper>
      )}
    </StyledCard>
  );
};

export default ProductCard;
