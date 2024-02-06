import {
  DarkTheme,
  DefaultTheme
} from '@react-navigation/native';

interface Themes {
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
  separator: string;
}

export interface AppColors extends CommonColors {
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
  inputBackgroundColor: string;
};

interface AppTheme {
  dark: boolean;
  colors: AppColors
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
  separator: "#CCCCCC"
};

const themes: Themes = {
  light: {
    dark: false,
    colors: {
      ...commonColor,
      ...DefaultTheme.colors,
      primary: '#09B6CC',
      themeColor: '#FFFFFF',
      textColor: '#000000',
      icon: "#333",
      lightTextColor: '#555',
      touchableColor: '#DE5E69',
      inputBackgroundColor: "#EEE",
      buttonColor: 'gray',
    }
  },
  dark: {
    dark: false,
    colors: {
      ...commonColor,
      ...DarkTheme.colors,
      primary: '#09B6CC',
      themeColor: '#000000',
      textColor: '#FFFFFF',
      icon: "#09B6CC",
      lightTextColor: '#888',
      touchableColor: '#831a23',
      inputBackgroundColor: "#333",
      buttonColor: 'white',
    }
  },
};

export { ThemeKey, themes };
