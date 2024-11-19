"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protectingLaundryLocators = void 0;
class protectingLaundryLocators {
    page;
    constructor(page) {
        this.page = page;
    }
    get oversizedItemsPlusButton() {
        return this.page.locator('[ng-reflect-label="Oversized Items"] [icon="plus_custom"]');
    }
    get protectingLaundryFirstAgreement() {
        return this.page.locator("#drawer-checkbox-1");
    }
    get protectingLaundrySecondAgreement() {
        return this.page.locator("#drawer-checkbox-2");
    }
    get protectingLaundryThirdAgreement() {
        return this.page.locator("#drawer-checkbox-3");
    }
    get agreementsContinueButton() {
        return this.page.locator("#drawer-modal-continue-button-wrapper");
    }
}
exports.protectingLaundryLocators = protectingLaundryLocators;
//# sourceMappingURL=protectingLaundryLocators.js.map