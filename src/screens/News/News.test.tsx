import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import NewsScreen from './News';
import { ThemeProvider } from '../../theme/ThemeContext';
import { getAllNews } from '../../api';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

jest.mock('@react-navigation/native', () => ({
  useTheme: () => ({
    colors: {
      textColor: 'black',
      border: 'gray',
      lightTextColor: 'gray',
      primary: 'blue',
      card: 'white',
      inputBackgroundColor: 'white',
    }
  })
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: jest.fn(),
    i18n: { language: 'en' },
  }),
}));

jest.mock('../../api', () => ({
  getAllNews: jest.fn().mockResolvedValue([]),
}));

const route: RouteProp<RootStackParamList, 'NewsScreen'> = {
    key: 'unique-key',
    name: 'NewsScreen',
    params: undefined,
};


const navigation: BottomTabNavigationProp<RootStackParamList, "NewsScreen"> = {
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
describe('NewsScreen', () => {

  it('renders correctly with url param passed', async () => {
    const { getByTestId, debug } = render(
      <ThemeProvider>
        <NewsScreen navigation={navigation} route={{...route, params: { url: '"newsfeed://home/7' }}} />
      </ThemeProvider>
    );
    debug()
    const searchInputContainer = getByTestId('news_search_container');
    expect(searchInputContainer).toBeTruthy();
  });

  it('renders search input correctly', async () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <NewsScreen navigation={navigation} route={route} />
      </ThemeProvider>
    );
    const searchInput = getByTestId('news_search_input');
    expect(searchInput).toBeTruthy();
  });



  it('fetches news data when mounted', async () => {
    render(
      <ThemeProvider>
        <NewsScreen navigation={navigation} route={route} />
      </ThemeProvider>
    );
    expect(getAllNews).toHaveBeenCalledWith('apple', 'en');
  });

  it('updates search query correctly', async () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <NewsScreen navigation={navigation} route={route} />
      </ThemeProvider>
    );
    const searchInput = getByTestId('news_search_input');
    fireEvent.changeText(searchInput, 'new query');
    expect(searchInput.props.value).toBe('new query');
  });
});
