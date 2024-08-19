import test, { expect } from '@playwright/test';
import { LoginPage, HomePage } from '../pages';
import credentials from '../data/credentials.json';

test.describe('Login Suite', () => {
  let loginPage: LoginPage;
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.open();
  });

  test('Correct login with valid credentials', async ({ page }) => {
    await test.step('When I complete the login with valid credentials', async () => {
      await loginPage.login(credentials.username, credentials.password);
    });

    await test.step('Then I should navigate to the home page', async () => {
      homePage = new HomePage(page);
      await expect(homePage.page).not.toHaveURL(/login/);
      await expect(homePage.welcomeMessage).toHaveText('Hello, John');
    });
  });
});
