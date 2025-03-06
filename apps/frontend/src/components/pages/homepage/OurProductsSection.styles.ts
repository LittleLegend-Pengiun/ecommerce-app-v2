import { Button } from 'antd';
import styled from 'styled-components';

const SectionWrapper = styled.div`
  padding: 1.25rem 0rem;
  text-align: center;
`;

const StyledButton = styled(Button)`
  margin-top: 1.25rem;
  background: ${(props) => props.theme.colors.button1};
  border-color: ${(props) => props.theme.colors.button1};
  &&.ant-btn:hover,
  &&.ant-btn:focus {
    background: ${(props) => props.theme.colors.hoverButton1};
    border-color: ${(props) => props.theme.colors.hoverButton1};
  }
`;

export { SectionWrapper, StyledButton };
