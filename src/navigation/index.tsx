import React, { SetStateAction, useCallback, useContext, useEffect, useState } from 'react';

import {
    NavigationContainer, DarkTheme,
    DefaultTheme,
} from '@react-navigation/native';
import BottomTabNavigation from './BottomTabNavigation/BottomTabNavigation';
import { useColorScheme } from 'react-native';
import { get } from '../storage';
import { Appearance } from 'react-native';
import ThemeContext from '../theme/ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeKey, themes } from '../theme/colors';

export type RootStackParamList = {
    NewsScreen: undefined;
    SettingsScreen: undefined;
    Settings: undefined
    AppearanceScreen: undefined,
    LanguageScreen: undefined,
    NewsDetailsScreen: {
        urlToImage: string,
        title: string,
        description: string,
        content: string
    };
};

function Navigation() {
    const { theme } = useContext(ThemeContext);
    return (
        <NavigationContainer theme={themes[theme]}>
            <BottomTabNavigation />
        </NavigationContainer>

    );
}

export default Navigation;
