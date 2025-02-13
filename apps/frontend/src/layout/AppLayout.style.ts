import styled from "styled-components";
import { Layout } from "antd";


export const StyledBody = styled.body`
    margin: 0;
    min-height: 100vh;
`;

export const StyledAppLayout = styled(Layout)`
    min-height: 100vh;
    margin-top: 1rem;
    display: grid;
    grid-template-rows: auto 1fr auto;
`;

export const StyledContent = styled(Layout.Content)`
    margin-left: 2rem;
    margin-right: 2rem;
`