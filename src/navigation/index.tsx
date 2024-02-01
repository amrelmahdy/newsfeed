import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './BottomTabNavigation/BottomTabNavigation';

export type RootStackParamList = {
    NewsScreen: undefined;
    SettingsScreen: undefined;
    Settings: undefined
    NewsDetailsScreen: {
        urlToImage: string,
        title: string,
        description: string,
        content: string
    };
};

function Navigation() {
    return (
        <NavigationContainer>
            <BottomTabNavigation />
        </NavigationContainer>
    );
}

export default Navigation;
