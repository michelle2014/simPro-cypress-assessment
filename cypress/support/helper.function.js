const clickSubmitButton = () => {
  return cy.get('input[name="submit"]').click();
};

const selectDropdownOption = (option) => {
  return cy.get("select").select(option).should("have.value", option);
};

const enterInput = (name, input) => {
  return cy.get(`input[name="${name}"]`).type(input);
};

const clearAndEnterInput = (name, input) => {
  cy.get(`input[name="${name}"]`).clear();
  return cy.get(`input[name="${name}"]`).type(input);
};

export {
  clickSubmitButton,
  selectDropdownOption,
  enterInput,
  clearAndEnterInput,
};
