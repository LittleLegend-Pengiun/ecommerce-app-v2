'use client';

import AppHeader from "@/layout/AppHeader";
import AppFooter from "@/layout/AppFooter";
import { ConfigProvider, Layout, theme } from 'antd';
import { antdConfigGen } from "@/theme/config";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { styledComponentTheme } from "@/theme/config";
import { StyledAppLayout, StyledBody } from "./AppLayout.style";
import { Provider } from 'jotai'

const { Content } = Layout;

export default function AppLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    const { defaultAlgorithm, darkAlgorithm } = theme;

    let isDarkModeLS;
    try {
        isDarkModeLS = Boolean(window.localStorage.getItem("isDarkMode")) || false;
    } catch (e) {
        isDarkModeLS = false;
    }

    const [isDarkMode, setIsDarkMode] = useState(isDarkModeLS);
    const toggleDarkMode = () => {
        window.localStorage.setItem("isDarkMode", String(!isDarkMode));
        setIsDarkMode(!isDarkMode);
    };

    return <StyledBody>
        <ConfigProvider theme={{
            ...antdConfigGen(isDarkMode),
            algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
        }}>
            <ThemeProvider theme={styledComponentTheme(isDarkMode)}>
                <StyledAppLayout>
                    <Provider>
                        <AppHeader toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
                        <Content>{children}</Content>
                        <AppFooter />
                    </Provider>
                </StyledAppLayout>
            </ThemeProvider>
        </ConfigProvider>
    </StyledBody>;
}