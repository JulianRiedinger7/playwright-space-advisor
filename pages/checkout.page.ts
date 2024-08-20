import { Locator, Page } from '@playwright/test';

export class CheckoutPage {
  readonly nameInput: Locator;
  readonly emailInput: Locator;
  readonly socialSecurityInput: Locator;
  readonly phoneInput: Locator;
  readonly payNowBtn: Locator;
  readonly popupMessage: Locator;
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.locator('form').locator('input[type="text"]').first();
    this.emailInput = page.locator('form').locator('input[type="email"]');
    this.socialSecurityInput = page.locator('form').locator('input[type="text"]').last();
    this.phoneInput = page.locator('form').locator('input[type="tel"]');
    this.payNowBtn = page.getByRole('button', { name: 'PAY NOW' });
    this.popupMessage = page.locator('section[role = "body"]');
  }

  async enterName(name: string) {
    await this.nameInput.fill(name);
  }

  async enterEmail(email: string) {
    await this.emailInput.fill(email);
  }

  async enterSocialSecurityNumber(socialSecurityNumber: string) {
    await this.socialSecurityInput.fill(socialSecurityNumber);
  }

  async enterPhone(phone: string) {
    await this.phoneInput.fill(phone);
  }

  async clickPayNowBtn() {
    await this.payNowBtn.click();
  }
}
