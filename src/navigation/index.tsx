import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigation from './BottomTabNavigation/BottomTabNavigation';
import ThemeContext from '../theme/ThemeContext';
import { themes } from '../theme/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppearanceScreen from '../screens/Settings/Appearance/Appearance';
import LanguageScreen from '../screens/Settings/Language/Language';
import { useTranslation } from 'react-i18next';
import NewsDetailsScreen from '../screens/NewsDetails/NewsDetails';


export type RootStackParamList = {
    Home: undefined;
    NewsScreen: undefined;
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
    return (
        <NavigationContainer theme={themes[theme]} >
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
