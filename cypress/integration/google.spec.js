describe('My First Test', () => {
  it('Visits Google', () => {
    const url = "https://www.google.com"

    cy.visit(url)
    
    cy.get('input[title=Pesquisar]').type('Gama Academy{enter}')
    cy.get('a[href="https://gama.academy/"]').click()
  })
})