'use client';

import AppHeader from "@/layout/header";
import AppFooter from "./footer";
import { ConfigProvider, theme } from 'antd';
import antdConfigGen from "@/theme/config";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { styledComponentTheme } from "@/theme/config";

export const StyledBody = styled.body`
    margin: 0;
`;

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