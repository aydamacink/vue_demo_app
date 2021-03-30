/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.get("[data-cy=input-name]")
      .type('fake product')

    cy.get("[data-cy=input-price]")
      .type('5')

    cy.get("[data-cy=button-submit]")
      .click()

    cy.get("[data-cy=success-msg]").should("be.visible")
  })
})
