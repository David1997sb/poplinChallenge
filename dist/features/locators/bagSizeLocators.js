"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bagSizeLocators = void 0;
class bagSizeLocators {
    page;
    constructor(page) {
        this.page = page;
    }
    get smallBagSizePlusButton() {
        return this.page.locator("#stepper-small poplin-button[icon='plus_custom']");
    }
    get regularBagSizePlusButton() {
        return this.page.locator("#stepper-regular poplin-button[icon='plus_custom']");
    }
    get largeBagSizePlusButton() {
        return this.page.locator("#stepper-large poplin-button[icon='plus_custom']");
    }
    get bagContinueButton() {
        return this.page.locator("#bag-continue-button-wrapper");
    }
}
exports.bagSizeLocators = bagSizeLocators;
//# sourceMappingURL=bagSizeLocators.js.map