import { lineHeight } from './../theme/constant/fontSize';
import styled from "styled-components";
import { Layout, Typography, Button, Switch } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
const { Header } = Layout;
const { Link } = Typography;

export const StyledHeader = styled(Header)`
    display: grid;
    grid-template-rows: auto 1fr;
    padding: 0;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text1};
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
        width: 12.5rem;
    }
`;

export const PromoBanner = styled.div`
    width: 100%;
    background-color: ${props => props.theme.colors.background2};
    color: ${props => props.theme.colors.text1};
    text-align: center;
    font-size: ${props => props.theme.fontSize.sm};

    a {
        text-decoration: underline;
    }
`;

export const StyledNavBar = styled.span`
    flex: 1;
    padding: 2rem 2rem;
    padding-bottom: 1rem;
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
    margin-left: 0.5rem;
    font-size: ${props => props.theme.fontSize.x2l};
    color: ${props => props.theme.colors.text1};
`;

export const ShopNowLink = styled(Link)`
    &.ant-typography {
        color: ${props => props.theme.colors.primary1};
        text-decoration: none;
    }
`

export const StyledP = styled.p`
    color: ${props => props.theme.colors.text2};
`

export const StyledButton = styled(Button)`
    background-color: ${props => props.theme.colors.background} !important;
    border-color: ${props => props.theme.colors.text2} !important;

    &:hover {
        background-color: ${props => props.theme.colors.secondary1} !important;
        border-color: ${props => props.theme.colors.hoverButton2} !important;
    }
`