import { ThemeConfig, theme } from "antd";
import { Inter } from "next/font/google";
import { colorPallete } from "./constant/colorPallete";
import { fontSize, lineHeight } from "./constant/fontSize";

const inter = Inter({
    subsets: ["latin"],
    weight: "400",
});


const antdConfigGen: ThemeConfig = {
    token: {
        fontFamily: inter.style.fontFamily,
        colorTextBase: colorPallete.text1,
        colorBgLayout: colorPallete.background,
    },
    components: {
        Layout: {
            headerHeight: 'fit-content'
        },
        Button: {
            defaultBg: colorPallete.button1,
            defaultBorderColor: colorPallete.button1,
            defaultHoverBorderColor: colorPallete.hoverButton1,
            defaultHoverColor: colorPallete.hoverButton1
        },
    },
    algorithm: theme.defaultAlgorithm
};

const styledComponentTheme = {
    colors: colorPallete,
    fontSize: fontSize,
    lineHeight: lineHeight
}

export { antdConfigGen, styledComponentTheme }