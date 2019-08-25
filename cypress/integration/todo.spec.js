it('let create tasks', () => {
  const task = 'buy milk'
  cy.visit('/')
  cy.addTask({ text: task })
  cy.get('.list-group-item')
    .should('have.length', 1)

  cy.get('.list-group-item').first()
    .should('have.text', task)
});

it('let complete tasks', () => {
  const task = 'buy milk'
  cy.visit('/')
  cy.addTask({ text: task })
  cy.get('.list-group-item').click()
  cy.get('.list-group-item')
    .should('have.css', 'text-decoration-line', 'line-through')
});

it('let delete tasks', () => {
  const task1 = 'buy milk'
  const task2 = 'buy bread'
  cy.visit('/')
  cy.addTask({ text: task1 })
  cy.addTask({ text: task2 })
  cy.get('.list-group-item')
    .should('have.length', 2)

  cy.get('.list-group-item > .btn').first().click()

  cy.get('.list-group-item')
    .should('have.length', 1)

  cy.get('.list-group-item').first()
    .should('have.text', task2)
});
