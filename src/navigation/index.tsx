import React, { useContext, useEffect, useRef } from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import BottomTabNavigation from './BottomTabNavigation/BottomTabNavigation';
import ThemeContext from '../theme/ThemeContext';
import { themes } from '../theme/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppearanceScreen from '../screens/Settings/Appearance/Appearance';
import LanguageScreen from '../screens/Settings/Language/Language';
import { useTranslation } from 'react-i18next';
import NewsDetailsScreen from '../screens/NewsDetails/NewsDetails';
import { linking } from '../linking';


export type RootStackParamList = {
    Home: undefined;
    NewsScreen: {
        url: string
    };
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

const Stack = createNativeStackNavigator<RootStackParamList>();

function Navigation() {
    const { theme } = useContext(ThemeContext);
    const { t } = useTranslation();
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
            <Stack.Navigator screenOptions={{ headerShown: false, headerTintColor: themes[theme].colors.primary }}>
                <Stack.Screen name="Home" component={BottomTabNavigation} />
                <Stack.Screen name="NewsDetailsScreen" component={NewsDetailsScreen} options={{ title: t("article_details"), headerShown: true, headerBackTitleVisible: false }} />
                <Stack.Screen name="AppearanceScreen" component={AppearanceScreen} options={{ title: t('appearance'), headerShown: true, headerBackTitleVisible: false }} />
                <Stack.Screen name="LanguageScreen" component={LanguageScreen} options={{ title: t("lang"), headerShown: true, headerBackTitleVisible: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
