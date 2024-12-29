import styled from "styled-components";
import { Layout, Menu, Input, Typography, Card, Button } from "antd";
import { BulbOutlined, MoonOutlined } from "@ant-design/icons";
const { Header } = Layout;

// Styled Components
export const PromoBanner = styled.div`
    background-color: ${props => props.theme.color.div.backgroundColor};
    color: ${props => props.theme.color.text.primary};
    text-align: center;
    padding: 5px 0;
    font-size: 14px;

    a {
        text-decoration: underline;
    }
`;

export const StyledHeader = styled(Header)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.theme.color.div.backgroundColor};
    color: ${props => props.theme.color.text.primary};
    padding: 0 20px;
    border-bottom: 1px solid #ddd;

    .logo {
        font-size: 18px;
        font-weight: bold;
    }

    .menu {
        flex: 1;
        border: none;
        display: flex;
        justify-content: center;
    }

    .search-bar {
        margin-left: auto;
        width: 200px;
    }
`;

export const DarkModeButton = styled(Button)`
    background-color: ${props => props.theme.color.div.backgroundColor};
    color: ${props => props.theme.color.text.primary};
    border-color: ${props => props.theme.color.text.primary};
`;