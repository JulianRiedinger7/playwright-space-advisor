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

  test('Incorrect login with empty credentials', async ({ page }) => {
    await test.step('When I login with empty credentials', async () => {
      await loginPage.clickLoginBtn();
    });

    await test.step('Then I should see the username and password field error messages', async () => {
      await expect(loginPage.page).toHaveURL(/login/);
      await expect(loginPage.usernameInputError).toBeVisible();
      await expect(loginPage.passwordInputError).toBeVisible();
      await expect(loginPage.usernameInputError).toHaveText('Name is a required field.');
      await expect(loginPage.passwordInputError).toHaveText('Password is a required field.');
    });
  });

  test('Incorrect login with empty password', async ({ page }) => {
    await test.step('When I login with empty password', async () => {
      await loginPage.enterUsername(credentials.username);
      await loginPage.clickLoginBtn();
    });

    await test.step('Then I should see the password field error message', async () => {
      await expect(loginPage.page).toHaveURL(/login/);
      await expect(loginPage.usernameInputError).not.toBeVisible();
      await expect(loginPage.passwordInputError).toBeVisible();
      await expect(loginPage.passwordInputError).toHaveText('Password is a required field.');
    });
  });

  test('Incorrect login with empty username', async ({ page }) => {
    await test.step('When I login with empty username', async () => {
      await loginPage.enterPassword(credentials.password);
      await loginPage.clickLoginBtn();
    });

    await test.step('Then I should see the username field error message', async () => {
      await expect(loginPage.page).toHaveURL(/login/);
      await expect(loginPage.passwordInputError).not.toBeVisible();
      await expect(loginPage.usernameInputError).toBeVisible();
      await expect(loginPage.usernameInputError).toHaveText('Name is a required field.');
    });
  });
});
