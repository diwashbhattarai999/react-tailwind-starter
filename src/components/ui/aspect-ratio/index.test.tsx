import { render } from '@testing-library/react';

import { AspectRatio } from '.';

describe('AspectRatio', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(
      <AspectRatio data-testid='aspect-ratio'>
        <img alt='example' src='test.jpg' />
      </AspectRatio>
    );

    const ratio = getByTestId('aspect-ratio');
    expect(ratio).toBeInTheDocument();
  });

  it('applies correct slot data attribute', () => {
    const { getByTestId } = render(
      <AspectRatio data-testid='aspect-ratio'>
        <div>Content</div>
      </AspectRatio>
    );

    const ratio = getByTestId('aspect-ratio');
    expect(ratio).toHaveAttribute('data-slot', 'aspect-ratio');
  });
});
