import { test, expect } from '@playwright/test';
import InventoryPage from 'pages/InventoryPage';
import LoginPage from 'pages/LoginPage';

test.describe('Login tests', () => {
  let loginPage: LoginPage;
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);

    await page.goto('/', { waitUntil: 'networkidle' });
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Login - happy path', async ({ page }) => {
    await expect(page).toHaveTitle('Swag Labs');
    await loginPage.login(process.env.LOGIN_STANDARD_USER, process.env.PASSWORD);
    await expect(page).toHaveURL(`/inventory.html`);
    await expect(await inventoryPage.inventoryTitle).toBeVisible();
  });

  test('Login - incorrect login ', async ({ page }) => {
    await expect(page).toHaveTitle('Swag Labs');
    const incorrectLogin = 'whatever';

    await loginPage.login(incorrectLogin, process.env.PASSWORD);
    await expect(await loginPage.unsuccessfulLoginErrMsg).toBeVisible();
    await expect(await inventoryPage.inventoryTitle).toBeHidden();
    await expect(page.url()).toBe(process.env.BASE_URL);
    await expect(page).toHaveScreenshot();
  });

  test('Login - incorrect password', async ({ page }) => {
    await expect(page).toHaveTitle('Swag Labs');
    const incorrectPassword = 'incorrectPassword';

    await loginPage.login(process.env.LOGIN_STANDARD_USER, incorrectPassword);
    await expect(await loginPage.unsuccessfulLoginErrMsg).toBeVisible();
    await expect(await inventoryPage.inventoryTitle).toBeHidden();
    await expect(page.url()).toBe(process.env.BASE_URL);
  });

  test('Logout', async ({ page }) => {
    await loginPage.login(process.env.LOGIN_STANDARD_USER, process.env.PASSWORD);
    await expect(page).toHaveURL(`/inventory.html`);
    await expect(await inventoryPage.inventoryTitle).toBeVisible();
    await inventoryPage.sideMenu.click();
    await expect(await inventoryPage.logoutBtn).toBeVisible();
    await inventoryPage.logoutBtn.click();
    await expect(await inventoryPage.inventoryTitle).toBeHidden();
    await expect(page.url()).toBe(process.env.BASE_URL);
  });
});
