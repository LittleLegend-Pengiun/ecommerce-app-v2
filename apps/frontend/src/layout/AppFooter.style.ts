import { Layout, Input, Row, Typography, Button } from "antd";
const { Footer } = Layout;
const { Text } = Typography;

import styled from "styled-components";

export const StyledFooter = styled(Footer)`
    background-color: ${props => props.theme.color.background};
    color: ${props => props.theme.color.text.primary};
    padding: 40px 20px;
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
            color: ${props => props.theme.color.text.primary};
            text-decoration: none;
        }
    }
`;

export const StyledFooterButton = styled(Button)`
    color: ${props => props.theme.color.palette.white};
`

export const StyledCopyrightRow = styled(Row)`
    margin-top: 60px; 
    text-align: center;
`;

export const CopyrightedTextStyle = styled(Text)`
    color: ${props => props.theme.color.text.tertiary};
`