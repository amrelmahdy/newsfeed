import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList, } from '..';
import NewsScreen from '../../screens/News/News';
import NewsDetailsScreen from '../../screens/NewsDetails/NewsDetails';
import SettingsScreen from '../../screens/Settings/Settings';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator<RootStackParamList>();

export function NewsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NewsScreen" options={{ title: 'News' }} component={NewsScreen} />
      <Stack.Screen options={{ title: 'Article Details' }} name="NewsDetailsScreen" component={NewsDetailsScreen} />
    </Stack.Navigator>
  );
}

export function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
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