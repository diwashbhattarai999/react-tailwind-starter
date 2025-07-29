import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Button } from '.';

describe('Button component', () => {
  it('renders with default variant and size', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('bg-primary'); // default variant background
    expect(button).toHaveClass('h-10'); // default size height
  });

  it('applies correct variant and size classes', () => {
    render(
      <Button size='sm' variant='destructive'>
        Delete
      </Button>
    );
    const button = screen.getByRole('button', { name: /delete/i });
    expect(button).toHaveClass('bg-destructive');
    expect(button).toHaveClass('h-9');
  });

  it('renders as child component when asChild is true', () => {
    render(
      <Button asChild>
        <a data-testid='child-link' href='#'>
          Link Button
        </a>
      </Button>
    );
    const link = screen.getByTestId('child-link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveClass('inline-flex'); // buttonVariants applies inline-flex
  });

  it('disables button and shows loader when isLoading is true', () => {
    render(<Button isLoading>Submit</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();

    const loader = button.querySelector('svg');
    expect(loader).toBeInTheDocument();
    expect(loader).toHaveClass('animate-spin');

    // Loading text visible
    expect(button).toHaveTextContent('Loading...');
  });

  it('shows custom loadingText and loaderClassName', () => {
    render(
      <Button isLoading loaderClassName='custom-loader' loadingText='Saving...'>
        Save
      </Button>
    );
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    expect(button).toHaveTextContent('Saving...');
    const loader = button.querySelector('svg');
    expect(loader).toHaveClass('custom-loader');
  });

  it('passes other button props and handles click', async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });
    await userEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disables button if disabled prop is true, regardless of isLoading', () => {
    render(
      <Button disabled isLoading>
        Disabled Button
      </Button>
    );
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
});
