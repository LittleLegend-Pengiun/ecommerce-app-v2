'use client';

import AppHeader from "@/layout/AppHeader";
import AppFooter from "@/layout/AppFooter";
import { ConfigProvider, Layout, theme } from 'antd';
import { antdConfigGen } from "@/theme/config";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { styledComponentTheme } from "@/theme/config";
import { StyledAppLayout, StyledBody } from "./AppLayout.style";

const { Content } = Layout;

export default function AppLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    const { defaultAlgorithm, darkAlgorithm } = theme;

    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    return <StyledBody>
        <ConfigProvider theme={{
            ...antdConfigGen(isDarkMode),
            algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        }}>
            <ThemeProvider theme={styledComponentTheme(isDarkMode)}>
                <StyledAppLayout>
                    <AppHeader toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
                    <Content>{children}</Content>
                    <AppFooter />
                </StyledAppLayout>
            </ThemeProvider>
        </ConfigProvider>
    </StyledBody>;
}