import React from "react";
import { Button, Row, Col } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import ProductCard from "@/components/atoms/ProductCart/ProductCart";
import {
  SectionWrapper,
  HeaderWrapper,
  Title,
  NavIcons,
} from "./OurProductsSection.styles";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  isNew: boolean;
  colors: string[];
};

const products: Product[] = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    price: 100,
    image: "dogfood.png",
    rating: 3,
    reviews: 35,
    isNew: false,
    colors: [],
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    price: 360,
    image: "camera.png",
    rating: 4,
    reviews: 95,
    isNew: false,
    colors: [],
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    price: 700,
    image: "laptop.png",
    rating: 5,
    reviews: 325,
    isNew: false,
    colors: [],
  },
  {
    id: 4,
    name: "Curology Product Set",
    price: 500,
    image: "curology.png",
    rating: 4,
    reviews: 145,
    isNew: false,
    colors: [],
  },
  {
    id: 5,
    name: "Kids Electric Car",
    price: 960,
    image: "car.png",
    rating: 5,
    reviews: 65,
    isNew: true,
    colors: ["red", "black"],
  },
  {
    id: 6,
    name: "Jr. Zoom Soccer Cleats",
    price: 1160,
    image: "shoes.png",
    rating: 5,
    reviews: 35,
    isNew: false,
    colors: ["yellow", "red"],
  },
  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    price: 660,
    image: "controller.png",
    rating: 4.5,
    reviews: 55,
    isNew: true,
    colors: ["red", "black"],
  },
  {
    id: 8,
    name: "Quilted Satin Jacket",
    price: 660,
    image: "jacket.png",
    rating: 4.5,
    reviews: 55,
    isNew: false,
    colors: ["green", "red"],
  },
];

const OurProductsSection: React.FC = () => {
  return (
    <SectionWrapper>
      <HeaderWrapper>
        <Title>Explore Our Products</Title>
        <NavIcons>
          <LeftOutlined />
          <RightOutlined />
        </NavIcons>
      </HeaderWrapper>
      <Row gutter={[16, 16]}>
        {products.map(
          ({ id, name, price, image, rating, reviews, isNew, colors }) => (
            <Col key={id} xs={24} sm={12} md={8} lg={6}>
              <ProductCard
                name={name}
                price={price}
                image={image}
                rating={rating}
                reviews={reviews}
                isNew={isNew}
                colors={colors}
              />
            </Col>
          )
        )}
      </Row>
      <Button
        type="primary"
        block
        style={{ marginTop: "20px", background: "red" }}
      >
        View All Products
      </Button>
    </SectionWrapper>
  );
};

export default OurProductsSection;
