import {
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';

interface Theme {
  [key: string]: AppTheme;
  light: AppTheme;
  dark: AppTheme;
}

interface CommonColors {
  commonWhite: string;
  commonBlack: string;
  activeColor: string;
  deactiveColor: string;
  boxActiveColor: string;
}

interface AppTheme {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
    themeColor: string;
    textColor: string;
    icon: string;
    lightTextColor: string;
    touchableColor: string;
    buttonColor: string;
    commonWhite: string;
    commonBlack: string;
    activeColor: string;
    deactiveColor: string;
    boxActiveColor: string;
  };
}


enum ThemeKey {
  Light = 'light',
  Dark = 'dark',
}

const commonColor: CommonColors = {
  commonWhite: '#FFFFFF',
  commonBlack: '#000000',
  activeColor: '#FFF',
  deactiveColor: '#09B6CC',
  boxActiveColor: '#46a2ae',
};

const themes: Theme = {
  light: {
    dark: false,
    colors: {
      ...commonColor,
      ...DefaultTheme.colors,
      themeColor: '#FFFFFF',
      textColor: '#000000',
      icon: "#333",
      lightTextColor: '#000000',
      touchableColor: '#DE5E69',
      buttonColor: 'gray',
    }
  },
  dark: {
    dark: false,
    colors: {
      ...commonColor,
      ...DarkTheme.colors,
      themeColor: '#000000',
      textColor: '#FFFFFF',
      icon: "#09B6CC",
      lightTextColor: '#000000',
      touchableColor: '#831a23',
      buttonColor: 'white',
    }
  },
};

export { ThemeKey, themes };
