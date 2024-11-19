"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const playwright_1 = require("playwright");
const variables_1 = __importDefault(require("../../utils/variables"));
const signInLocators_1 = require("../locators/signInLocators");
const mainPageLocators_1 = require("../locators/mainPageLocators");
const chooseProfileLocators_1 = require("../locators/chooseProfileLocators");
const DeliverySpeed_Locators_1 = require("../locators/DeliverySpeed.Locators");
const bagSizeLocators_1 = require("../locators/bagSizeLocators");
const oversizedItemsPageLocators_1 = require("../locators/oversizedItemsPageLocators");
const protectingLaundryLocators_1 = require("../locators/protectingLaundryLocators");
const prefferedLaundryPros_1 = require("../locators/prefferedLaundryPros");
const protectionPlanLocators_1 = require("../locators/protectionPlanLocators");
var { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(30 * 1000);
const test_1 = require("playwright/test");
let browser;
let page;
let _signInLocators;
let _mainPageLocators;
let _chooseProfileLocators;
let _deliverySpeedLocators;
let _bagSizeLocators;
let _oversizedItemsLocators;
let _protectingLaundryLocators;
let _preferredLaundryPros;
let _protectionPlanLocators;
(0, cucumber_1.Given)('I navigate to Poplin website', async function () {
    browser = await playwright_1.chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto(variables_1.default.url);
    _signInLocators = new signInLocators_1.signInLocators(page);
    _mainPageLocators = new mainPageLocators_1.mainPageLocators(page);
    _chooseProfileLocators = new chooseProfileLocators_1.chooseProfileLocators(page);
    _deliverySpeedLocators = new DeliverySpeed_Locators_1.deliverySpeedLocators(page);
    _bagSizeLocators = new bagSizeLocators_1.bagSizeLocators(page);
    _oversizedItemsLocators = new oversizedItemsPageLocators_1.oversizedItemsLocators(page);
    _protectingLaundryLocators = new protectingLaundryLocators_1.protectingLaundryLocators(page);
    _preferredLaundryPros = new prefferedLaundryPros_1.preferredLaundryProsLocators(page);
    _protectionPlanLocators = new protectionPlanLocators_1.protectionPlanLocators(page);
});
(0, cucumber_1.Given)('I Login with the mail', async function () {
    await _signInLocators.continueWithEmail.click();
    await _signInLocators.emailInput.fill(variables_1.default.credentials.user);
    await _signInLocators.continueButton.click();
    await _signInLocators.passwordInput.fill(variables_1.default.credentials.password);
    await _signInLocators.loginButton.click();
    await _signInLocators.byPassNotificationsAlert.click();
});
(0, cucumber_1.When)('I click in new order do my laundry button', async function () {
    await (0, test_1.expect)(_mainPageLocators.NewOrderCircleButton).toBeVisible({ timeout: 10000 });
    await _mainPageLocators.NewOrderCircleButton.click();
});
(0, cucumber_1.Then)('I start a new order', async function () {
    await _mainPageLocators.startNewOrderButton.click();
});
(0, cucumber_1.Then)('I select a existing profile', async function () {
    await _chooseProfileLocators.selectProfileDropDown.click();
    await _chooseProfileLocators.selectFirstExistantProfile.click();
    await _chooseProfileLocators.doneButton.click();
});
(0, cucumber_1.Then)('I select a new profile', async function () {
    await _chooseProfileLocators.selectProfileDropDown.click();
    await _chooseProfileLocators.selectNewProfile.click();
    await _chooseProfileLocators.doneButton.click();
});
(0, cucumber_1.Then)('I create the new profile', async function () {
    await _chooseProfileLocators.newProfileNameInput.fill('Poplin Home');
});
(0, cucumber_1.Then)('I go to the next step', async function () {
    await _chooseProfileLocators.PlaceOrderContinueButton.click();
});
(0, cucumber_1.Then)('I click delivery continue button', async function () {
    await _chooseProfileLocators.deliveryContinueButton.click();
});
(0, cucumber_1.Then)('Select {string} delivery', async (delivery) => {
    if (delivery.includes('Standard')) {
        await _deliverySpeedLocators.standardDelivery.click();
    }
    else if (delivery.includes('Express')) {
        await _deliverySpeedLocators.expressDelivery.click();
    }
});
(0, cucumber_1.Then)('I add {int} {string} bags to my bag count', async (bagsNum, size) => {
    switch (size) {
        case "Small":
            for (let index = 0; index < bagsNum; index++) {
                await _bagSizeLocators.smallBagSizePlusButton.click();
            }
            break;
        case "Regular":
            for (let index = 0; index < bagsNum; index++) {
                await _bagSizeLocators.regularBagSizePlusButton.click();
            }
            break;
        case "Large":
            for (let index = 0; index < bagsNum; index++) {
                await _bagSizeLocators.largeBagSizePlusButton.click();
            }
            break;
        default:
            for (let index = 0; index < bagsNum; index++) {
                await _bagSizeLocators.smallBagSizePlusButton.click();
            }
            break;
    }
    await _bagSizeLocators.bagContinueButton.click();
});
(0, cucumber_1.Then)('I add {int} oversized items', async (oversizedNum) => {
    for (let index = 0; index < oversizedNum; index++) {
        await _oversizedItemsLocators.oversizedItemsPlusButton.click();
    }
    await _oversizedItemsLocators.oversizedContinueButton.click();
});
(0, cucumber_1.Then)('I agree the protecting laundry pros', async () => {
    await _protectingLaundryLocators.protectingLaundryFirstAgreement.click();
    await _protectingLaundryLocators.protectingLaundryFirstAgreement.click();
    await _protectingLaundryLocators.protectingLaundryFirstAgreement.click();
    await (0, test_1.expect)(_protectingLaundryLocators.agreementsContinueButton).toBeEnabled();
    await _protectingLaundryLocators.agreementsContinueButton.click();
});
(0, cucumber_1.Then)('I add preferred laundry pros', async () => {
    await _preferredLaundryPros.enablingPrefferedCheckbox.click();
});
(0, cucumber_1.Then)('I remove preferred laundry pros', async () => {
    await _preferredLaundryPros.disablingPrefferedCheckbox.click();
});
(0, cucumber_1.Then)('I enable flexing delivery', async () => {
    await _preferredLaundryPros.enableFlexibleDelivery.click();
});
(0, cucumber_1.Then)('I continue to next step preferred laundry pros', async () => {
    await _preferredLaundryPros.preferredLaundryProsContinueButton.click();
});
(0, cucumber_1.Then)('I select {string} protection plan', async (protectionPlan) => {
    switch (protectionPlan) {
        case "Basic":
            await _protectionPlanLocators.protectingConverageBasic.click();
            break;
        case "Premium":
            await _protectionPlanLocators.protectingConverageAdvance.click();
            break;
        case "Premium +":
            await _protectionPlanLocators.protectingConverageAdvancePlus.click();
            break;
        default:
            await _protectionPlanLocators.protectingConverageBasic.click();
            break;
    }
    await _protectionPlanLocators.coverageContinueButton.click();
});
//# sourceMappingURL=orderPlaced.js.map