import { render } from '@testing-library/react';

import UiSideNav from './ui-side-nav';

describe('UiSideNav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiSideNav />);
    expect(baseElement).toBeTruthy();
  });
});
