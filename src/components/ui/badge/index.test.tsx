import { render, screen } from '@testing-library/react';

import { Badge } from '.';

describe('Badge component', () => {
  it('renders with default variant and data-slot attribute', () => {
    render(<Badge data-testid='badge'>Default Badge</Badge>);
    const badge = screen.getByTestId('badge');
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveTextContent('Default Badge');
    expect(badge).toHaveAttribute('data-slot', 'badge');
    // Default variant class check (at least contains 'bg-primary' or similar)
    expect(badge.className).toMatch(/bg-primary/);
  });

  it('renders with secondary variant class', () => {
    render(
      <Badge data-testid='badge-secondary' variant='secondary'>
        Secondary Badge
      </Badge>
    );
    const badge = screen.getByTestId('badge-secondary');
    expect(badge).toBeInTheDocument();
    expect(badge.className).toMatch(/bg-secondary/);
  });

  it('renders as a child element when asChild is true', () => {
    render(
      <Badge asChild data-testid='badge-as-child'>
        <button>Click me</button>
      </Badge>
    );
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('data-slot', 'badge');
  });
});
