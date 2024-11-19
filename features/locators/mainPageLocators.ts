import { Locator, Page } from 'playwright';

export class mainPageLocators {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get NewOrderCircleButton(): Locator {
    return this.page.locator('.do-my-laundry-container'); 
  }

  get startNewOrderButton(): Locator {
    return this.page.locator('[ng-reflect-title="Start new order"]'); 
  }
  
}
