import { aliasQuery, aliasMutation, hasOperationName } from '../utils/graphql-test-utils'

describe('swolify-fe', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/swolify-fe")
  })

  it('Should contain the Swolify title', () => {
    cy.get(".logo-section").should("exist")
  });

  it('Should let a user display profiles', () => {
    cy.get(".start-button").click()
    cy.get(".user-icon-background").should("have.length", 4)
  });

  it('A user should be able to select a profile to view user dashboard', () => {
    cy.get(".start-button").click()
    cy.get(".user-icon-background").eq(1).click()
    cy.url()
    .should('eq', 'http://localhost:3000/swolify-fe/game')
  });

})
