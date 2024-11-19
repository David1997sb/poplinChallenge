"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.protectionPlanLocators = void 0;
class protectionPlanLocators {
    page;
    constructor(page) {
        this.page = page;
    }
    get protectingConverageAdvancePlus() {
        return this.page.locator('poplin-radio-card[ng-reflect-value="Premium+"]');
    }
    get protectingConverageAdvance() {
        return this.page.locator('poplin-radio-card[ng-reflect-value="Premium"]');
    }
    get protectingConverageBasic() {
        return this.page.locator('poplin-radio-card[ng-reflect-value="Basic"]');
    }
    get coverageContinueButton() {
        return this.page.locator('[ng-reflect-id="coverage-continue-button"]');
    }
}
exports.protectionPlanLocators = protectionPlanLocators;
//# sourceMappingURL=protectionPlanLocators.js.map