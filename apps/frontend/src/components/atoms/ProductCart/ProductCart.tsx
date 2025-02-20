import React from "react";
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
  width: 250px;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  .ant-card-cover {
    position: relative;
  }
  .ant-card-cover img {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    width: 100%;
  }
  .ant-card-body {
    padding: 16px;
  }
`;

const CoverWrapper = styled.div`
  position: relative;
`;

const NewLabel = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: #4caf50;
  color: white;
  padding: 4px 8px;
  font-size: 12px;
  font-weight: bold;
  border-radius: 5px;
`;

const IconsWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 8px;
`;

const IconButton = styled.div`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;

const Price = styled.span`
  color: red;
  font-weight: bold;
  font-size: 18px;
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: gray;
`;

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ColorsWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
`;

const ColorOption = styled.div<{ color: string }>`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  border: 2px solid #000;
  cursor: pointer;
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
