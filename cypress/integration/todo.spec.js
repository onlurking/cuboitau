describe('My First Test', () => {
  it('Visits Google', () => {
    const url = "http://todomvc.com/examples/vue/"

    cy.visit(url)
   
    cy.get('.new-todo')
    .type('todo 1{enter}')
    .type('todo 2{enter}')
    .type('todo 3{enter}')

    cy.get('.todo').should('have.length', 3)
  })
})