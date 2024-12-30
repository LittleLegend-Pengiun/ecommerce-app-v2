import { Inter } from "next/font/google";

const inter = Inter({
    subsets: ["latin"],
    weight: "400",
});


const antdConfigGen = (isDarkMode: boolean) => {
    const theme = styledComponentTheme(isDarkMode);

    return {
        token: {
            fontFamily: inter.style.fontFamily,
        },
        components: {
            Button: {
                colorBgContainerActive: theme.color.button.secondary,
                colorBgContainer: theme.color.button.secondary,
                defaultActiveBg: theme.color.button.secondary,
                defaultActiveBorderColor: theme.color.button.secondaryBorder,
                defaultBorderColor: theme.color.button.secondaryBorder,
                defaultBg: theme.color.button.primary,
            },
        }
    };
};

type StyledComponentTheme = {
    color: {
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

export function styledComponentTheme(isDarkMode: boolean): StyledComponentTheme {
    return !isDarkMode ? lightStyledComponentTheme : darkStyledComponentTheme;
}

const darkStyledComponentTheme: StyledComponentTheme = {
    color: {
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
            primary: '#DB4444',
            secondary: '#000',
            secondaryBorder: '#FFF',
        }
    }
}

const lightStyledComponentTheme: StyledComponentTheme = {
    color: {
        div: {
            primary: '#363738',
            second1: '#FEFAF1',
            second2: '#DB4444',
            backgroundColor: '#FFF'
        },
        text: {
            primary: 'rgba(0,0,0,0.88)',
            secondary: 'rgba(0,0,0,0.65)',
        },
        button: {
            primary: '#DB4444',
            secondary: '#FFF',
            secondaryBorder: '#000',
        }
    }
};

export default antdConfigGen;