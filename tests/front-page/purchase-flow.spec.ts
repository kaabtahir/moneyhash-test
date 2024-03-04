import { test } from '@playwright/test';
import { LandingPage } from '../../pages/LandingPage';
import { CheckoutPage } from '../../pages/CheckoutPage';


test.describe('Purchase Flow Tests', () => {
  let landingPage: LandingPage;
  let checkoutPage: CheckoutPage;

  test.beforeEach(async ({ page }) => {
    landingPage = new LandingPage(page);
    checkoutPage = new CheckoutPage(page);
    await landingPage.goto();
  });

  test('User purhcase a product', async () => {
    await landingPage.clickProduct()
    await landingPage.clickAddToBagButton();
    await landingPage.clickCartButton();
    await landingPage.clickCheckoutButton();
    await checkoutPage.clickNextStepButton();
    await checkoutPage.clickAddressNextStepButton();
    await checkoutPage.clickShippingMethodNextStepButton();
    await checkoutPage.clickCashOnDeliveryRadioButton();
    await checkoutPage.clickCompleteOrderButton();
    await checkoutPage.verifyMessage();
  });
});
