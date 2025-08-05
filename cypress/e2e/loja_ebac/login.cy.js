describe('Testando funcionalidade login', () => {
    
    it('Deve Fazer login com sucesso', () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
        cy.get('#username').type('binho@teste.com.br')
        cy.get('#password').type('F@bioclaro')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, binho')
    })
})