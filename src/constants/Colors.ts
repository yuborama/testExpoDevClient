const primaryColorLight = '#0079C6';
const primaryColorDark = '#161615';
const secondaryColorLight = '#0079C6';

// alias adb='C:\\Users\\USUARIO\\AppData\\Local\\Android\\Sdk\\platform-tools\\adb.exe'
export default {
  light: {
    text: '#000',
    background: '#fff',
    primary: primaryColorLight,
    secundary: '#F9F9F9',
    inputBacckground: '#f5f5f5',
    tabIconDefault: '#ccc',
    tabIconSelected: primaryColorDark,
    textInputColor: "#fff",
    backgroundheaderlink: secondaryColorLight,
  },
  dark: {
    text: '#fff',
    background: primaryColorDark,
    primary: primaryColorDark,
    inputBacckground: '#4A4A49',
    secundary: '#292929',
    tabIconDefault: '#ccc',
    tabIconSelected: primaryColorDark,
    textInputColor: '#000',
    backgroundheaderlink: secondaryColorLight,
  },
};
