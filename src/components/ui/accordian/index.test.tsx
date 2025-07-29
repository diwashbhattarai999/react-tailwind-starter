import { describe, expect, it } from 'vitest';

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '.';

describe('Accordion Component', () => {
  it('renders and toggles accordion content on trigger click', async () => {
    const user = userEvent.setup();

    render(
      <Accordion collapsible type='single'>
        <AccordionItem value='item-1'>
          <AccordionTrigger>Click Me</AccordionTrigger>
          <AccordionContent>
            <p>Accordion Content</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger = screen.getByRole('button', { name: /click me/i });

    // Click to expand the accordion
    await user.click(trigger);

    // Now content should appear
    const content = await screen.findByText(/accordion content/i);

    expect(content).toBeVisible();

    // Collapse again
    await user.click(trigger);

    await waitFor(() => {
      expect(content).not.toBeVisible();
    });
  });
});
