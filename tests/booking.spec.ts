import test, { expect } from '@playwright/test';
import { CheckoutPage, DestinationPage } from '../pages';
import checkoutInformation from '../data/checkout.json';

test.describe('Booking Suite', () => {
  let destinationPage: DestinationPage;
  let checkoutPage: CheckoutPage;

  test.beforeEach(async ({ page }) => {
    destinationPage = new DestinationPage(page);
    await destinationPage.open();
  });

  test('Not allowed to checkout without agreeing terms & conditions', async ({ page }) => {
    await test.step('When I book the first blue planet', async () => {
      await destinationPage.selectPlanetColor('blue');
      await destinationPage.bookFirstPlanet();
    });

    await test.step('And I complete the checkout form with valid information', async () => {
      checkoutPage = new CheckoutPage(page);

      await checkoutPage.enterName(checkoutInformation.name);
      await checkoutPage.enterEmail(checkoutInformation.email);
      await checkoutPage.enterSocialSecurityNumber(checkoutInformation.socialSecurityNumber);
      await checkoutPage.enterPhone(checkoutInformation.phone);
    });

    await test.step('And I click the Pay Now button', async () => {
      await checkoutPage.clickPayNowBtn();
    });

    await test.step('Then I should see a popup message to agree terms & conditions', async () => {
      await expect(checkoutPage.popupMessage).toBeVisible();
      await expect(checkoutPage.popupMessage).toContainText(
        'You must agree to the terms and conditions to complete your purchase.'
      );
    });
  });
});
