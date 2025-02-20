import { Button, Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const LabelIcon = styled.div`
  width: 12px;
  height: 24px;
  background-color: #a94442;
  border-radius: 4px;
  margin-right: 8px;
`;

const StyledText = styled(Text)`
  color: #a94442;
  font-size: 14px;
  font-weight: bold;
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin: 0;
`;

const NavButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const NavButton = styled(Button)`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #f5f5f5;
  border: none;
  box-shadow: none;

  &:hover {
    background: #e0e0e0;
  }
`;


export {
  Section,
  StyledText,
  TitleContainer,
  LabelContainer,
  LabelIcon,
  Title,
  NavButtons,
  NavButton,
};
