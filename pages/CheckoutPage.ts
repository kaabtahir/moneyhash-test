import { test, expect, Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutPage extends BasePage {
  readonly checkout: Locator;
  readonly nextStep: Locator;
  readonly addressNextStep: Locator;
  readonly shippingMethodNextStep: Locator;
  readonly cashOnDelivery: Locator;
  readonly completeOrderButton: Locator;
  readonly messageHeading: Locator;

  constructor(page: Page) {
    super(page);
    this.checkout = page.getByRole('link', { name: 'Checkout' });
    this.nextStep = page.getByRole('button', { name: 'Next Step' });
    this.addressNextStep = page.getByLabel('02.Address').getByRole('button', { name: 'Next Step' })
    this.shippingMethodNextStep = page.getByLabel('03.Shipping Method').getByRole('button', { name: 'Next Step' })
    this.cashOnDelivery = page.locator('#CASH_ON_DELIVERY')
    this.messageHeading = page.getByText('It\'s on the way!')
    this.completeOrderButton = page.getByRole('link', { name: 'Complete Order' })

  }
  async clickCheckoutButton() {
    await test.step(`Click on the checkout Button`, async () => {
      await this.checkout.click();
    });
  }

  async clickNextStepButton() {
    await test.step(`Click on the next step Button`, async () => {
      await this.nextStep.click();
    });
  }

  async clickAddressNextStepButton() {
    await test.step(`Click on the address next step Button`, async () => {
      await this.addressNextStep.click();
    });
  }

  async clickShippingMethodNextStepButton() {
    await test.step(`Click on the shipping method next step Button`, async () => {
      await this.shippingMethodNextStep.click();
      await this.page.waitForTimeout(10000);
    });
  }

  async clickCashOnDeliveryRadioButton() {
    await test.step(`Click on the cash on delivery radio button`, async () => {
      await this.cashOnDelivery.click();
      await this.page.waitForTimeout(10000);
    });
  }

  async clickCompleteOrderButton() {
    await test.step(`Click on the complete order button`, async () => {
      await this.completeOrderButton.click();
      await this.page.waitForTimeout(10000);
    });
  }

  async verifyMessage() {
    await test.step('verify message', async () => {
      await expect(this.messageHeading, 'It\'s on the way!').toBeVisible();
    });
  }

}
