Cypress.Commands.add('clickSpecifiedElement', (text) => {
    cy.contains(text).should('exist').and('be.visible').click()
})

Cypress.Commands.add('getFillElement', (element1,element2) => {
    cy.get(element1).should('be.visible').fill(element2)
})
