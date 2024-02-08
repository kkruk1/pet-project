import { Locator, Page } from '@playwright/test';

export default class InventoryPage {
  readonly page: Page;
  readonly inventoryTitle: Locator;
  readonly sideMenu: Locator;
  readonly logoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.inventoryTitle = page.locator('span[class="title"]');
    this.sideMenu = page.locator('#react-burger-menu-btn');
    this.logoutBtn = page.locator('#logout_sidebar_link');
  }
}
