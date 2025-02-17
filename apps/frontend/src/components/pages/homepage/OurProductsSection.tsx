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

const ProductCard = styled(Card)`
  position: relative;
  text-align: center;
  border-radius: 10px;
  overflow: hidden;
  .price {
    color: red;
    font-weight: bold;
  }
  .icons {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    gap: 10px;
  }
  .new-tag {
    position: absolute;
    top: 10px;
    left: 10px;
  }
  .product-name {
    font-weight: bold;
    margin-top: 10px;
  }
  .cart-btn {
    width: 100%;
    background: black;
    color: white;
    font-weight: bold;
    margin-top: 10px;
  }
  .color-options {
    display: flex;
    justify-content: center;
    margin-top: 10px;
    gap: 5px;
  }
  .color-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
  }
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
                        <ProductCard
                            cover={<img src={product.image} alt={product.name} style={{ height: "150px" }} />}
                        >
                            {product.isNew && <Tag className="new-tag" color="green">NEW</Tag>}
                            <div className="icons">
                                <HeartOutlined />
                                <EyeOutlined />
                            </div>
                            <p className="product-name">{product.name}</p>
                            <p className="price">${product.price}</p>
                            <Rate disabled defaultValue={product.rating} /> <span>({product.reviews})</span>
                            {product.colors.length > 0 && (
                                <div className="color-options">
                                    {product.colors.map((color, index) => (
                                        <span key={index} className="color-dot" style={{ backgroundColor: color }}></span>
                                    ))}
                                </div>
                            )}
                            <Button className="cart-btn">Add To Cart</Button>
                        </ProductCard>
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
