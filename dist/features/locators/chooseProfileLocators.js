"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chooseProfileLocators = void 0;
class chooseProfileLocators {
    page;
    constructor(page) {
        this.page = page;
    }
    get selectProfileDropDown() {
        return this.page.locator('#ion-select-component');
    }
    get selectFirstExistantProfile() {
        return this.page.locator('.select-interface-option').first();
    }
    get selectNewProfile() {
        return this.page.locator('.select-interface-option').last();
    }
    get doneButton() {
        return this.page.locator("//span[text() = 'OK']/parent::button");
    }
    get newProfileNameInput() {
        return this.page.locator('input[ng-reflect-name="newProfileName"]');
    }
    get PlaceOrderContinueButton() {
        return this.page.locator('[label="Continue"]');
    }
    get deliveryContinueButton() {
        return this.page.locator('#delivery-continue-button');
    }
}
exports.chooseProfileLocators = chooseProfileLocators;
//# sourceMappingURL=chooseProfileLocators.js.map