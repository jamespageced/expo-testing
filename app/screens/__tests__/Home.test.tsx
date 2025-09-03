import React from 'react';
import { render } from '@testing-library/react-native';
import { Home } from '@app/screens';

describe('<Home />', () => {
  test('Text renders correctly on Home', () => {
    const text = 'Welcome';
    const { getByText } = render(<Home />);
    getByText(text);
  });
});
