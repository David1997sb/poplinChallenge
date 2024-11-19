"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oversizedItemsLocators = void 0;
class oversizedItemsLocators {
    page;
    constructor(page) {
        this.page = page;
    }
    get oversizedItemsPlusButton() {
        return this.page.locator('[ng-reflect-label="Oversized Items"] [icon="plus_custom"]');
    }
    get oversizedContinueButton() {
        return this.page.locator("#oversized-continue-button");
    }
}
exports.oversizedItemsLocators = oversizedItemsLocators;
//# sourceMappingURL=oversizedItemsPageLocators.js.map