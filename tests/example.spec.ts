import { test, expect } from '@playwright/test';

test.describe('Landing Page', () => {
  test('should have the correct title', async ({ page }) => {
    await page.goto('http://localhost:5173');

    await expect(page).toHaveTitle('Foundation React');
  });
});
