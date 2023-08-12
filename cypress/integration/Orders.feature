Feature: Orders

  I want to order fictions and drama

  Scenario: order fictions
    Given I navigate to the website
    When I select Fiction option
    And I choose Harry Potter book
    When I submit without entering units and price
    Then I should see validation errors below units and price
    When I enter invalid unit "invalid units"
    Then I should see invalid input error below units
    When I enter invalid price "invalid price"
    Then I should see invalid price error below price
    When I enter units "50"
    And I enter price "35"
    And I submit the order
    Then I should see fiction order details in transaction record

  Scenario: order drama
    Given I navigate to the website
    When I select Drama option
    And I choose The Rainbow drama
    And I enter units "1"
    And I enter price "125"
    When I select Discount
    And I submit without entering discount
    Then I should see validation errors below discount
    When I enter invalid discount "invalid discount"
    Then I should see invalid validation errors below discount
    When I enter 10% as discount "10"
    And I submit the order
    Then I should see drama order details in transaction record
    When I delete the record
    Then I should not see the order in transaction record
