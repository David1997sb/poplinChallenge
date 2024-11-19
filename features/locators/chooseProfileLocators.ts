import { Locator, Page } from 'playwright';

export class chooseProfileLocators {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get selectProfileDropDown(): Locator {
    return this.page.locator('#ion-select-component'); 
  }

  get selectFirstExistantProfile(): Locator {
    return this.page.locator('.select-interface-option').first(); 
  }

  get selectNewProfile(): Locator {
    return this.page.locator('.select-interface-option').last(); 
  }

  get doneButton(): Locator {
    return this.page.locator("//span[text() = 'OK']/parent::button"); 
  }

  get pickupLocationSelectedText(): Locator {
    return this.page.locator("#order-review-card-element span").first(); 
  }

  

  get newProfileNameInput(): Locator {
    return this.page.locator('input[ng-reflect-name="newProfileName"]'); 
  }

  get PlaceOrderContinueButton(): Locator {
    return this.page.locator('[label="Continue"]'); 
  }

  get deliveryContinueButton(): Locator {
    return this.page.locator('#delivery-continue-button'); 
  }
  


  

}
