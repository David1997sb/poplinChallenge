import { Locator, Page } from 'playwright';

export class oversizedItemsLocators {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get oversizedItemsPlusButton(): Locator {
    return this.page.locator('[ng-reflect-label="Oversized Items"] [icon="plus_custom"]'); 
  }

  get oversizedContinueButton(): Locator {
    return this.page.locator("#oversized-continue-button"); 
  }

  
}
