import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RadioButton from './RadioButton';
import { act } from 'react-test-renderer';

describe('RadioButton Component', () => {
  const data = [
    { key: 'option1', text: 'Option 1' },
    { key: 'option2', text: 'Option 2' },
    { key: 'option3', text: 'Option 3' },
  ];

  it('renders radio buttons with provided data', () => {
    const { getByText } = render(<RadioButton data={data} defaultValue='option1' />);
    data.forEach(option => {
      expect(getByText(option.text)).toBeTruthy();
    });
  });


  it('selects an option when clicked', () => {
    const onSelectButton = jest.fn();
    const { getByTestId } = render(
      <RadioButton data={data} onSelectButton={onSelectButton} />
    );

    const optionToSelect = data[1];
    act(() => {
      fireEvent.press(getByTestId(`radio-button-${optionToSelect.key}`));
    });

    expect(onSelectButton).toHaveBeenCalledWith(optionToSelect.key);
  });

  it('renders selected option correctly', () => {
    const defaultValue = 'option2';
    const { getByTestId } = render(
      <RadioButton data={data} defaultValue={defaultValue} />
    );

    const selectedRadio = getByTestId('selected-radio-option2');
    expect(selectedRadio).toBeTruthy();
  });
});
