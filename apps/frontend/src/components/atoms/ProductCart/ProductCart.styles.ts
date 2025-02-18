import { Card } from "antd";
import styled from "styled-components";

const CardWrapper = styled(Card)`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px;
`;

const ProductImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const Price = styled.p`
  color: red;
  font-weight: bold;
  margin-bottom: 5px;
`;

const ProductName = styled.p`
  font-size: 16px;
  font-weight: 600;
`;

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  position: absolute;
  top: 8px;
  right: 8px;
`;

const StyledIcon = styled.span`
  cursor: pointer;
  font-size: 18px;
  margin-left: 8px;
`;

const ColorOptions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
  gap: 5px;
`;

const ColorDot = styled.span<{ color: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props) => props.color};
  display: inline-block;
`;

export {
  CardWrapper,
  ImageWrapper,
  ProductImage,
  Price,
  ProductName,
  ActionsWrapper,
  StyledIcon,
  ColorOptions,
  ColorDot,
};
