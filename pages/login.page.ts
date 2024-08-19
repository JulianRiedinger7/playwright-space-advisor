import { Locator, Page } from '@playwright/test';

export class LoginPage {
  readonly usernameInput: Locator;
  readonly usernameInputError: Locator;
  readonly passwordInput: Locator;
  readonly passwordInputError: Locator;
  readonly loginBtn: Locator;
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#login').locator('input[type="text"]');
    this.usernameInputError = page.locator('#login > div').first().locator('span').last();
    this.passwordInput = page.locator('#login').locator('input[type="password"]');
    this.passwordInputError = page.locator('#login > div').last().locator('span').last();
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
