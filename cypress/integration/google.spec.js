describe('My First Test', () => {
  it('Visits Google', () => {
    const url = "https://www.google.com"

    cy.visit(url)
  })
})