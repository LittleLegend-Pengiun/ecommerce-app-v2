'use client';

import AppHeader from "@/layout/AppHeader";
import AppFooter from "@/layout/AppFooter";
import { ConfigProvider } from 'antd';
import { antdConfigGen, styledComponentTheme } from "@/theme/config";
import { ThemeProvider } from "styled-components";
import { StyledAppLayout, StyledBody, StyledContent } from "./AppLayout.style";
import { Provider as JotaiProvider } from 'jotai'

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
                                <StyledContent>{children}</StyledContent>
                                <AppFooter />
                            </StyledAppLayout>
                        </StyledBody>
                    </JotaiProvider>
                </ThemeProvider>
            </ConfigProvider>
        </html>
    );
}

export default AppLayout;