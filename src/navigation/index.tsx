import React, { useContext, useEffect, useRef } from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import ThemeContext from '../theme/ThemeContext';
import { themes } from '../theme/colors';
import { linking } from '../linking';
import RootNavigator from './RootNavigator';


export type RootStackParamList = {
    Home: undefined;
    NewsScreen: { url: string } | undefined;
    SettingsScreen: undefined;
    Settings: undefined
    AppearanceScreen: undefined,
    LanguageScreen: undefined,
    NewsDetailsScreen: {
        urlToImage: string | null;
        title: string,
        description: string,
        content: string | null;
        publishedAt: string,
        author: string
    };
};


function Navigation() {
    const { theme } = useContext(ThemeContext);
    const routeNameRef = useRef<string | undefined>();
    const navigationRef = useNavigationContainerRef<RootStackParamList>();
    const handleReceivedUrl = (url: string) => {
        navigationRef.navigate('NewsScreen', { url })
    }

    useEffect(() => {
        linking.subscribe(handleReceivedUrl)
    }, [navigationRef]);

    return (
        <NavigationContainer
            ref={navigationRef}
            onReady={() => {
                routeNameRef.current = navigationRef?.getCurrentRoute()?.name;
            }}
            theme={themes[theme]}
            linking={linking}>
            <RootNavigator />
        </NavigationContainer>
    );
}

export default Navigation;
