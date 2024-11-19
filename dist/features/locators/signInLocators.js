"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInLocators = void 0;
class signInLocators {
    page;
    constructor(page) {
        this.page = page;
    }
    // Locators for the login page
    get continueWithEmail() {
        return this.page.locator('[label="Continue with Email"]');
    }
    get byPassNotificationsAlert() {
        return this.page.locator('#buttonLabel-auth-pn-next-button');
    }
    get emailInput() {
        return this.page.locator('#email');
    }
    get continueButton() {
        return this.page.locator('#email-login-button-wrapper');
    }
    get loginButton() {
        return this.page.locator('#enter-password-login-button-wrapper');
    }
    get passwordInput() {
        return this.page.locator('#enter-password');
    }
}
exports.signInLocators = signInLocators;
//# sourceMappingURL=signInLocators.js.map