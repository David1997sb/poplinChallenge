import { Locator, Page } from 'playwright';

export class bagSizeLocators {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get smallBagSizePlusButton(): Locator {
    return this.page.locator("#stepper-small poplin-button[icon='plus_custom']"); 
  }

  get regularBagSizePlusButton(): Locator {
    return this.page.locator("#stepper-regular poplin-button[icon='plus_custom']"); 
  }

  get largeBagSizePlusButton(): Locator {
    return this.page.locator("#stepper-large poplin-button[icon='plus_custom']"); 
  }

  get bagContinueButton(): Locator {
    return this.page.locator("#bag-continue-button-wrapper"); 
  }

  
  
}
