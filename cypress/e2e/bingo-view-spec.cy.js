import { aliasQuery, aliasMutation, hasOperationName } from '../utils/graphql-test-utils'

describe('bingo-view', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/swolify-fe")
        cy.get(".start-button").click()
        cy.get(".user-icon-background").eq(1).click()
        cy.get("input[name=upperbody]").click()
        cy.get(".start-game-btn").click()
      })

    it('Should contain the Swolify sidebar', () => {
      cy.get(".sidebar-visable").should("exist")
    });

    it('Should contain the excercises', () => {
      cy.get(".excercise-selection").should("exist")
    });

    it('Should let a user click an excercise', () => {
      cy.get(".excercise-list").eq(1).click()
    });

    it('Should display a modal', () => {
      cy.get(".excercise-list").eq(1).click()
      cy.get(".modal-style").should("exist")
    })
    
  it('Should close the modal when a user clicks "complete"', () => {
    cy.get(".excercise-list").eq(1).click()
    cy.get(".modal-style").should("exist")
    cy.get(".complete-button").click()
  }) 

  it('Should flip the excercise selected on the bingo board', () => {
    cy.get(".excercise-list").eq(1).click()
    cy.get(".modal-style").should("exist")
    cy.get(".complete-button").click()
    cy.get(".BingoSquareComplete").should("exist")
  })

})

