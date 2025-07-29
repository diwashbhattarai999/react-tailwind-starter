import { render, screen } from '@testing-library/react';

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '.';

describe('Card components', () => {
  it('renders Card with correct data-slot and class', () => {
    render(
      <Card className='custom-class' data-testid='card'>
        Hello Card
      </Card>
    );
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
    expect(card).toHaveAttribute('data-slot', 'card');
    expect(card).toHaveClass('custom-class');
    expect(card).toHaveTextContent('Hello Card');
  });

  it('renders CardHeader with correct data-slot', () => {
    render(<CardHeader className='header-class' data-testid='card-header' />);
    const header = screen.getByTestId('card-header');
    expect(header).toBeInTheDocument();
    expect(header).toHaveAttribute('data-slot', 'card-header');
    expect(header).toHaveClass('header-class');
  });

  it('renders CardTitle with correct data-slot', () => {
    render(<CardTitle data-testid='card-title'>Title Here</CardTitle>);
    const title = screen.getByTestId('card-title');
    expect(title).toBeInTheDocument();
    expect(title).toHaveAttribute('data-slot', 'card-title');
    expect(title).toHaveTextContent('Title Here');
  });

  it('renders CardDescription with correct data-slot', () => {
    render(<CardDescription data-testid='card-description'>Description text</CardDescription>);
    const desc = screen.getByTestId('card-description');
    expect(desc).toBeInTheDocument();
    expect(desc).toHaveAttribute('data-slot', 'card-description');
    expect(desc).toHaveTextContent('Description text');
  });

  it('renders CardAction with correct data-slot', () => {
    render(<CardAction className='action-class' data-testid='card-action' />);
    const action = screen.getByTestId('card-action');
    expect(action).toBeInTheDocument();
    expect(action).toHaveAttribute('data-slot', 'card-action');
    expect(action).toHaveClass('action-class');
  });

  it('renders CardContent with correct data-slot', () => {
    render(<CardContent className='content-class' data-testid='card-content' />);
    const content = screen.getByTestId('card-content');
    expect(content).toBeInTheDocument();
    expect(content).toHaveAttribute('data-slot', 'card-content');
    expect(content).toHaveClass('content-class');
  });

  it('renders CardFooter with correct data-slot', () => {
    render(<CardFooter className='footer-class' data-testid='card-footer' />);
    const footer = screen.getByTestId('card-footer');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveAttribute('data-slot', 'card-footer');
    expect(footer).toHaveClass('footer-class');
  });
});
