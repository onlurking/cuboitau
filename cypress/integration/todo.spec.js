describe('My First Test', () => {
  it('Visits Google', () => {
    const url = "http://todomvc.com/examples/vue/"

    cy.visit(url)
   
    cy.get('.new-todo')
    .type('todo 1{enter}')
  
  })
})