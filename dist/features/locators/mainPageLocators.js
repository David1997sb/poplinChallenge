"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainPageLocators = void 0;
class mainPageLocators {
    page;
    constructor(page) {
        this.page = page;
    }
    get NewOrderCircleButton() {
        return this.page.locator('.do-my-laundry-container');
    }
    get startNewOrderButton() {
        return this.page.locator('[ng-reflect-title="Start new order"]');
    }
}
exports.mainPageLocators = mainPageLocators;
//# sourceMappingURL=mainPageLocators.js.map