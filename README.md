
# Poplin Automation Framework  

## **Setup**  

1. **Download the Repository**  
   Clone or download the repository containing the Poplin automation framework.  

2. **Open Your Code Editor**  
   Open the project in your preferred code editor.  
   - **Recommendation:** Use [Visual Studio Code](https://code.visualstudio.com/) as it was the tool used during framework development.  

3. **Install Node.js**  
   Ensure **Node.js v20.17.0** or a later version is installed.  

4. **Install Dependencies**  
   Run the following command to install the required Node.js modules:  
   ```bash
   npm install
   ```

5. **Install Cucumber Extension**  
   If your code editor supports Cucumber, install the extension for better readability of Cucumber scenarios.  
   - For Visual Studio Code, you can use [this extension](https://github.com/cucumber/vscode).  

---

## **Running Your Tests**  

1. **Compile the Code**  
   Compile the TypeScript files using:  
   ```bash
   npm run build
   ```

2. **Execute Tests**  
   Run the desired feature files using:  
   ```bash
   npx cucumber-js
   ```  

   Example: To run the **OrderPlaced** feature file, ensure it is properly configured in your command or settings.  

---

## **Poplin Order Placement Scenarios**  

### Login Flow Testing  

#### Happy Path  
1. Navigate to the **Login** page.  
2. Enter valid credentials.  
3. Verify redirection to `https://nonprod-app.poplin.co/laundry`.  

#### Invalid Credentials  
1. Navigate to the **Login** page.  
2. Enter invalid credentials (e.g., incorrect email, phone, or password).  
3. Verify that an error message appears and the system prevents redirection.  

---

### New Order Flow  

#### Regular Flow  

The following scenario represents the regular flow for creating a new order:  

```gherkin
Feature: Poplin Order Placed

  Background: Navigation and Login
    Given I navigate to the Poplin website
    And I log in with my email

  Scenario: Create a New Order with Existing Profile (Regular Flow)
    When I click the "New Order" button
    Then I start a new order
    And I select an existing profile
    Then I proceed to the next step
    And I choose "Standard" delivery
    Then I click the "Continue Delivery" button
    And I add 3 "Small" bags
    Then I add 2 oversized items
    And I agree to the "Protecting Laundry Pros" agreements
    Then I add preferred laundry pros
    And I remove preferred laundry pros
    Then I enable flexible delivery
    And I proceed to the next step
    Then I select the "Basic" protection plan
    And I assert my order
```

---

### Detailed Step Testing  

#### Profile Selection  
- **Existing Profile:**  
  - Verify the pickup location and laundry care options match the profile settings.  
- **New Profile:**  
  - Test input validation for profile name and address.  
  - Ensure unsupported addresses trigger appropriate error messages.  
  - Validate that the "Save" button stores the new profile correctly.  

#### Delivery Speed  
- Test both **Standard** and **Express** delivery options.  
- Verify delivery costs align with business rules.  

#### Laundry Care  
- Check that the detergent dropdown and additional instruction fields display correctly.  
- Test input fields for special client preferences.  

#### Bag Count  
- Ensure sliders for bag count work as expected and comply with weight limits (e.g., 60 pounds for express delivery).  

#### Oversized Items  
- Test the "Learn More" hyperlink and sliders for oversized item limits.  

#### Protecting Laundry Pros Agreements  
- Verify that all agreements must be accepted to continue.  
- Check for proper display of error messages when requirements are unmet.  

#### Preferred Laundry Pros  
- Validate the functionality of preferred laundry pros, including organizing, editing, and blocking options.  

#### Coverage Plan  
- Verify that only one plan can be selected and costs are accurate.  
- Test that the hyperlink redirects to the correct page.  

#### Review Order  
- Ensure all selected options are displayed and editable.  
- Validate that total costs and discount code functionality work as expected.  

#### Payment  
- Test both card and Google Pay payment methods.  
- Ensure the system handles internet failures properly without double charging.  

---

## **Potential Bugs and Suggestions**  

1. **Reload Issue:** Reloading the **Review Order** page causes a blank screen with an error:  
   - Message: *“Call and wait for initialize() to finish first.”*  
   - Suggestion: Provide user-friendly error messages and retain order data.  

2. **Back Button Failure:** The **Back** button on the **Review Order** page does not function.  

3. **Cost Transparency:** Missing cost details for some options can confuse users. Adding real-time cost updates is recommended.  

---

## **About the Framework**  

- **Programming Language:** TypeScript (TS), chosen for its stricter syntax and ability to deliver structured code.  
- **Testing Tools:**  
  - **Cucumber:** For creating human-readable test scenarios.  
  - **Playwright:** For testing modern web applications.  

- **Project Structure:**  
  - **Features Folder:** Contains Gherkin feature files.  
  - **Step Definitions Folder:** Maps Gherkin steps to TypeScript instructions.  
  - **Locators Folder:** Stores page selectors for easy reuse.  

- **Mobile Testing Support:**  
  - Use [Playwright emulation](https://playwright.dev/docs/emulation) for responsive designs.  
  - For real devices, integrate with cloud services like Sauce Labs, LambdaTest, or AWS Device Farm.  

---

This framework is designed for both web and mobile testing, ensuring scalability and adaptability for future projects.
