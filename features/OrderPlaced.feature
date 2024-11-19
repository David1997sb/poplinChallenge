Feature: Poplin Order Placed

  Background: Navigation and Login 
    Given I navigate to Poplin website
    And I Login with the mail

  Scenario: Create new Order with existing profile (Regular flow) 
    When I click in new order do my laundry button
    Then I start a new order
    And I select a existing profile
    Then I go to the next step
    And Select "Standard" delivery
    Then I click delivery continue button
    And I add 3 "Small" bags to my bag count
    Then I add 2 oversized items
    And I agree the protecting laundry pros
    Then I add preferred laundry pros
    And I remove preferred laundry pros
    Then I enable flexing delivery
    And I continue to next step preferred laundry pros
    Then I select "Basic" protection plan
    And I assert my order 


