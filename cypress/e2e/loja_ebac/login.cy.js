describe('Testando funcionalidade login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve Fazer login com sucesso', () => {
        cy.get('#username').type('binho@teste.com.br')
        cy.get('#password').type('F@bioclaro')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, binho')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('binhoteste.com.br')
        cy.get('#password').type('F@bioclaro')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro: O usuário binhoteste.com.br não está registrado neste site')
        cy.get('.woocommerce-error').should('exist')
    })

    it('Deve exibir uma mensagem de erro ao inserir senha inválido', () => {
        cy.get('#username').type('binho@teste.com.br')
        cy.get('#password').type('Fabioclaro')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail binho@teste.com.br está incorreta')
        cy.get('.woocommerce-error > li').should('exist')
    })
})