import React from 'react';
import { render } from '@testing-library/react-native';
import SettingsScreen from './Settings';
import { RootStackParamList } from '../../navigation';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';

const navigation: BottomTabNavigationProp<RootStackParamList, "SettingsScreen"> = {
  addListener: jest.fn(),
  canGoBack: jest.fn(),
  dispatch: jest.fn(),
  getId: jest.fn(),
  navigate: jest.fn(),
  goBack: jest.fn(),
  reset: jest.fn(),
  isFocused: jest.fn(),
  getParent:  jest.fn(),
  getState:  jest.fn(),
  removeListener: jest.fn(),
  setOptions: jest.fn(),
  setParams: jest.fn(),
  jumpTo:  jest.fn(),
}

const route: RouteProp<RootStackParamList, 'SettingsScreen'> = {
  key: 'unique-key',
  name: 'SettingsScreen',
  params: undefined,
};

describe('SettingsScreen component', () => {
  it('renders correctly', () => {
    const { getByTestId, debug } = render(<SettingsScreen route={route} navigation={navigation} />);
    debug()
    expect(getByTestId('appearance')).toBeTruthy();
    expect(getByTestId('lang')).toBeTruthy();
  });

});
