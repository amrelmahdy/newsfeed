import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import AppearanceScreen from './Appearance';
import { ThemeProvider } from '../../../theme/ThemeContext';
import { act } from 'react-test-renderer';

// Mocking AsyncStorage
jest.mock('../../../storage', () => ({
    get: jest.fn().mockImplementation((key) => {
        if (key === 'Theme') {
            return Promise.resolve('light');
        } else if (key === 'ThemeSystemDefault') {
            return Promise.resolve(false);
        }
        return Promise.resolve(null);
    }),
    save: jest.fn().mockImplementation(() => Promise.resolve(true)), // Mock save function to return true

}));

// Mocking useTheme
jest.mock('@react-navigation/native', () => ({
    useTheme: () => ({
        colors: {
            textColor: 'black',
            border: 'gray'
        }
    })
}));

describe('AppearanceScreen', () => {
    it('renders correctly', async () => {
        const { getByTestId, debug } = render(
            <ThemeProvider>
                <AppearanceScreen />
            </ThemeProvider>
        );
        expect(getByTestId('radio-text-light')).toBeTruthy();
        expect(getByTestId('radio-text-dark')).toBeTruthy();
        expect(getByTestId('radio-text-default')).toBeTruthy();
    });


    it('default theme should be light', async () => {
        const { getByTestId, debug } = render(
            <ThemeProvider>
                <AppearanceScreen />
            </ThemeProvider>
        );
        debug()
        expect(getByTestId('selected-radio-light')).toBeTruthy();


    });

    it('handles theme change to dark an then light', async () => {
        const { getByTestId, debug } = render(
            <ThemeProvider>
                <AppearanceScreen />
            </ThemeProvider>
        );


        act(() => {
            fireEvent.press(getByTestId('radio-button-dark'));
        });

        expect(getByTestId("selected-radio-dark")).toBeTruthy()


        act(() => {
            fireEvent.press(getByTestId('radio-button-light'));
        });

        expect(getByTestId("selected-radio-light")).toBeTruthy();

        act(() => {
            fireEvent.press(getByTestId('radio-button-default'));
        });

        expect(getByTestId("selected-radio-default")).toBeTruthy()

    });

});
