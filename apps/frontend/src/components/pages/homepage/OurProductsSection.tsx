import React from "react";
import { Card, Button, Rate, Tag, Row, Col } from "antd";
import { HeartOutlined, EyeOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import styled from "styled-components";

const SectionWrapper = styled.div`
  padding: 20px;
  text-align: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  h2 {
    font-size: 24px;
    font-weight: bold;
  }
  .nav-icons {
    font-size: 18px;
    cursor: pointer;
    display: flex;
    gap: 10px;
  }
`;

const StyledCard = styled(Card)`
  position: relative;
  text-align: center;
  border-radius: 10px;
  overflow: hidden;
`;

const Price = styled.p`
  color: red;
  font-weight: bold;
`;

const IconsWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  gap: 10px;
`;

const NewTag = styled(Tag)`
  position: absolute;
  top: 10px;
  left: 10px;
`;

const ProductName = styled.p`
  font-weight: bold;
  margin-top: 10px;
`;

const CartButton = styled(Button)`
  width: 100%;
  background: black;
  color: white;
  font-weight: bold;
  margin-top: 10px;
`;

const ColorOptions = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap: 5px;
`;

const ColorDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  background-color: ${(props) => props.color};
`;

const products = [
    { id: 1, name: "Breed Dry Dog Food", price: 100, image: "dogfood.png", rating: 3, reviews: 35, isNew: false, colors: [] },
    { id: 2, name: "CANON EOS DSLR Camera", price: 360, image: "camera.png", rating: 4, reviews: 95, isNew: false, colors: [] },
    { id: 3, name: "ASUS FHD Gaming Laptop", price: 700, image: "laptop.png", rating: 5, reviews: 325, isNew: false, colors: [] },
    { id: 4, name: "Curology Product Set", price: 500, image: "curology.png", rating: 4, reviews: 145, isNew: false, colors: [] },
    { id: 5, name: "Kids Electric Car", price: 960, image: "car.png", rating: 5, reviews: 65, isNew: true, colors: ["red", "black"] },
    { id: 6, name: "Jr. Zoom Soccer Cleats", price: 1160, image: "shoes.png", rating: 5, reviews: 35, isNew: false, colors: ["yellow", "red"] },
    { id: 7, name: "GP11 Shooter USB Gamepad", price: 660, image: "controller.png", rating: 4.5, reviews: 55, isNew: true, colors: ["red", "black"] },
    { id: 8, name: "Quilted Satin Jacket", price: 660, image: "jacket.png", rating: 4.5, reviews: 55, isNew: false, colors: ["green", "red"] },
];

const OurProductsSection = () => {
    return (
        <SectionWrapper>
            <Header>
                <h2>Explore Our Products</h2>
                <div className="nav-icons">
                    <LeftOutlined />
                    <RightOutlined />
                </div>
            </Header>
            <Row gutter={[16, 16]}>
                {products.map((product) => (
                    <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                        <StyledCard
                            cover={<img src={product.image} alt={product.name} style={{ height: "150px" }} />}
                        >
                            {product.isNew && <NewTag color="green">NEW</NewTag>}
                            <IconsWrapper>
                                <HeartOutlined />
                                <EyeOutlined />
                            </IconsWrapper>
                            <ProductName>{product.name}</ProductName>
                            <Price>${product.price}</Price>
                            <Rate disabled defaultValue={product.rating} /> <span>({product.reviews})</span>
                            {product.colors.length > 0 && (
                                <ColorOptions>
                                    {product.colors.map((color, index) => (
                                        <ColorDot key={index} color={color} />
                                    ))}
                                </ColorOptions>
                            )}
                            <CartButton>Add To Cart</CartButton>
                        </StyledCard>
                    </Col>
                ))}
            </Row>
            <Button type="primary" block style={{ marginTop: "20px", background: "red" }}>
                View All Products
            </Button>
        </SectionWrapper>
    );
};

export default OurProductsSection;
