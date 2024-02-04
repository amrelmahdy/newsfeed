import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewsScreen from '../../screens/News/News';
import SettingsScreen from '../../screens/Settings/Settings';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  const { t } = useTranslation();

  const tabs = [
    { name: t("news"), component: NewsScreen, iconName: 'newspaper-outline' },
    { name: t('settings'), component: SettingsScreen, iconName: 'settings' },
  ];

  return (
    <Tab.Navigator screenOptions={{ headerShown: true }}>
      {tabs.map((tab, index) => (
        <Tab.Screen
          key={index}
          name={tab.name}
          component={tab.component}
          options={{

            tabBarIcon: ({ color, size }) => (
              <Icon name={tab.iconName} size={size} color={color} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export default BottomTabNavigation