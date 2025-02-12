'use client';

import AppHeader from "@/layout/AppHeader";
import AppFooter from "@/layout/AppFooter";
import { ConfigProvider, Layout } from 'antd';
import { antdConfigGen, styledComponentTheme } from "@/theme/config";
import { ThemeProvider } from "styled-components";
import { StyledAppLayout, StyledBody } from "./AppLayout.style";
import { Provider as JotaiProvider } from 'jotai'
const { Content } = Layout;

type AppLayoutType = { children: React.ReactNode; }

const AppLayout: React.FC<AppLayoutType> = ({ children }) => {
    return (
        <html lang="en">
            <ConfigProvider theme={antdConfigGen}>
                <ThemeProvider theme={styledComponentTheme}>
                    <JotaiProvider>
                        <StyledBody>
                            <StyledAppLayout>
                                <AppHeader />
                                <Content>{children}</Content>
                            </StyledAppLayout>
                            <AppFooter />
                        </StyledBody>
                    </JotaiProvider>
                </ThemeProvider>
            </ConfigProvider>
        </html>
    );
}

export default AppLayout;