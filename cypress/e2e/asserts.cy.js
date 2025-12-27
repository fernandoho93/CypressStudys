/// <reference types="cypress" />

describe('Assets', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
  });

  it('Verificar se o elemento esta visivel', () => {
    cy.visit('/');

    cy.get('.fa-user').click();

    cy.url().should('include', '/login');
    cy.get('.account_form > h3')
      .should('be.visible')
      .and('contain', 'Login');
  });

  it('confirma que a pagina de login aparece', () => {
    cy.visit('/login');

    cy.url().should('include', '/login');
    cy.contains('h3', 'Login').should('be.visible');
  });

  it('valida o titulo de login com then', () => {
    cy.visit('/login');

    cy.get('.account_form > h3').then(($heading) => {
      const text = $heading.text().trim();
      expect(text).to.eq('Login');
    });
  });
});
