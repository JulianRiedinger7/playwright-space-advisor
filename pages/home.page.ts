import { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly welcomeMessage: Locator;
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    this.welcomeMessage = page.locator('.mui-dropdown > button');
  }

  async open() {
    await this.page.goto('');
  }
}
