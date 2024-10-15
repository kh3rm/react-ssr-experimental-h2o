describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('http://localhost:3000') // change URL to match your dev URL

    cy.get('h1').should('have.length', 2)

    cy.get('h1').first().should('have.text', 'Skriv text!')
  })
})
