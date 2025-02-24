'use client';

import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import ProductCard from '@/components/atoms/ProductCart/ProductCart';
import { SectionWrapper, StyledButton } from './OurProductsSection.styles';
import ProductHeader from '@/components/atoms/ProductSectionHeader/ProductHeader';
import { Product } from '@/models/homepage-model';

const OurProductsSection: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data?.data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!products) return <p>No profile data</p>;

  return (
    <SectionWrapper>
      <ProductHeader />
      <Row gutter={[16, 16]}>
        {products?.map(
          ({ id, name, price, image, rating, reviews, isNew, colors }) => (
            <Col key={id} xs={24} sm={12} md={8} lg={6}>
              <ProductCard
                title={name}
                price={price}
                image={'/product-img/ideapad-gaming.png'}
                rating={rating}
                reviews={reviews}
                isNew={isNew}
                colors={colors}
              />
            </Col>
          ),
        )}
      </Row>
      <Row justify="center">
        <Col>
          <StyledButton type="primary">View All Products</StyledButton>
        </Col>
      </Row>
    </SectionWrapper>
  );
};

export default OurProductsSection;
