import { MappingAlgorithm, ThemeConfig, theme } from "antd";
import { Inter } from "next/font/google";
import { ColorsTheme, colorsTheme } from "./colors";

const inter = Inter({
    subsets: ["latin"],
    weight: "400",
});

const darkStyledComponentTheme = {
    color: {
        palette: colorsTheme,
        background: '#141414', // Antd dark background
        text: {
            base: colorsTheme.white,
            primary: 'rgba(255,255,255,0.88)', // Antd text color
            secondary: 'rgba(255,255,255,0.65)',
            tertiary: 'rgba(255,255,255,0.45)',
            quaternary: 'rgba(255,255,255,0.25)',
        },
        button: {
            primaryText: colorsTheme.white,
            primaryBg: '#db4444',
            primaryBorder: colorsTheme.white,
            secondaryText: colorsTheme.white,
            secondaryBg: colorsTheme.black,
            secondaryBorder: colorsTheme.white,
        }
    }
}

const lightStyledComponentTheme = {
    color: {
        palette: colorsTheme,
        background: colorsTheme.white,
        text: {
            base: colorsTheme.black,
            primary: 'rgba(0,0,0,0.88)', // Antd text color
            secondary: 'rgba(0,0,0,0.65)',
            tertiary: 'rgba(0,0,0,0.45)',
            quaternary: 'rgba(0,0,0,0.25)',
        },
        button: {
            primaryText: colorsTheme.white,
            primaryBg: '#db4444',
            primaryBorder: colorsTheme.white,
            secondaryText: colorsTheme.black,
            secondaryBg: colorsTheme.white,
            secondaryBorder: colorsTheme.black,
        }
    }
};

export function styledComponentTheme(isDarkMode: boolean): any {
    return !isDarkMode ? lightStyledComponentTheme : darkStyledComponentTheme;
}

export function antdConfigGen(isDarkMode: boolean): ThemeConfig {
    const scTheme: any = styledComponentTheme(isDarkMode);
    const { defaultAlgorithm, darkAlgorithm } = theme;

    return {
        token: {
            fontFamily: inter.style.fontFamily,
            colorTextBase: scTheme.color.text.base,
            colorBgLayout: scTheme.color.background
        },
        components: {
            Layout: {
                headerHeight: 'fit-content'
            },
            Button: {
                defaultBg: scTheme.color.button.primaryBg,
                defaultBorderColor: scTheme.color.button.primaryBorder,
                defaultHoverBorderColor: scTheme.color.button.secondaryBorder,
                defaultHoverColor: scTheme.color.button.secondaryText
            },
        },
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm
    };
};