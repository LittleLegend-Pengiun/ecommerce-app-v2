import styled from "styled-components";
import { Layout, Input, Button } from "antd";
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

    &:active {
        background-color: ${props => props.theme.color.div.backgroundColor}; /* Background when active */
        color: ${props => props.theme.color.text.primary};              /* Text color when active */
        transform: scale(0.98);   /* Slight scale effect to mimic a press */
    }
`;