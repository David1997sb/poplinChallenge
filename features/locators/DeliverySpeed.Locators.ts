import { Locator, Page } from 'playwright';

export class deliverySpeedLocators {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get standardDelivery(): Locator {
    return this.page.locator('.standard-delivery-row'); 
  }

  get expressDelivery(): Locator {
    return this.page.locator('.express-delivery-row'); 
  }


  
}
