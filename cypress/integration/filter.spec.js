it('let to filter task by active, completed and all', () => {
  const task1 = 'buy milk'
  const task2 = 'buy bread'
  const task3 = 'buy beer'
  cy.visit('/')
  cy.addTask({ text: task1 })
  cy.addTask({ text: task2 })
  cy.addTask({ text: task3 })
  cy.get('.list-group-item').first().click()

  cy.get('.btn.SHOW_ACTIVE').first().click()
  cy.get('.list-group-item')
    .should('have.length', 2)

  cy.get('.btn.SHOW_COMPLETED').first().click()
  cy.get('.list-group-item')
    .should('have.length', 1)

  cy.get('.btn.SHOW_ALL').first().click()
  cy.get('.list-group-item')
    .should('have.length', 3)
});

