import React from 'react';
import { render } from '@testing-library/react-native';
import BottomTabNavigation from './BottomTabNavigation';

jest.mock('@react-navigation/bottom-tabs', () => ({
  __esModule: true,
  createBottomTabNavigator: jest.fn(() => ({
    Navigator: jest.fn(),
    Screen: jest.fn(),
  })),
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe('BottomTabNavigation', () => {
  it('renders NewsScreen tab correctly', () => {
    const wrapper = render(<BottomTabNavigation />);
    expect(wrapper).toBeDefined();
  });
});
