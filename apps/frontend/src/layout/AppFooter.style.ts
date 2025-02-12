import { Layout, Input, Row, Typography, Button } from "antd";
const { Footer } = Layout;
const { Text, Title } = Typography;

import styled from "styled-components";

export const StyledFooter = styled(Footer)`
    background-color: ${props => props.theme.colors.background2};
    color: ${props => props.theme.colors.text2};
    padding: 40px 20px 5px 20px;
    margin-top: 20px;
    border-top: 1px solid #ddd;
`;

export const StyledSubscribeInput = styled(Input)`
    width: 80%;
    border-radius: 4px;
    margin-top: 12px;
    margin-bottom: 16px;
`;

export const StyledUnorderedList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    li {
        margin-bottom: 10px;

        a {
            color: ${props => props.theme.colors.text2};
            text-decoration: none;
        }
    }
`;

export const StyledFooterButton = styled(Button)`
    color: ${props => props.theme.colors.secondary1};
`

export const StyledCopyrightRow = styled(Row)`
    margin-top: 60px; 
    text-align: center;
`;

export const StyledCopyrightedText = styled(Text)`
    color: ${props => props.theme.colors.secondary1};
`

export const StyledTitle = styled(Title)`
    color: ${props => props.theme.colors.secondary1};
`