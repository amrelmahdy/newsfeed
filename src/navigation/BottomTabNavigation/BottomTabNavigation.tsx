import React from 'react';
import {  createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewsScreen from '../../screens/News/News';
import SettingsScreen from '../../screens/Settings/Settings';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';

export type BottomTabParamList = {
  NewsScreen: undefined;
  SettingsScreen: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

function BottomTabNavigation() {
  const { t } = useTranslation();

  const tabs = [
    { screenName: t("news"), screenComponent: NewsScreen, iconName: 'newspaper-outline' },
    { screenName: t('settings'), screenComponent: SettingsScreen, iconName: 'settings' },
  ];

  return (
    <Tab.Navigator screenOptions={{ headerShown: true }}>
      <Tab.Screen
        name='NewsScreen'
        component={NewsScreen}
        options={{
          title: t("news"),
          tabBarIcon: ({ color, size }) => (
            <Icon name='newspaper-outline' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='SettingsScreen'
        component={SettingsScreen}
        options={{
          title: t("settings"),
          tabBarIcon: ({ color, size }) => (
            <Icon name='newspaper-outline' size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigation