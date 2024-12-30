type ColorPalette = {
    0?: string,
    50?: string,
    100?: string,
    200?: string,
    300?: string,
    400?: string,
    500?: string,
    600?: string,
    700?: string,
    800?: string,
    900?: string,
}

export type ColorsTheme = {
    primary: string,
    black: string,
    white: string,
    grey: ColorPalette,
    success: ColorPalette,
    warning: ColorPalette,
    error: ColorPalette,
    neutral: ColorPalette,
    blue: ColorPalette,
    purple: ColorPalette,
    magenta: ColorPalette,
    green: ColorPalette,
    red: ColorPalette,
    yellow: ColorPalette,
}

const greyPalette = {
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

const successPalette = {
    50: '#ECFDF5',
    100: '#D1FAE5',
    200: '#A7F3D0',
    300: '#6EE7B7',
    400: '#34D399',
    500: '#10B981',
    600: '#059669',
    700: '#047857',
    800: '#065F46',
    900: '#064E3B',
}

const warningPalette = {
    50: '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#F59E0B',
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F',
}

const errorPalette: ColorPalette = {
    50: '#FFF1F2',
    100: '#FFE4E6',
    200: '#FECDD3',
    300: '#FDA4AF',
    400: '#FB7185',
    500: '#F43F5E',
    600: '#E11D48',
    700: '#BE123C',
    800: '#9F1239',
    900: '#881337'
}

const neutralPalette: ColorPalette = {
    0: '#FFFFFF',
    50: '#F4F4F6',
    100: '#E9EAEC',
    200: '#D1D4DB',
    300: '#9096A2',
    400: '#4D566B',
    500: '#202C46',
    600: '#1B253C'
};


const bluePalette: ColorPalette = {
    100: '#F5F7FE',
    200: '#EAEFFD',
    300: '#ADBEF7',
    400: '#5A7DEE',
    500: '#315CEA',
    600: '#2A4EC7',
    700: '#2240A4'
};

const purplePalette: ColorPalette = {
    100: '#F8F5FE',
    200: '#F1ECFC',
    300: '#C9B2F3',
    400: '#9265E8',
    500: '#773FE2',
    600: '#6436BF'
};

const magentaPalette: ColorPalette = {
    100: '#FEF6F8',
    200: '#FCEEF1',
    300: '#F4BAC8',
    400: '#E97591',
    500: '#E35275',
    600: '#C24764'
};

const greenPalette: ColorPalette = {
    100: '#F4FDF7',
    200: '#E9FAEF',
    300: '#A9E5BF',
    400: '#52D880',
    500: '#27CE60',
    600: '#21AF52'
};

const redPalette: ColorPalette = {
    100: '#FCE9EC',
    200: '#F9D2D9',
    300: '#F2A6B4',
    400: '#E9677F',
    500: '#DF2648',
    600: '#B71F3B'
};

const yellowPalette: ColorPalette = {
    100: '#FEFEF3E6',
    200: '#FDE7CD',
    300: '#FCCF8C',
    400: '#FAB261',
    500: '#F89118',
    600: '#C77414'
}

export const colorsTheme: ColorsTheme = {
    primary: '#DB4444',
    black: '#000000',
    white: '#FFFFFF',
    grey: greyPalette,
    success: successPalette,
    warning: warningPalette,
    error: errorPalette,
    neutral: neutralPalette,
    blue: bluePalette,
    purple: purplePalette,
    magenta: magentaPalette,
    green: greenPalette,
    red: redPalette,
    yellow: yellowPalette,
}