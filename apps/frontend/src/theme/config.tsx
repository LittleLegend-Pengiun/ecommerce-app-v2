import { ThemeConfig } from "antd";
import { Inter } from "next/font/google";
import { ColorsTheme, colorsTheme } from "./colors";

const inter = Inter({
    subsets: ["latin"],
    weight: "400",
});


type StyledComponentTheme = {
    color: {
        palette: ColorsTheme,
        background: string,
        text: {
            primary: string,
            secondary: string,
            tertiary: string,
            quaternary: string,
            base: string,
        };
        button: {
            primaryText: string;
            primaryBg: string;
            primaryBorder: string;
            secondaryText: string;
            secondaryBg: string;
            secondaryBorder: string;
        };
    };
};

const darkStyledComponentTheme: StyledComponentTheme = {
    color: {
        palette: colorsTheme,
        background: colorsTheme.grey[800],
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

const lightStyledComponentTheme: StyledComponentTheme = {
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

export function styledComponentTheme(isDarkMode: boolean): StyledComponentTheme {
    return !isDarkMode ? lightStyledComponentTheme : darkStyledComponentTheme;
}

export function antdConfigGen(isDarkMode: boolean): ThemeConfig {
    const theme = styledComponentTheme(isDarkMode);

    return {
        token: {
            fontFamily: inter.style.fontFamily,
            colorTextBase: theme.color.text.base,
            colorBgLayout: theme.color.background
        },
        components: {
            Layout: {
                headerHeight: 'fit-content'
            },
            Button: {
                defaultBg: theme.color.button.primaryBg,
                defaultBorderColor: theme.color.button.primaryBorder,
                defaultHoverBorderColor: theme.color.button.secondaryBorder,
                defaultHoverColor: theme.color.button.secondaryText
            },
        }
    };
};