import * as React from 'react';
import { render } from '@testing-library/react';
import { SpinButton } from './SpinButton';
import { isConformant } from '../../common/isConformant';

describe('SpinButton', () => {
  isConformant({
    Component: SpinButton,
    displayName: 'SpinButton',
  });

  // TODO add more tests here, and create visual regression tests in /apps/vr-tests

  it('renders a default state', () => {
    const result = render(<SpinButton />);
    expect(result.container).toMatchSnapshot();
  });
});
