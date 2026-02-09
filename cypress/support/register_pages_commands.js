/// <reference types="cypress" />

Cypress.Commands.add('saveRegister', () => {
       cy.get('#btnRegister')
       .click()
})

Cypress.Commands.add('fillEmail', (email) => {
    cy.get('#email')
       .should('be.visible')
    .type(email)
})

Cypress.Commands.add('fillName', (name) => {
    cy.get('#user')
    .type(name)
})

Cypress.Commands.add('fillPassword', (password) => {
    cy.get('#password')
    .clear()
    .type(password)
})

Cypress.Commands.add('clickCadastrar', () => {
    cy.contains('button', 'CADASTRAR', { matchCase: false })
    .click()
})

Cypress.Commands.add('assertCadastroSucesso', () => {
    cy.contains('Cadastro realizado').should('be.visible')
    cy.contains('button', 'OK', { matchCase: false }).should('be.visible')
})
