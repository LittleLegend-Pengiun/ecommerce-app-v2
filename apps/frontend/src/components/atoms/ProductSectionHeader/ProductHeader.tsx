import React from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Section, TitleContainer, LabelContainer, LabelIcon, StyledText, Title, NavButtons, NavButton } from "./ProductHeader.styles";


const ProductHeader: React.FC = () => {
  return (
    <Section>
      <TitleContainer>
        <LabelContainer>
          <LabelIcon />
          <StyledText>Our Products</StyledText>
        </LabelContainer>
        <Title>Explore Our Products</Title>
      </TitleContainer>
      <NavButtons>
        <NavButton icon={<LeftOutlined />} />
        <NavButton icon={<RightOutlined />} />
      </NavButtons>
    </Section>
  );
};

export default ProductHeader;
