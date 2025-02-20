import { Button, Typography } from "antd";
import styled from "styled-components";

const { Text } = Typography;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const LabelIcon = styled.div`
  width: 0.75rem;
  height: 1.5rem;
  background-color: ${props => props.theme.colors.secondary2};
  border-radius: 0.25rem;
  margin-right: 0.5rem;
`;

const StyledText = styled(Text)`
  color: ${props => props.theme.colors.secondary2};
  font-size: 0.875rem;
  font-weight: bold;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
`;

const NavButtons = styled.div`
  display: flex;
  gap: 0.625px;
`;

const NavButton = styled(Button)`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${props => props.theme.colors.secondary3};
  border: none;
  box-shadow: none;

  &:hover {
    background: ${props => props.theme.colors.secondary1};
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
