/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';

// Note: import explicitly to use the types shipped with jest.
import { it } from '@jest/globals';
import { I18nextProvider } from 'react-i18next';
import i18n from './../__mocks__/i18n';
import { render } from '@testing-library/react-native';

it('renders correctlysss', () => {
  render(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  );
});
