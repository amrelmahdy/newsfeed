import React from 'react';
import { render } from '@testing-library/react-native';
import NewsDetailsScreen from './NewsDetails';
import { RootStackParamList } from '../../navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

describe('NewsDetailsScreen component', () => {
    it('renders correctly with provided props', () => {
        const routeParams = {
            title: 'Test Title',
            author: 'Test Author',
            description: 'Test Description',
            content: 'Test Content',
            urlToImage: 'https://example.com/image.jpg',
            publishedAt: '2022-01-01',
        };

        const route: RouteProp<RootStackParamList, 'NewsDetailsScreen'> = {
            key: 'unique-key', // You can provide a unique key
            name: 'NewsDetailsScreen',
            params: routeParams,
        };

        const navigation: NativeStackNavigationProp<RootStackParamList, 'NewsDetailsScreen'> = {
            navigate: jest.fn(),
            goBack: jest.fn(),
            dispatch: jest.fn(),
            reset: jest.fn(),
            isFocused: jest.fn(),
            canGoBack: jest.fn(),
            getId: jest.fn(),
            getParent:  jest.fn(),
            getState:  jest.fn(),
            pop: jest.fn(),
            popToTop: jest.fn(),
            push: jest.fn(),
            replace: jest.fn(),
            addListener: jest.fn(),
            removeListener: jest.fn(),
            setOptions: jest.fn(),
            setParams: jest.fn(),
        };


        const { getByText, getByTestId, debug } = render(
            <NewsDetailsScreen navigation={navigation} route={route} />
        );
        debug()
        // Assert that each piece of content is rendered correctly
        expect(getByText('Test Title')).toBeTruthy();
        expect(getByText('Test Author')).toBeTruthy();
        expect(getByText('Test Description')).toBeTruthy();
        expect(getByText('Test Content')).toBeTruthy();
        const image = getByTestId('news-image');
        expect(image.props.source.uri).toBe('https://example.com/image.jpg');
        expect(getByText('2022-01-01')).toBeTruthy();
    });
});
