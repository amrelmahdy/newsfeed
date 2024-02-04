import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewsScreen from '../../screens/News/News';
import SettingsScreen from '../../screens/Settings/Settings';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator();

function BottomTabNavigation() {
  const { t } = useTranslation();

  const tabs = [
    { name: t("news"), component: NewsScreen, iconName: 'News' },
    { name: t('settings'), component: SettingsScreen, iconName: 'cog' },
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
              <Icon name='cog' size={size} color={color} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

export default BottomTabNavigation