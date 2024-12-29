'use client';

import AppHeader from "@/layout/AppHeader";
import AppFooter from "@/layout/AppFooter";
import { ConfigProvider, theme } from 'antd';
import antdConfigGen from "@/theme/config";
import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { styledComponentTheme } from "@/theme/config";
import { StyledBody } from "./UserLayout.style";

export default function UserLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    const { defaultAlgorithm, darkAlgorithm } = theme;

    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

    return <ConfigProvider theme={{
        ...antdConfigGen(isDarkMode),
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
    }}>
        <ThemeProvider theme={styledComponentTheme(isDarkMode)}>
            <StyledBody>
                <main>
                    <AppHeader toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
                    {children}
                    <AppFooter />
                </main>
            </StyledBody>
        </ThemeProvider>
    </ConfigProvider>;
}