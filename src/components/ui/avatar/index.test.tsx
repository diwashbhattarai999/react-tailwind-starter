import { fireEvent, render, screen } from '@testing-library/react';

import { Avatar, AvatarFallback, AvatarImage } from '.';

describe('Avatar component', () => {
  it('renders Avatar root with data-slot', () => {
    render(
      <Avatar data-testid='avatar'>
        <AvatarImage alt='Profile' src='/profile.jpg' />
        <AvatarFallback>DB</AvatarFallback>
      </Avatar>
    );
    const root = screen.getByTestId('avatar');
    expect(root).toBeInTheDocument();
    expect(root).toHaveAttribute('data-slot', 'avatar');
  });

  it.skip('renders AvatarImage correctly after load', () => {
    render(
      <Avatar data-testid='avatar-image'>
        <AvatarImage alt='Profile' data-testid='avatar-image' src='/src/assets/avatar.png' />
        <AvatarFallback>DB</AvatarFallback>
      </Avatar>
    );

    const image = screen.getByTestId('avatar-image');
    fireEvent.load(image);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src');
    expect(image.getAttribute('src')).toMatch(/avatar\.png$/);
    expect(image).toHaveAttribute('data-slot', 'avatar-image');
  });

  it('renders AvatarFallback with fallback content', () => {
    render(
      <Avatar>
        <AvatarFallback data-testid='avatar-fallback'>DB</AvatarFallback>
      </Avatar>
    );
    const fallback = screen.getByTestId('avatar-fallback');
    expect(fallback).toBeInTheDocument();
    expect(fallback).toHaveTextContent('DB');
    expect(fallback).toHaveAttribute('data-slot', 'avatar-fallback');
  });
});
