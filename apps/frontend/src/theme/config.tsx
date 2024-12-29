const antdConfigGen = (isDarkMode: boolean) => {
    const theme = styledComponentTheme(isDarkMode);

    return {
        token: {},
        components: {
            Button: {
                defaultBg: theme.color.button.primary
            }
        }
    };
};

export const styledComponentTheme = (isDarkMode: boolean) => {
    return !isDarkMode ? {
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
    } : {
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
    };
}

export default antdConfigGen;