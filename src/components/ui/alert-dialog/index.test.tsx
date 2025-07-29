import { describe, expect, it } from 'vitest';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '.';

describe('AlertDialog Component', () => {
  it('opens dialog and displays content on trigger click', async () => {
    const user = userEvent.setup();

    render(
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button>Open Alert</button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>This action cannot be undone.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Confirm</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );

    // Trigger should be in the document
    const trigger = screen.getByRole('button', { name: /open alert/i });
    expect(trigger).toBeInTheDocument();

    // Click trigger
    await user.click(trigger);

    // Dialog content should appear
    expect(await screen.findByText(/are you absolutely sure/i)).toBeInTheDocument();
    expect(screen.getByText(/this action cannot be undone/i)).toBeInTheDocument();

    // Check for buttons
    expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /confirm/i })).toBeInTheDocument();
  });
});
