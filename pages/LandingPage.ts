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
  // readonly contactEmailField: Locator;
  // readonly contactPhoneField: Locator;
  // readonly contactSubjectField: Locator;
  // readonly contactDescriptionField: Locator;
  // readonly contactSubmitButton: Locator;
  // readonly contactSuccessMessage: Locator;
  // readonly contactErrorMessages: Locator;

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
    // this.bookingBookButton = page.getByRole('button', { name: 'Book', exact: true }).last();
    // this.bookingCalendarNextButton = page.getByRole('button', { name: 'Next' }).last();
    // this.bookingConfirmationModal = page.locator('.confirmation-modal');
    // this.bookingErrorMessages = page.locator('div.hotel-room-info .alert.alert-danger').last();

    // this.contactNameField = page.getByTestId('ContactName');
    // this.contactEmailField = page.getByTestId('ContactEmail');
    // this.contactPhoneField = page.getByTestId('ContactPhone');
    // this.contactSubjectField = page.getByTestId('ContactSubject');
    // this.contactDescriptionField = page.getByTestId('ContactDescription');
    // this.contactSubmitButton = page.getByRole('button', { name: 'Submit' });
    // this.contactSuccessMessage = page.locator('div.contact h2');
    // this.contactErrorMessages = page.locator('div.contact .alert.alert-danger');
  }

  async goto() {
    await test.step('Go to Landing Page', async () => {
      await this.page.goto('/');
      await expect(this.pageLocator, 'Decathlon').toBeVisible();
    });
  }

  // async sendMessage(name: string, email: string, phone: string, subject: string, description: string) {
  //   await test.step('Submit Message to Hotel', async () => {
  //     await this.contactNameField.fill(name);
  //     await this.contactEmailField.fill(email);
  //     await this.contactPhoneField.fill(phone);
  //     await this.contactSubjectField.fill(subject);
  //     await this.contactDescriptionField.fill(description);
  //     await this.contactSubmitButton.click();
  //   });
  // }
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

  // async fillBookingFields(firstName: string, lastName: string, email: string, phoneNumber: string) {
  //   await test.step('Fill in booking information', async () => {
  //     await this.bookingFirstNameField.fill(firstName);
  //     await this.bookingLastNameField.fill(lastName);
  //     await this.bookingEmailField.fill(email);
  //     await this.bookingPhoneNumberField.fill(phoneNumber);
  //   });
  // }

  // async selectBookingDates() {
  //   await test.step('Select booking dates', async () => {
  //     await this.bookingCalendarNextButton.click();
  //     const bookingCalendarStart = this.page.locator('.rbc-day-bg:not(.rbc-off-range-bg)').first();
  //     const bookingCalendarEnd = this.page.locator('.rbc-day-bg:not(.rbc-off-range-bg)').last();
  //     await bookingCalendarStart.hover();
  //     await this.page.mouse.down();
  //     await bookingCalendarEnd.hover();
  //     await this.page.mouse.up();
  //   });
  // }

  // async clickOnBookButton() {
  //   await test.step('Click on Book button', async () => {
  //     await this.bookingBookButton.click();
  //   });
  // }

  // async bookRoom(roomName: string, firstName: string, lastName: string, email: string, phoneNumber: string) {
  //   await test.step(`Book a Room '${roomName}'`, async () => {
  //     await this.clickBookThsRoomButton(roomName);
  //     await this.fillBookingFields(firstName, lastName, email, phoneNumber);
  //     await this.selectBookingDates();
  //     await this.clickOnBookButton();
  //   });
  // }

  // async bookRoomWithoutDates(roomName: string, firstName: string, lastName: string, email: string, phoneNumber: string) {
  //   await test.step(`Book a Room '${roomName}' without selecting booking dates`, async () => {
  //     await this.clickBookThsRoomButton(roomName);
  //     await this.fillBookingFields(firstName, lastName, email, phoneNumber);
  //     await this.clickOnBookButton();
  //   });
  // }
}
