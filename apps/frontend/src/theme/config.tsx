const antdConfigGen = (isDarkMode: boolean) => {
    const theme = styledComponentTheme(isDarkMode);

    return {
        token: {},
        components: {
            Button: {
                defaultBg: theme.color.button.primary
            },
        }
    };
};

export type StyledComponentTheme = {
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
        };
    };
};

export const styledComponentTheme: (isDarkMode: boolean) => StyledComponentTheme = (isDarkMode: boolean) => {
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
            secondary: '#FFF'
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
            secondary: '#000'
        }
    }
};

export default antdConfigGen;