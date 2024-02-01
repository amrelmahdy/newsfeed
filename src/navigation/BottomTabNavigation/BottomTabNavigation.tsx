import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList, } from '..';
import NewsScreen from '../../screens/News/News';
import NewsDetailsScreen from '../../screens/NewsDetails/NewsDetails';
import SettingsScreen from '../../screens/Settings/Settings';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppearanceScreen from '../../screens/Settings/Appearance/Appearance';
import LanguageScreen from '../../screens/Settings/Language/Language';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator<RootStackParamList>();

export function NewsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NewsScreen" options={{ title: 'News' }} component={NewsScreen} />
      <Stack.Screen name="NewsDetailsScreen" component={NewsDetailsScreen} options={{ title: 'Article Details' }} />
    </Stack.Navigator>
  );
}

export function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ title: 'Settings' }} />
      <Stack.Screen name="AppearanceScreen" component={AppearanceScreen} options={{ title: 'Appearance' }} />
      <Stack.Screen name="LanguageScreen" component={LanguageScreen} options={{ title: 'Language' }} />
    </Stack.Navigator>
  );
}


function BottomTabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="News" component={NewsStack} />
      <Tab.Screen name="Settings" component={SettingsStack} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigation