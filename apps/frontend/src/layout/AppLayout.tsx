'use client';

import AppHeader from "@/layout/AppHeader";
import AppFooter from "@/layout/AppFooter";
import { ConfigProvider, Layout } from 'antd';
import { antdConfigGen } from "@/theme/config";
import { ThemeProvider } from "styled-components";
import { styledComponentTheme } from "@/theme/config";
import { StyledAppLayout, StyledBody } from "./AppLayout.style";
import { Provider, useAtom } from 'jotai'
const { Content } = Layout;

import { darkModeAtom } from "@/state/atoms/darkMode";
import { useEffect, useState } from "react";

export default function AppLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    const [isDarkMode, setIsDarkMode] = useAtom(darkModeAtom);

    useEffect(() => {
        let isDarkModeLS;
        try {
            isDarkModeLS = localStorage.getItem("isDarkMode") ?? 0;
        } catch (e) {
            isDarkModeLS = 0;
        }
        setIsDarkMode(isDarkModeLS == 1 ? true : false);
    }, []);

    const toggleDarkMode = (checked: boolean) => {
        localStorage.setItem("isDarkMode", String(checked ? 1 : 0));
        setIsDarkMode(checked);
    };

    const antdTheme = antdConfigGen(isDarkMode);
    const scTheme = styledComponentTheme(isDarkMode);

    return <html lang="en">
        <StyledBody>
            <ConfigProvider theme={antdTheme}>
                <ThemeProvider theme={scTheme}>
                    <StyledAppLayout>
                        <AppHeader toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
                        <Provider><Content>{children}</Content></Provider>
                        <AppFooter />
                    </StyledAppLayout>
                </ThemeProvider>
            </ConfigProvider>
        </StyledBody>
    </html>;
}