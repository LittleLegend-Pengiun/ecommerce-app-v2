import styled from "styled-components";
import { Layout } from "antd";

const { Content } = Layout;

export const StyledBody = styled.body`
    margin: 0;
    min-height: 100vh;
`;

export const StyledAppLayout = styled(Layout)`
    min-height: 100vh;
    margin: 0;
    display: grid;
    grid-template-rows: auto 1fr auto;
    // min-height: 100vh; /* Ensures the grid spans the full viewport height */
`;

export const StyledAppContent = styled(Content)`
`