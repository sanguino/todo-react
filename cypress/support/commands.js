Cypress.Commands.add('addTask', ({ text }) => {
  cy.get('.create-form input').type(text);
  cy.get('.create-form').submit();
});
