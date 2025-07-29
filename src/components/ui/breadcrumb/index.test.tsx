import { render, screen } from '@testing-library/react';

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '.';

describe('Breadcrumb components', () => {
  it('renders Breadcrumb with aria-label and data-slot', () => {
    render(<Breadcrumb data-testid='breadcrumb' />);
    const nav = screen.getByTestId('breadcrumb');
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveAttribute('aria-label', 'breadcrumb');
    expect(nav).toHaveAttribute('data-slot', 'breadcrumb');
  });

  it('renders BreadcrumbList with default classes and data-slot', () => {
    render(<BreadcrumbList data-testid='breadcrumb-list' />);
    const ol = screen.getByTestId('breadcrumb-list');
    expect(ol).toBeInTheDocument();
    expect(ol).toHaveAttribute('data-slot', 'breadcrumb-list');
    expect(ol.className).toMatch(/flex/);
  });

  it('renders BreadcrumbItem with data-slot and inline-flex class', () => {
    render(<BreadcrumbItem data-testid='breadcrumb-item' />);
    const li = screen.getByTestId('breadcrumb-item');
    expect(li).toBeInTheDocument();
    expect(li).toHaveAttribute('data-slot', 'breadcrumb-item');
    expect(li.className).toMatch(/inline-flex/);
  });

  it('renders BreadcrumbLink with anchor tag and data-slot', () => {
    render(
      <BreadcrumbLink data-testid='breadcrumb-link' href='#'>
        Link
      </BreadcrumbLink>
    );
    const link = screen.getByTestId('breadcrumb-link');
    expect(link.tagName).toBe('A');
    expect(link).toHaveAttribute('href', '#');
    expect(link).toHaveAttribute('data-slot', 'breadcrumb-link');
    expect(link).toHaveTextContent('Link');
  });

  it('renders BreadcrumbPage as span with aria-current and role link', () => {
    render(<BreadcrumbPage data-testid='breadcrumb-page'>Page</BreadcrumbPage>);
    const span = screen.getByTestId('breadcrumb-page');
    expect(span.tagName).toBe('SPAN');
    expect(span).toHaveAttribute('aria-current', 'page');
    expect(span).toHaveAttribute('aria-disabled', 'true');
    expect(span).toHaveAttribute('role', 'link');
    expect(span).toHaveTextContent('Page');
  });

  it('renders BreadcrumbSeparator with default ChevronRight icon and data-slot', () => {
    render(<BreadcrumbSeparator data-testid='breadcrumb-separator' />);
    const separator = screen.getByTestId('breadcrumb-separator');
    expect(separator).toBeInTheDocument();
    expect(separator).toHaveAttribute('aria-hidden', 'true');
    expect(separator).toHaveAttribute('role', 'presentation');
    expect(separator).toHaveAttribute('data-slot', 'breadcrumb-separator');
    // Check if SVG icon (ChevronRight) is rendered inside
    expect(separator.querySelector('svg')).toBeInTheDocument();
  });

  it('renders BreadcrumbEllipsis with MoreHorizontal icon and data-slot', () => {
    render(<BreadcrumbEllipsis data-testid='breadcrumb-ellipsis' />);
    const ellipsis = screen.getByTestId('breadcrumb-ellipsis');
    expect(ellipsis).toBeInTheDocument();
    expect(ellipsis).toHaveAttribute('aria-hidden', 'true');
    expect(ellipsis).toHaveAttribute('role', 'presentation');
    expect(ellipsis).toHaveAttribute('data-slot', 'breadcrumb-ellipsis');
    // Check if MoreHorizontal SVG icon is present
    expect(ellipsis.querySelector('svg')).toBeInTheDocument();
    // Check if screen reader only text "More" exists
    expect(ellipsis).toHaveTextContent('More');
  });
});
