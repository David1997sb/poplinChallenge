import { Given, Then, When } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';
import variables from '../../utils/variables';
import { signInLocators } from '../locators/signInLocators';
import { mainPageLocators } from '../locators/mainPageLocators';
import { chooseProfileLocators } from '../locators/chooseProfileLocators';
import { deliverySpeedLocators } from '../locators/DeliverySpeed.Locators';
import { bagSizeLocators } from '../locators/bagSizeLocators';
import { oversizedItemsLocators } from '../locators/oversizedItemsPageLocators';
import { protectingLaundryLocators } from '../locators/protectingLaundryLocators';
import { preferredLaundryProsLocators } from '../locators/prefferedLaundryPros';
import { protectionPlanLocators } from '../locators/protectionPlanLocators';
import { reviewOrderLocators } from '../locators/reviewOrderLocators';

var {setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(40 * 1000);

import { expect } from 'playwright/test';

let browser: Browser;
let page: Page;
let _signInLocators: signInLocators 
let _mainPageLocators: mainPageLocators;
let _chooseProfileLocators: chooseProfileLocators;
let _deliverySpeedLocators: deliverySpeedLocators;
let _bagSizeLocators: bagSizeLocators;
let _oversizedItemsLocators: oversizedItemsLocators;
let _protectingLaundryLocators: protectingLaundryLocators;
let _preferredLaundryPros: preferredLaundryProsLocators;
let _protectionPlanLocators: protectionPlanLocators
let _reviewOrderLocators: reviewOrderLocators


//Final delivery assert order
let pickupLocation: string
let bagCount: string
let oversizedItems: string
let preferredLaundryPros: string
let coverage: string




Given('I navigate to Poplin website', async function () {
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
    await page.goto(variables.url);
    _signInLocators = new signInLocators(page);
    _mainPageLocators = new mainPageLocators(page);
    _chooseProfileLocators = new chooseProfileLocators(page)
    _deliverySpeedLocators = new deliverySpeedLocators(page)
    _bagSizeLocators = new bagSizeLocators(page)
    _oversizedItemsLocators = new oversizedItemsLocators(page)
    _protectingLaundryLocators = new protectingLaundryLocators(page)
    _preferredLaundryPros = new preferredLaundryProsLocators(page)
    _protectionPlanLocators = new protectionPlanLocators(page)
    _reviewOrderLocators = new reviewOrderLocators(page)

  });

Given('I Login with the mail', async function () {
    await _signInLocators.continueWithEmail.click()
    await _signInLocators.emailInput.fill(variables.credentials.user);
    await _signInLocators.continueButton.click()
    await _signInLocators.passwordInput.fill(variables.credentials.password);
    await _signInLocators.loginButton.click()
    await _signInLocators.byPassNotificationsAlert.click()
});

When('I click in new order do my laundry button', async function() {
    await expect(_mainPageLocators.NewOrderCircleButton).toBeVisible({ timeout: 10000 });  
    await _mainPageLocators.NewOrderCircleButton.click()
})

Then('I start a new order', async function() {
    await _mainPageLocators.startNewOrderButton.click()
})

Then('I select a existing profile', async function() {
    await _chooseProfileLocators.selectProfileDropDown.click()
    await _chooseProfileLocators.selectFirstExistantProfile.click()
    await _chooseProfileLocators.doneButton.click()
    pickupLocation = await _chooseProfileLocators.pickupLocationSelectedText.innerText()

})

Then('I select a new profile', async function() {
    await _chooseProfileLocators.selectProfileDropDown.click()
    await _chooseProfileLocators.selectNewProfile.click()
    await _chooseProfileLocators.doneButton.click()
})

Then('I create the new profile', async function() {
    await _chooseProfileLocators.newProfileNameInput.fill('Poplin Home')
})

Then('I go to the next step', async function() {
    await _chooseProfileLocators.PlaceOrderContinueButton.click()
})

Then('I click delivery continue button', async function() {
    await _chooseProfileLocators.deliveryContinueButton.click()
})

Then('Select {string} delivery', async (delivery: string) => {
    if(delivery.includes('Standard')){
       await _deliverySpeedLocators.standardDelivery.click()

    } else if (delivery.includes('Express')){
       await _deliverySpeedLocators.expressDelivery.click()
    }

})

Then('I add {int} {string} bags to my bag count', async (bagsNum: number, size: string) => {
    switch(size){
        case "Small":
            for (let index = 0; index < bagsNum; index++) {
               await _bagSizeLocators.smallBagSizePlusButton.click()
            }
        break;
        case "Regular":
            for (let index = 0; index < bagsNum; index++) {
               await _bagSizeLocators.regularBagSizePlusButton.click()
            }

        break;
        case "Large":
            for (let index = 0; index < bagsNum; index++) {
               await _bagSizeLocators.largeBagSizePlusButton.click()
            }
        break;
        default:
            for (let index = 0; index < bagsNum; index++) {
               await _bagSizeLocators.smallBagSizePlusButton.click()
            }
        break;
    }
    bagCount = bagsNum.toString() + " " + size
    await _bagSizeLocators.bagContinueButton.click()
})

Then('I add {int} oversized items', async (oversizedNum: number) => {
    for (let index = 0; index < oversizedNum; index++) {
        await _oversizedItemsLocators.oversizedItemsPlusButton.click()
     }
     oversizedItems = oversizedNum.toString()
     await _oversizedItemsLocators.oversizedContinueButton.click()
})

Then('I agree the protecting laundry pros', async() => {
    await _protectingLaundryLocators.protectingLaundryFirstAgreement.click()
    await _protectingLaundryLocators.protectingLaundrySecondAgreement.click()
    await _protectingLaundryLocators.protectingLaundryThirdAgreement.click()
    await expect(_protectingLaundryLocators.agreementsContinueButton).toBeEnabled()
    await _protectingLaundryLocators.agreementsContinueButton.click()
})

Then('I add preferred laundry pros', async () => {
    await _preferredLaundryPros.enablingPrefferedCheckbox.click()
})

Then('I remove preferred laundry pros', async () => {
    await _preferredLaundryPros.disablingPrefferedCheckbox.click()
})

Then('I enable flexing delivery', async () => {
    await _preferredLaundryPros.enableFlexibleDelivery.click()
})

Then('I continue to next step preferred laundry pros', async () => {
    preferredLaundryPros = "Fidge"
    await _preferredLaundryPros.preferredLaundryProsContinueButton.click()
})

Then('I select {string} protection plan', async (protectionPlan: string) => {
    switch(protectionPlan){
        case "Basic":
            await _protectionPlanLocators.protectingConverageBasic.click()
        break;
        case "Premium":
            await _protectionPlanLocators.protectingConverageAdvance.click()

        break
        case "Premium +":
            await _protectionPlanLocators.protectingConverageAdvancePlus.click()

        break
        default:
            await _protectionPlanLocators.protectingConverageBasic.click()

        break;
    }
    coverage = protectionPlan
    await _protectionPlanLocators.coverageContinueButton.click()
})

Then('I assert my order', async () => {
    expect(_reviewOrderLocators.bagCountText).toHaveText(bagCount)
    expect(_reviewOrderLocators.pickupLocationText).toHaveText(pickupLocation)
    expect(_reviewOrderLocators.oversizedItemsText).toContainText(oversizedItems)
    expect(_reviewOrderLocators.preferredLaundryProsText).toContainText(preferredLaundryPros)
    expect(_reviewOrderLocators.coverageText).toHaveText(coverage)

})



