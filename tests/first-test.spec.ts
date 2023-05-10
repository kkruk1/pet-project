import { test, expect } from '@playwright/test';
import LoginPage from 'pages/LoginPage';

test.describe('describe block', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto('/', { waitUntil: 'networkidle' });
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('first test', async ({ page }) => {
    //
  });

  test('second test', async ({ page }) => {
    //
  });
});