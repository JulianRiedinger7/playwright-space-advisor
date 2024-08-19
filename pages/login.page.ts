import { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginBtn: Locator;
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#login').locator('input[type="text"]');
    this.passwordInput = page.locator('#login').locator('input[type="password"]');
    this.loginBtn = page.locator('button[form="login"]');
  }

  async open() {
    await this.page.goto('/login');
  }

  async enterUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickLoginBtn() {
    await this.loginBtn.click();
  }

  async login(username: string, password: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLoginBtn();
  }
}
