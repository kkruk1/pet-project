import { test, expect } from '@playwright/test';
import LoginPage from 'pages/LoginPage';

test.describe('Login tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await page.goto('/', { waitUntil: 'networkidle' });
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Login test - happy path', async ({ page }) => {
    await loginPage.login(process.env.LOGIN_STANDARD_USER, process.env.PASSWORD);
    await expect(await page.url()).toBe('https://www.saucedemo.com/inventory.html');
    await expect(await page.locator('span[class="title"]')).toBeVisible();
  });

  test('Login test - incorrect password', async ({ page }) => {
    const incorrectPassword = 'incorrectPassword';
    await loginPage.login(process.env.LOGIN_STANDARD_USER, incorrectPassword);
    await expect(await page.locator('text=Epic sadface: Username and password do not match any user in this service')).toBeVisible();  
  });
});