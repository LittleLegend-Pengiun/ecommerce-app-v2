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
        div: {
            primary: string;
            backgroundColor: string;
        };
        text: {
            primary: string;
            secondary: string;
        };
        button: {
            primary: string;
            secondary: string;
            secondaryBorder: string;
        };
    };
};

const darkStyledComponentTheme: StyledComponentTheme = {
    color: {
        palette: colorsTheme,
        div: {
            primary: colorsTheme.white,
            backgroundColor: colorsTheme.grey[200] ?? '#EFF0F6',
        },
        text: {
            primary: 'rgba(255,255,255,0.88)',
            secondary: 'rgba(255,255,255,0.65)',
        },
        button: {
            primary: colorsTheme.primary,
            secondary: colorsTheme.black,
            secondaryBorder: colorsTheme.white,
        }
    }
}

const lightStyledComponentTheme: StyledComponentTheme = {
    color: {
        palette: colorsTheme,
        div: {
            primary: '#363738',
            backgroundColor: colorsTheme.white
        },
        text: {
            primary: 'rgba(0,0,0,0.88)',
            secondary: 'rgba(0,0,0,0.65)',
        },
        button: {
            primary: colorsTheme.primary,
            secondary: colorsTheme.white,
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
        },
        components: {
            Button: {
                defaultBg: theme.color.button.primary,
            },
        }
    };
};