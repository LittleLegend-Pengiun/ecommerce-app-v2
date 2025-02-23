import React from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Section, TitleContainer, LabelContainer, LabelIcon, StyledText, NavButtons, NavButton, StyledTitle } from "./ProductHeader.styles";

const ProductHeader: React.FC = () => {
  return (
    <Section>
      <TitleContainer>
        <LabelContainer>
          <LabelIcon />
          <StyledText>Our Products</StyledText>
        </LabelContainer>
        <StyledTitle level={2}>Explore Our Products</StyledTitle>
      </TitleContainer>
      <NavButtons>
        <NavButton icon={<LeftOutlined />} />
        <NavButton icon={<RightOutlined />} />
      </NavButtons>
    </Section>
  );
};

export default ProductHeader;
