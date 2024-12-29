import { Layout, Input, Row } from "antd";
const { Footer } = Layout;

import styled from "styled-components";

export const StyledFooter = styled(Footer)`
    background-color: ${props => props.theme.color.div.backgroundColor};
    color: ${props => props.theme.color.text.primary};
    padding: 40px 20px;
    border-top: 1px solid #ddd;
`;

export const StyledSubscribeInput = styled(Input)`
    border-radius: 4px;
    margin-bottom: 16px;
`;

export const StyledCopyrightRow = styled(Row)`
    margin-top: 32; 
    text-align: center;
`;