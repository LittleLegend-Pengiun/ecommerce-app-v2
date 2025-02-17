import React from "react";
import { Card, Button, Rate, Tag, Row, Col } from "antd";
import { HeartOutlined, EyeOutlined } from "@ant-design/icons";
import styled from "styled-components";

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
`;

const products = [
    { id: 1, name: "Camera", price: 360, image: "camera.png", rating: 4, isNew: false },
    { id: 2, name: "Laptop", price: 700, image: "laptop.png", rating: 5, isNew: false },
    { id: 3, name: "Shoes", price: 1160, image: "shoes.png", rating: 5, isNew: true },
    { id: 4, name: "Game Controller", price: 660, image: "controller.png", rating: 4.5, isNew: true },
];

const OurProductsSection = () => {
    return (
        <>
            <h2>Our Products</h2>
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
                            <p className="price">${product.price}</p>
                            <Rate disabled defaultValue={product.rating} />
                        </ProductCard>
                    </Col>
                ))}
            </Row>
            <Button type="primary" block style={{ marginTop: "20px", background: "red" }}>
                View All Products
            </Button>
        </>
    );
};

export default OurProductsSection;
