import { Locator, Page } from 'playwright';

export class preferredLaundryProsLocators {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get enableFlexibleDelivery(): Locator {
    return this.page.locator('[ng-reflect-label="Enable flexible delivery"]'); 
  }

  get preferredLaundryProsContinueButton(): Locator {
    return this.page.locator("#preferred-continue-button"); 
  }

  get disablingPrefferedCheckbox(): Locator {
    return this.page.locator("ion-item .checkbox-checked").first(); 
  }

  get enablingPrefferedCheckbox(): Locator {
    return this.page.locator('ion-item [aria-checked="false"]').first(); 
  }


  

  
}
