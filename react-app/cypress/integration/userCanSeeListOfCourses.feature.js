describe('User can see a list of all courses', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('is expected to display 7 courses', () => {
    cy.get('[data-cy=course]').should('have.length', 7)
  })

  it('is expected to display the content of the courses', () => {
    cy.get('[data-cy=course]')
      .first()
      .within(() => {
        cy.get('[data-cy=title]').should('contain', 'Work The Web')
        cy.get('[data-cy=description]').should(
          'contain',
          "Do you want to understand how applications for the web are built, but don’t know where to start? This workshop is for everyone that is curious about programming for the internet and wants to gain new skills in web development and basic data science. We'll be covering the basics of HTML, CSS, and JavaScript, and by the end of the day, you'll have an overview of the big picture of how internet applications are structured and how you can Work The Web - not only consume it."
        )
        cy.get('[data-cy=category]').should('contain', 'workshops')
        cy.get('[data-cy=instructors]').should(
          'contain',
          'Thomas Ochman, Emma-Maria Thalén'
        )
        cy.get('[data-cy=info]').should(
          'contain',
          'up to 1 day on-site.(2 to 7 hours depending on audience, please contact us for deetails) This course can be delivered as a mix of theory sessions and code-along practical examples or strictly as a demo session.'
        )
        cy.get('[data-cy=price]').should(
          'contain',
          'From 1 000 SEK - €100 (Contact us for details)'
        )
      })
  })
})
