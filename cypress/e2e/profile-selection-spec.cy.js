
describe('swolify-fe', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  })

  it.skip('Should contain the Swolify title', () => {
    cy.get(".landing-header").should("exist").should("have.text", "Swolify")
  });

  it.skip('Should have 4 user profiles', () => {
    cy.get(".user-icon").should("have.length", 4)
  });

  it.skip('Should instruct a user to select a profile', () => {
    cy.get(".profile-instructions").should("exist").should("have.text", "Select A Profile")
   })
})
