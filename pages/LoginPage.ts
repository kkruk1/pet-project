import { Locator, Page } from '@playwright/test';

export default class LoginPage {
  readonly page: Page;
  readonly loginInput: Locator;
  readonly passwordInput: Locator;
  readonly loginBtn: Locator;
  readonly inventoryTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginInput = page.locator('id=user-name'); // or page.locator('input[id="user-name"]')
    this.passwordInput = page.locator('id=password');
    this.loginBtn = page.locator('[data-test="login-button"]');
    this.inventoryTitle = page.locator('span[class="title"]');
  }

  async login(username: string, password: string) {
    await this.loginInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
    // you could also wait for response from the login endpoint, depends whether the validation is BE or FE (eg. too short password)
  }
}
