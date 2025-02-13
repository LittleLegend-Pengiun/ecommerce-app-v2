import { fontSize } from './../theme/fontSize';
import styled from "styled-components";
import { Layout, Typography, Button, Switch } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
const { Header } = Layout;
const { Link } = Typography;

export const StyledHeader = styled(Header)`
    display: grid;
    grid-template-rows: auto 1fr;

    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text1};
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 1rem;
    border-bottom: 0.1rem solid #ddd;

    .logo {
        font-size: ${props => props.theme.fontSize.xl};
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
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text1};
    text-align: center;
    padding: 0.375rem 0;
    font-size: ${props => props.theme.fontSize.sm};

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
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text1};
    border-color: ${props => props.theme.colors.text1};

    &:active {
        background-color: ${props => props.theme.colors.background}; /* Background when active */
        color: ${props => props.theme.colors.text1};              /* Text color when active */
        transform: scale(0.98);   /* Slight scale effect to mimic a press */
    }
`;

export const StyledSwitch = styled(Switch)`
    .ant-switch-disabled {
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text1};
        border-color: ${props => props.theme.colors.text1}; 
    }
`;

export const StyledShoppingCartButton = styled(ShoppingCartOutlined)`
    font-size: ${props => props.theme.fontSize.x2l};
    color: ${props => props.theme.colors.text1};
`;

export const ShopNowLink = styled(Link)`
    a {
        color: ${props => props.theme.colors.text1};
        text-decoration: none;
    }
`