describe('form tests', () => {
    beforeEach(() => {
        cy.visit('/forms')
    })
    it('Test suscribe form', ()=>{
        cy.contains(/Testing Forms/i)
        cy.getDataTest('subscribe-form').find('input').as('subscribe-input')
        cy.get('@subscribe-input').type('skusjanovicb@gmail.com')
        cy.contains(/Successfully subbed: skusjanovicb@gmail.com!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Successfully subbed: skusjanovicb@gmail.com!/i).should('exist')
        cy.wait(3000)
        cy.contains(/Successfully subbed: skusjanovicb@gmail.com!/i).should('not.exist')

        cy.get('@subscribe-input').type('skusjanovicb@gmail.cl')
        cy.contains(/Invalid email: skusjanovicb@gmail.cl!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/Invalid email: skusjanovicb@gmail.cl!/i).should('exist')
        cy.wait(3000)
        cy.contains(/Invalid email: skusjanovicb@gmail.cl!/i).should('not.exist')

        cy.contains(/fail!/i).should('not.exist')
        cy.getDataTest('subscribe-button').click()
        cy.contains(/fail!/i).should('exist')

    })
})