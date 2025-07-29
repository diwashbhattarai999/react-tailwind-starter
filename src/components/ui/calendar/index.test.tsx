import { render, screen } from '@testing-library/react';

import { Calendar } from '.';

describe('Calendar component', () => {
  it('renders the calendar root with data-slot', () => {
    render(<Calendar />);
    // Since Root component has data-slot=calendar on a div, query by data attribute:
    const calendarDiv = document.querySelector('[data-slot="calendar"]');
    expect(calendarDiv).toBeInTheDocument();
  });

  it('renders navigation buttons with correct aria-disabled attribute', () => {
    render(<Calendar />);
    const prevButton = document.querySelector('.rdp-button_previous');
    const nextButton = document.querySelector('.rdp-button_next');
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();

    // Initially enabled
    expect(prevButton).not.toHaveAttribute('aria-disabled', 'true');
    expect(nextButton).not.toHaveAttribute('aria-disabled', 'true');
  });

  it.skip('renders day buttons with custom styles and data attributes', async () => {
    render(<Calendar month={new Date()} />);

    // Wait for all buttons to appear asynchronously
    const allButtons = await screen.findAllByRole('button');

    // Filter those with data-day attribute
    const dayButtons = allButtons.filter(button => button.hasAttribute('data-day'));

    expect(dayButtons.length).toBeGreaterThan(0);

    dayButtons.forEach(button => {
      expect(button).toHaveClass('inline-flex');
      expect(button).toHaveAttribute('data-day');
    });
  });

  it('renders custom Chevron icons', () => {
    render(<Calendar />);
    // The chevrons are lucide-react icons, look for svg elements with proper class
    const leftChevron = document.querySelector('.rdp-button_previous svg');
    const rightChevron = document.querySelector('.rdp-button_next svg');

    expect(leftChevron).toBeInTheDocument();
    expect(rightChevron).toBeInTheDocument();
  });
});
