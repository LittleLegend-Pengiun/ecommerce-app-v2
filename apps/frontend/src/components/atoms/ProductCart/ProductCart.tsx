import React from "react";
import { Badge, Rate } from "antd";
import { HeartOutlined, EyeOutlined } from "@ant-design/icons";
import { ActionsWrapper, CardWrapper, ColorDot, ColorOptions, ImageWrapper, Price, ProductImage, ProductName, StyledIcon } from "./ProductCart.styles";

type ProductCardProps = {
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  isNew: boolean;
  colors: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image, rating, reviews, isNew, colors }) => {
  return (
    <Badge.Ribbon text={isNew ? "NEW" : ""} color="green">
      <CardWrapper hoverable>
        <ActionsWrapper>
          <StyledIcon>
            <HeartOutlined />
          </StyledIcon>
          <StyledIcon>
            <EyeOutlined />
          </StyledIcon>
        </ActionsWrapper>
        <ImageWrapper>
          <ProductImage src={image} alt={name} />
        </ImageWrapper>
        <Price>${price}</Price>
        <ProductName>{name}</ProductName>
        <Rate disabled allowHalf value={rating} />
        <span> ({reviews})</span>
        <ColorOptions>
          {colors.map((color, index) => (
            <ColorDot key={index} color={color} />
          ))}
        </ColorOptions>
      </CardWrapper>
    </Badge.Ribbon>
  );
};

export default ProductCard;
