import { Locator, Page } from 'playwright';

export class protectionPlanLocators {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get protectingConverageAdvancePlus(): Locator {
    return this.page.locator('poplin-radio-card[ng-reflect-value="Premium+"]'); 
  }
  get protectingConverageAdvance(): Locator {
    return this.page.locator('poplin-radio-card[ng-reflect-value="Premium"]'); 
  }
  get protectingConverageBasic(): Locator {
    return this.page.locator('poplin-radio-card[ng-reflect-value="Basic"]'); 
  }

  get coverageContinueButton(): Locator {
    return this.page.locator('[ng-reflect-id="coverage-continue-button"]'); 
  }

  

  
}
