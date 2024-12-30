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
            second1: string;
            second2: string;
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
            primary: '#FFFFFF',
            second1: '#FEFAF1',
            second2: '#F5F5F5',
            backgroundColor: '#141414'
        },
        text: {
            primary: 'rgba(255,255,255,0.88)',
            secondary: 'rgba(255,255,255,0.65)',
        },
        button: {
            primary: colorsTheme.primary,
            secondary: '#000',
            secondaryBorder: '#FFF',
        }
    }
}

const lightStyledComponentTheme: StyledComponentTheme = {
    color: {
        palette: colorsTheme,
        div: {
            primary: '#363738',
            second1: '#FEFAF1',
            second2: colorsTheme.primary,
            backgroundColor: '#FFF'
        },
        text: {
            primary: 'rgba(0,0,0,0.88)',
            secondary: 'rgba(0,0,0,0.65)',
        },
        button: {
            primary: colorsTheme.primary,
            secondary: '#FFF',
            secondaryBorder: '#000',
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