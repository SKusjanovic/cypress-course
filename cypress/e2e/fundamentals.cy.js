describe('Fundamentals tests', () => {
  beforeEach(()=>{
    cy.visit('/fundamentals')
  })
  it('Contains correct header text', () => {
    cy.getDataTest('fudamentals-header').should('contain.text','Testing Fundamentals')
    //cy.get('[data-test="fudamentals-header"]').contains(/Testing Fundamentals/i)
    //cy.get('[data-test="fudamentals-header"]').should('contain.text','Testing Fundamentals')
  })

  it('Accordion works correctly', () => {
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
  })
})