describe('User can filter between course categories', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('is expected to display 6 category tabs', () => {
    cy.get('[data-cy=nav-bar]').find('li').should('have.length', 6)
    cy.get('[data-cy=nav-bar]').find('li').eq(0).should('contain', 'workshops')
    cy.get('[data-cy=nav-bar]').find('li').eq(1).should('contain', 'testing')
    cy.get('[data-cy=nav-bar]').find('li').eq(2).should('contain', 'vue')
    cy.get('[data-cy=nav-bar]')
      .find('li')
      .eq(3)
      .should('contain', 'productivity')
    cy.get('[data-cy=nav-bar]').find('li').eq(4).should('contain', 'node')
    cy.get('[data-cy=nav-bar]').find('li').eq(5).should('contain', 'react')
  })

  it('is expected to filter the courses based on selected category', () => {
    cy.get('[data-cy=nav-bar]').find('li').eq(0).click()
    cy.get('[data-cy=course]').should('have.length', 1)
    cy.get('[data-cy=course]')
      .first()
      .within(() => {
        cy.get('[data-cy=title]').should('contain', 'Work The Web')
      })
    cy.get('[data-cy=nav-bar]').find('li').eq(1).click()
    cy.get('[data-cy=course]').should('have.length', 1)
    cy.get('[data-cy=course]')
      .first()
      .within(() => {
        cy.get('[data-cy=title]').should(
          'contain',
          'Test Automation using Cypress'
        )
      })
  })
})
