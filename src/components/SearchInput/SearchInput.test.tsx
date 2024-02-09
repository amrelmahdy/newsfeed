import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SearchInput from './SearchInput';

describe('SearchInput component', () => {
  it('renders correctly with given props', () => {
    const searchQuery = 'test query';
    const placeholder = 'Test Placeholder';

    const { getByPlaceholderText } = render(
      <SearchInput
        searchQuery={searchQuery}
        setSearchQuery={() => {}}
        handleSearch={() => {}}
        placeholder={placeholder}
      />
    );

    const inputElement = getByPlaceholderText(placeholder);
    expect(inputElement).toBeDefined();
    expect(inputElement.props.value).toBe(searchQuery);
  });

  it('calls setSearchQuery function when input changes', () => {
    const setSearchQueryMock = jest.fn();
    const { getByPlaceholderText } = render(
      <SearchInput
        searchQuery=""
        setSearchQuery={setSearchQueryMock}
        handleSearch={() => {}}
        placeholder="Test Placeholder"
      />
    );

    const inputElement = getByPlaceholderText('Test Placeholder');
    fireEvent.changeText(inputElement, 'new query');

    expect(setSearchQueryMock).toHaveBeenCalledWith('new query');
  });
});
