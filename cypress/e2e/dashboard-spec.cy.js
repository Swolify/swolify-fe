describe('swolify-fe-dashboard', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/swolify-fe")
    cy.get(".start-button").click()
    cy.get(".user-icon-background").eq(1).click()
  })

  it('Should contain the Swolify dashboard title', () => {
    cy.get(".dashboard-title").should("have.text", "Dashboard")
  });

  it('Should contain a form to fill out to create a workout', () => {
    cy.get(".exercise-selection").should("exist")
    cy.get(".form-question").should("have.text", "What would you like to train?")
  });

  it('Form should contain 4 exercise categories', () => {
    cy.get(".exercise-type-select").should("exist")
    cy.get("input[name=upperbody]").should("have.attr", "type", "checkbox")
    cy.get("input[name=lowerbody]").should("have.attr", "type", "checkbox")
    cy.get("input[name=core]").should("have.attr", "type", "checkbox")
    cy.get("input[name=cardio]").should("have.attr", "type", "checkbox")
  });

  it('Form should contain 2 difficulty levels', () => {
    cy.get(".difficulty-title").should("exist")
    cy.get(".difficulty-title").should("have.text", "Select Difficulty Level")
    cy.get("input[name=easymode]").should("have.attr", "type", "radio")
    cy.get("input[name=hardmode]").should("have.attr", "type", "radio")
  });

  it('Form should contain history details', () => {
    cy.get(".history-container").should("exist")
    cy.get(".scores-history").should("have.text", "SCORES")
    cy.get(".history-card").should("exist")
  });

})
