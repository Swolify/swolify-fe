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

  it.skip('Should have 4 user profiles', () => {
    cy.get(".user-icon").should("have.length", 4)
  });

  it.skip('Should instruct a user to select a profile', () => {
    cy.get(".profile-instructions").should("exist").should("have.text", "Select A Profile")
   })
})
