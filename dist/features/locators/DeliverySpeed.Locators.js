"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deliverySpeedLocators = void 0;
class deliverySpeedLocators {
    page;
    constructor(page) {
        this.page = page;
    }
    get standardDelivery() {
        return this.page.locator('.standard-delivery-row');
    }
    get expressDelivery() {
        return this.page.locator('.express-delivery-row');
    }
}
exports.deliverySpeedLocators = deliverySpeedLocators;
//# sourceMappingURL=DeliverySpeed.Locators.js.map