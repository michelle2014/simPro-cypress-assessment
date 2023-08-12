import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import {
  clickSubmitButton,
  selectDropdownOption,
  enterInput,
  clearAndEnterInput,
} from "../../support/helper.function";

/* assume order details has no transaction record from beginning
if someshow order details section is not clean before test
e.g. the test fails in middle of running in pipeline
sometimes might need to delete and back to original state first with Before() or beforeEach()
or at the very top of the test */

// Scenario: order fictions
Given("I navigate to the website", () => {
  cy.visit("https://react.simprocloud.com/build/index.html");
});
When("I select Fiction option", () => {
  cy.get("#radioselect1 > input").click();
});
And("I choose Harry Potter book", () => {
  selectDropdownOption("Harry Potter");
});
// test if no input should see validation erros
When("I submit without entering units and price", () => {
  clickSubmitButton();
});
Then("I should see validation errors below units and price", () => {
  cy.contains("Input is not valid").should("be.visible");
  cy.contains("Price is required").should("be.visible");
});
// test if invalid input should see invalid validation errors
When("I enter invalid unit {string}", (units) => {
  enterInput("units", units);
});
Then("I should see invalid input error below units", () => {
  cy.contains("Input is not valid").should("be.visible");
});
When("I enter invalid price {string}", (price) => {
  enterInput("price", price);
});
Then("I should see invalid price error below price", () => {
  cy.contains("Invalid price").should("be.visible");
});
// test if valid input, should submit order successfully
When("I enter units {string}", (units) => {
  clearAndEnterInput("units", units);
});
And("I enter price {string}", (price) => {
  clearAndEnterInput("price", price);
});
And("I submit the order", () => {
  clickSubmitButton();
});
Then("I should see fiction order details in transaction record", () => {
  cy.get("#transactionsection").within(() => {
    cy.contains("td", "Harry Potter").should("be.visible");
    cy.contains("td", "1750.00").should("be.visible");
  });
});
/* clean up and back to original state if no further tests based on this test
or updated state caused by the test affects any test following
with After() for multiple-time running purpose or at the very end of the test */

// Scenario: order drama
When("I select Drama option", () => {
  cy.get("#radioselect2 > input").click();
});
And("I choose The Rainbow drama", () => {
  selectDropdownOption("The Rainbow");
});
When("I select Discount", () => {
  cy.get('input[name="discount"]').click();
});
// test if no discount input should see validation error
And("I submit without entering discount", () => {
  clickSubmitButton();
});
Then("I should see validation errors below discount", () => {
  cy.contains("Discount is required").should("be.visible");
});
// test if invalid discount should see invalid validation error
When("I enter invalid discount {string}", (discount) => {
  cy.get(".discountvalue").type(discount);
});
Then("I should see invalid validation errors below discount", () => {
  cy.contains("Invalid discount amount !").should("be.visible");
});
When("I enter 10% as discount {string}", (discount) => {
  cy.get(".discountvalue").clear();
  cy.get(".discountvalue").type(discount);
});
Then("I should see drama order details in transaction record", () => {
  cy.get("#transactionsection").within(() => {
    cy.contains("td", "The Rainbow").should("be.visible");
    cy.contains("td", "12.50").should("be.visible");
    cy.contains("td", "112.50").should("be.visible");
  });
});
When("I delete the record", () => {
  cy.get(".removeRecord").click();
  cy.get("button").contains("Yes, Delete it!").click();
});
Then("I should not see the order in transaction record", () => {
  cy.get("#transactionsection").within(() => {
    cy.contains("The Rainbow").should("not.exist");
  });
});
