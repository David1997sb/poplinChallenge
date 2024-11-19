import { Locator, Page } from 'playwright';

export class signInLocators {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators for the login page
  get continueWithEmail(): Locator {
    return this.page.locator('[label="Continue with Email"]'); 
  }

  get byPassNotificationsAlert(): Locator {
    return this.page.locator('#buttonLabel-auth-pn-next-button'); 
  }

  get emailInput(): Locator {
    return this.page.locator('#email'); 
  }

  get continueButton(): Locator {
    return this.page.locator('#email-login-button-wrapper'); 
  }

  get loginButton(): Locator {
    return this.page.locator('#enter-password-login-button-wrapper'); 
  }

  get passwordInput(): Locator {
    return this.page.locator('#enter-password'); 
  }


}
