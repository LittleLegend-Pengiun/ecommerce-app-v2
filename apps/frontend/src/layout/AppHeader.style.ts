import styled from "styled-components";
import { Layout, Typography, Button, Switch } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
const { Header } = Layout;
const { Link } = Typography;

export const StyledHeader = styled(Header)`
    display: grid;
    grid-template-rows: auto 1fr;

    background-color: ${props => props.theme.color.background};
    color: ${props => props.theme.color.text.primary};
    padding: 0 20px 20px 20px;
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

export const PromoBanner = styled.div`
    width: 100%;
    background-color: ${props => props.theme.color.background};
    color: ${props => props.theme.color.text.primary};
    text-align: center;
    padding: 5px 0;
    font-size: 14px;

    a {
        text-decoration: underline;
    }
`;

export const StyledNavBar = styled.span`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const DarkModeButton = styled(Button)`
    background-color: ${props => props.theme.color.background};
    color: ${props => props.theme.color.text.primary};
    border-color: ${props => props.theme.color.text.primary};

    &:active {
        background-color: ${props => props.theme.color.background}; /* Background when active */
        color: ${props => props.theme.color.text.primary};              /* Text color when active */
        transform: scale(0.98);   /* Slight scale effect to mimic a press */
    }
`;

export const StyledSwitch = styled(Switch)`
    .ant-switch-disabled {
        background: ${props => props.theme.color.background};
        color: ${props => props.theme.color.text.primary};
        border-color: ${props => props.theme.color.text.primary}; 
    }
`;

export const StyledShoppingCartButton = styled(ShoppingCartOutlined)`
    font-size: 28px;
    color: ${props => props.theme.color.text.primary};
`;

export const ShopNowLink = styled(Link)`
    a {
        color: ${props => props.theme.color.text.primary};
        text-decoration: none;
    }
`