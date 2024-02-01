import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewScreen from './screens/News/News';
import SettingsScreen from './screens/Settings/Settings';
import NewsDetailsScreen from './screens/NewsDetails/NewsDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  News: undefined;
  Settings: undefined
  NewsDetails: {
    urlToImage: string,
    title: string, 
    description: string, 
    content: string
  };
};


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function NewsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="News" component={NewScreen} />
      <Stack.Screen name="NewsDetails" component={NewsDetailsScreen} />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="News" component={NewsStack} />
        <Tab.Screen name="Settings" component={SettingsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
