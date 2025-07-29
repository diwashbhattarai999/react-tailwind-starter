import { render, screen } from '@testing-library/react';

import { Alert, AlertDescription, AlertTitle } from '.';

describe('Alert component', () => {
  it('renders default alert variant with title and description', () => {
    render(
      <Alert>
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>This is an alert message</AlertDescription>
      </Alert>
    );

    const alert = screen.getByRole('alert');
    expect(alert).toBeInTheDocument();
    expect(screen.getByText('Info')).toHaveAttribute('data-slot', 'alert-title');
    expect(screen.getByText('This is an alert message')).toHaveAttribute(
      'data-slot',
      'alert-description'
    );
  });

  it('renders destructive variant correctly', () => {
    render(
      <Alert variant='destructive'>
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Something went wrong</AlertDescription>
      </Alert>
    );

    const alert = screen.getByRole('alert');
    expect(alert).toHaveClass('text-destructive');
    expect(screen.getByText('Error')).toBeInTheDocument();
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });
});
