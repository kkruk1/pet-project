import { Locator, Page } from '@playwright/test';

export default class MainPage {
  readonly page: Page;
  readonly locatorFirst: Locator;

  constructor(page: Page) {
    this.page = page;
    this.locatorFirst = page.locator('id=example');
  }
}
