// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {

    beforeEach(() => {
        cy.visit('/src/index.html')
    })

    it('verifica o título da aplicação', function() {
        cy.title()
          .should('eq', 'Central de Atendimento ao Cliente TAT')
    })
    it('preenche os campos obrigatórios e envia o formulário', function() {
        cy.get('input[name="firstName"]')
          .type('Guilherme', {delay: 0})
          .should('have.value', 'Guilherme')

        cy.get('input[name="lastName"]')
          .type('Falcão', {delay: 0})
          .should('have.value', 'Falcão')

        cy.get('input[type="email"]')
          .type('guilherme@teste.com', {delay: 0})
          .should('have.value', 'guilherme@teste.com')

        cy.get('textarea[name="open-text-area"]')
          .type('Teste de type, get, should e click', {delay: 0})
          .should('have.value', 'Teste de type, get, should e click')

        cy.get('button[type="submit"]')
          .click()

        cy.get('span[class="success"]')
          .should('be.visible')
    })
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        cy.get('input[name="firstName"]')
          .type('Guilherme', {delay: 0})
          .should('have.value', 'Guilherme')

        cy.get('input[name="lastName"]')
          .type('Falcão', {delay: 0})
          .should('have.value', 'Falcão')

        cy.get('input[type="email"]')
          .type('guilherme', {delay: 0})
          .should('have.value', 'guilherme')

        cy.get('textarea[name="open-text-area"]')
          .type('Teste de type, get, should e click', {delay: 0})
          .should('have.value', 'Teste de type, get, should e click')

        cy.get('button[type="submit"]')
          .click()

        cy.get('span[class="error"]')
          .should('be.visible')
    })
    it('verifica se o campo de telefone aceita apenas números', function() {
        cy.get('input[type="number"]')
          .type('guilherme', {delay: 0})
          .should('have.value', '')
    })
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
        cy.get('input[name="firstName"]')
          .type('Guilherme', {delay: 0})
          .should('have.value', 'Guilherme')

        cy.get('input[name="lastName"]')
          .type('Falcão', {delay: 0})
          .should('have.value', 'Falcão')

        cy.get('input[type="email"]')
          .type('guilherme@teste.com', {delay: 0})
          .should('have.value', 'guilherme@teste.com')

        cy.get('input[type="number"]')
          .type('guilherme', {delay: 0})
          .should('have.value', '')

        cy.get('input[type="checkbox"][name="phone"]')
          .click()

        cy.get('textarea[name="open-text-area"]')
          .type('Teste de type, get, should e click', {delay: 0})
          .should('have.value', 'Teste de type, get, should e click')

        cy.get('button[type="submit"]')
          .click()

        cy.get('span[class="error"]')
          .should('be.visible')
    })
    it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {
        cy.get('input[name="firstName"]')
          .type('Guilherme', {delay: 0})
          .should('have.value', 'Guilherme')
          .clear()
          .should('have.value', '')

        cy.get('input[name="lastName"]')
          .type('Falcão', {delay: 0})
          .should('have.value', 'Falcão')
          .clear()
          .should('have.value', '')

        cy.get('input[type="email"]')
          .type('guilherme@teste.com', {delay: 0})
          .should('have.value', 'guilherme@teste.com')
          .clear()
          .should('have.value', '')


        cy.get('textarea[name="open-text-area"]')
          .type('Teste de type, get, should e click', {delay: 0})
          .should('have.value', 'Teste de type, get, should e click')
          .clear()
          .should('have.value', '')

    })
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
        cy.get('button[type="submit"]')
          .click()

        cy.get('span[class="error"')
          .should('be.visible')
    })
})

