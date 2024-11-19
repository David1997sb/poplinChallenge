"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preferredLaundryProsLocators = void 0;
class preferredLaundryProsLocators {
    page;
    constructor(page) {
        this.page = page;
    }
    get enableFlexibleDelivery() {
        return this.page.locator('[ng-reflect-label="Enable flexible delivery"]');
    }
    get preferredLaundryProsContinueButton() {
        return this.page.locator("#preferred-continue-button");
    }
    get disablingPrefferedCheckbox() {
        return this.page.locator("ion-item .checkbox-checked");
    }
    get enablingPrefferedCheckbox() {
        return this.page.locator('ion-item [aria-checked="false"]');
    }
}
exports.preferredLaundryProsLocators = preferredLaundryProsLocators;
//# sourceMappingURL=prefferedLaundryPros.js.map