type ColorPalette = {
    0: string,
    50: string,
    100: string,
    200: string,
    300: string,
    400: string,
    500: string,
    600: string,
    700: string,
    800: string,
    900: string,
}

export type ColorsTheme = {
    black: string,
    white: string,
    grey: ColorPalette | string,
    success: ColorPalette | string,
    warning: ColorPalette | string,
    error: ColorPalette | string,
    neutral: ColorPalette | string,
    blue: ColorPalette | string,
    purple: ColorPalette | string,
    magenta: ColorPalette | string,
    green: ColorPalette | string,
    red: ColorPalette | string,
    yellow: ColorPalette | string,
}

const greyPalette = {
    0: '#FEFEFE',
    50: '#FCFCFC',
    100: '#F7F7FC',
    200: '#EFF0F6',
    300: '#D9DBE9',
    400: '#A0A3BD',
    500: '#7D8184',
    600: '#6E7191',
    700: '#4E4B66',
    800: '#141414',
    900: '#070707',
}

// primary: '#DB4444',

export const colorsTheme: ColorsTheme = {
    black: '#000000',
    white: '#FFFFFF',
    grey: greyPalette,
    success: '10B981',
    warning: 'FCD34D',
    error: 'E11D48',
    neutral: '1B253C',
    blue: '2240A4',
    purple: '6436BF',
    magenta: 'C24764',
    green: '21AF52',
    red: 'B71F3B',
    yellow: '#FFFF00'
}