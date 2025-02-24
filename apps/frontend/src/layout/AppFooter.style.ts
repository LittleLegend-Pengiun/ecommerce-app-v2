import { Layout, Input, Row, Typography, Button } from 'antd';
const { Footer } = Layout;
const { Text, Title } = Typography;

import styled from 'styled-components';

export const StyledFooter = styled(Footer)`
  background-color: ${(props) => props.theme.colors.background2};
  color: ${(props) => props.theme.colors.text2};
  padding: 2rem;
  border-top: 0.1rem solid #ddd;
`;

export const StyledSubscribeInput = styled(Input)`
  width: 80%;
  border-radius: 0.25rem;
  margin-top: 0.75rem;
  margin-bottom: 1rem;
`;

export const StyledUnorderedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 0.625rem;
    a {
      color: ${(props) => props.theme.colors.text2};
      text-decoration: none;
    }
  }
`;

export const StyledFooterButton = styled(Button)`
  color: ${(props) => props.theme.colors.secondary1};
`;

export const StyledCopyrightRow = styled(Row)`
  margin-top: 3.75rem;
  text-align: center;
`;

export const StyledCopyrightedText = styled(Text)`
  color: ${(props) => props.theme.colors.secondary1};
`;

export const StyledText = styled(Text)`
  color: ${(props) => props.theme.colors.text2};
`;

export const StyledA = styled.a`
  color: ${(props) => props.theme.colors.secondary1};
  text-decoration: none;
`;

export const StyledTitle = styled(Title)`
  &.ant-typography {
    color: ${(props) => props.theme.colors.secondary1};
  }
`;
