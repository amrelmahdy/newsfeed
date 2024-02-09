import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import LanguageScreen from './Language';
import { ThemeProvider } from '../../../theme/ThemeContext';
import { save as saveToStorage } from '../../../storage';

jest.mock('../../../storage', () => ({
  get: jest.fn().mockResolvedValue('en'), 
  save: jest.fn().mockResolvedValue(true), 
}));

jest.mock('@react-navigation/native', () => ({
  useTheme: () => ({
    colors: {
      textColor: 'black',
      border: 'gray'
    }
  })
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    i18n: {
      changeLanguage: jest.fn(),
    },
  }),
}));

describe('LanguageScreen', () => {
  it('renders correctly', async () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <LanguageScreen />
      </ThemeProvider>
    );
    expect(getByTestId('radio-text-en')).toBeTruthy();
    expect(getByTestId('radio-text-it')).toBeTruthy();
  });

  it('saves selected language to storage on change', async () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <LanguageScreen />
      </ThemeProvider>
    );
    fireEvent.press(getByTestId('radio-button-en'));
    expect(saveToStorage).toHaveBeenCalledWith('Language', 'en');
  });
});
