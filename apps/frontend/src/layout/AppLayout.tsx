'use client';

import AppHeader from "@/layout/AppHeader";
import AppFooter from "@/layout/AppFooter";
import { ConfigProvider, Layout } from 'antd';
import { antdConfigGen, styledComponentTheme } from "@/theme/config";
import { ThemeProvider } from "styled-components";
import { StyledAppLayout, StyledBody } from "./AppLayout.style";
import { Provider } from 'jotai'
const { Content } = Layout;

type AppLayoutType = { children: React.ReactNode; }

const AppLayout: React.FC<AppLayoutType> = ({ children }) => {
    return (
        <html lang="en">
            <ConfigProvider theme={antdConfigGen}>
                <ThemeProvider theme={styledComponentTheme}>
                    <StyledBody>
                        <StyledAppLayout>
                            <AppHeader />
                            <Provider><Content>{children}</Content></Provider>
                        </StyledAppLayout>
                        <AppFooter />
                    </StyledBody>
                </ThemeProvider>
            </ConfigProvider>
        </html>
    );
}

export default AppLayout;