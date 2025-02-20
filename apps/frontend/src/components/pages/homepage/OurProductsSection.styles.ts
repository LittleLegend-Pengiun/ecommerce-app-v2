import { Button } from "antd";
import styled from "styled-components";

const SectionWrapper = styled.div`
  padding: 1.25rem;
  text-align: center;
`;

const StyledButton = styled(Button)`
  margin-top: 1.25rem;
  background: ${props => props.theme.colors.button1} !important;
  border-color: ${props => props.theme.colors.button1} !important;
  &:hover,
  &:focus {
    background: ${props => props.theme.colors.hoverButton1} !important;
    border-color: ${props => props.theme.colors.hoverButton1} !important;
  }
`;

export { SectionWrapper, StyledButton };
