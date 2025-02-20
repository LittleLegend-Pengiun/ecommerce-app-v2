import React, { useState } from "react";
import { Card, Rate } from "antd";
import { HeartOutlined, EyeOutlined } from "@ant-design/icons";
import styled from "styled-components";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  rating: number;
  reviews: number;
  isNew?: boolean;
  colors?: string[];
}

const { Meta } = Card;

const StyledCard = styled(Card)`
  width: 15.625rem;
  border-radius: 0.75rem;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
  &:hover .add-to-cart {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CoverWrapper = styled.div`
  position: relative;
`;

const NewLabel = styled.div`
  position: absolute;
  top: 0.625rem;
  left: 0.625rem;
  background-color: #4caf50;
  color: white;
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 0.3125rem;
`;

const IconsWrapper = styled.div`
  position: absolute;
  top: 0.625rem;
  right: 0.625rem;
  display: flex;
  gap: 0.5rem;
`;

const IconButton = styled.div`
  width: 2rem;
  height: 2rem;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.2);
`;

const Price = styled.span`
  color: red;
  font-weight: bold;
  font-size: 1.125rem;
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: gray;
`;

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ColorsWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const ColorOption = styled.div<{ color: string }>`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  border: 0.125rem solid #000;
  cursor: pointer;
`;

const AddToCartButton = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: black;
  color: white;
  text-align: center;
  padding: 0.75rem;
  font-weight: bold;
  cursor: pointer;
  opacity: 0;
  transform: translateY(1.25rem);
  transition: all 0.3s ease;
`;

const ProductCard: React.FC<ProductCardProps> = ({ image, title, price, rating, reviews, isNew, colors }) => {
  return (
    <StyledCard cover={
      <CoverWrapper>
        <img alt={title} src={image} />
        {isNew && <NewLabel>NEW</NewLabel>}
        <IconsWrapper>
          <IconButton><HeartOutlined /></IconButton>
          <IconButton><EyeOutlined /></IconButton>
        </IconsWrapper>
        <AddToCartButton className="add-to-cart">Add To Cart</AddToCartButton>
      </CoverWrapper>
    }>
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
