const primaryColorLight = "#162C5B";
const primaryColorDark = "#161615";
const secondaryColorLight = "#167BD8";
const secondaryColorDark = "#0F4C81";
const tertiaryColorLight = "#64707D";
const tertiaryColorDark = "#3C4C5B";
const quaternaryColorLight = "#2E2E2E";

// alias adb='C:\\Users\\USUARIO\\AppData\\Local\\Android\\Sdk\\platform-tools\\adb.exe'
export default {
  light: {
    text: "#000",
    background: "#fff",
    primary: primaryColorLight,
    secondary: secondaryColorLight,
    tertiary: tertiaryColorLight,
    quaternary: quaternaryColorLight,
    inputBacckground: "#F4F4F4",
    inputColor: "#5B5B5B",
    tabIconDefault: "#ccc",
    tabIconSelected: primaryColorDark,
    textInputColor: "#fff",  
    backgroundheaderlink: secondaryColorLight,
  },
  dark: {
    text: "#fff",
    background: primaryColorDark,
    primary: primaryColorDark,
    secondary: secondaryColorLight,
    tertiary: tertiaryColorLight,
    quaternary: quaternaryColorLight,
    inputBacckground: "#4A4A49",
    inputColor: "#5B5B5B",
    secundary: "#292929",
    tabIconDefault: "#ccc",
    tabIconSelected: primaryColorDark,
    textInputColor: "#000",
    backgroundheaderlink: secondaryColorLight,
  },
};
