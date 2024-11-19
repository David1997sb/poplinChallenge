import { Locator, Page } from 'playwright';

export class protectingLaundryLocators {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get oversizedItemsPlusButton(): Locator {
    return this.page.locator('[ng-reflect-label="Oversized Items"] [icon="plus_custom"]'); 
  }

  get protectingLaundryFirstAgreement(): Locator {
    return this.page.locator("#drawer-checkbox-1"); 
  }

  get protectingLaundrySecondAgreement(): Locator {
    return this.page.locator("#drawer-checkbox-2"); 
  }

  get protectingLaundryThirdAgreement(): Locator {
    return this.page.locator("#drawer-checkbox-3"); 
  }

  get agreementsContinueButton(): Locator {
    return this.page.locator("#drawer-modal-continue-button-wrapper"); 
  }

  

  
}
