import { test, expect, Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class LandingPage extends BasePage {
  readonly pageLocator: Locator;

  readonly cartButton: Locator;
  readonly fleecesJacket: Locator;
  readonly addBag: Locator;
  readonly checkout: Locator;
  readonly nextStep: Locator;
  readonly addressNextStep: Locator;
  readonly shippingMethodNextStep: Locator;
  readonly cashOnDelivery: Locator;
  readonly completeOrderButton: Locator;

  constructor(page: Page) {
    super(page);
    this.pageLocator = page.getByRole('link', { name: 'Decathlon' });

    this.cartButton = page.getByRole('button', { name: 'items in cart, view bag' });
    this.fleecesJacket = page.getByRole('button', { name: 'Hiking Fleece Jacket - MH520' });
    this.addBag = page.getByRole('button', { name: 'Add to bag' });
    this.checkout = page.getByRole('link', { name: 'Checkout' });
    this.nextStep = page.getByRole('button', { name: 'Next Step' });
    this.addressNextStep = page.getByLabel('02.Address').getByRole('button', { name: 'Next Step' })
    this.shippingMethodNextStep = page.getByLabel('03.Shipping Method').getByRole('button', { name: 'Next Step' })
    this.cashOnDelivery = page.locator('#CASH_ON_DELIVERY')
    
    this.completeOrderButton = page.getByRole('link', { name: 'Complete Order' })
  }

  async goto() {
    await test.step('Go to Landing Page', async () => {
      await this.page.goto('/');
      await expect(this.pageLocator, 'Decathlon').toBeVisible();
    });
  }

  async clickProduct() {
    await test.step(`Click on the product button`, async () => {
      await this.fleecesJacket.click();
    });
  }

  async clickCartButton() {
    await test.step(`Click on the cart Button`, async () => {
      await this.cartButton.click();
    });
  }

  async clickAddToBagButton() {
    await test.step(`Click on the add a bag Button`, async () => {
      await this.addBag.click();
    });
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
}
