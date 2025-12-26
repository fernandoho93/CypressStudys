describe('Login', () => {
  beforeEach(() => {
    cy.visit('/login');
  });

  it('login com sucesso 3', () => {
    cy.get('#top_header').as('cabecalho').contains('Login');
    cy.get('@cabecalho').find('.fa-user');

    cy.get('.header-logo');

    cy.get('#user').type('usuario@teste.com');
    cy.get('#password').type('123456');
    cy.get('#btnLogin').click();

    cy.url().should('include', '/my-account');
  });

  it('exibe erro para email invalido', () => {
    cy.get('#user').type('invalido');
    cy.get('#password').type('123456');
    cy.get('#btnLogin').click();

    cy.get('.invalid_input').should('contain', 'E-mail inválido.');
  });

  it('exibe erro para senha curta', () => {
    cy.get('#user').type('usuario@teste.com');
    cy.get('#password').type('123');
    cy.get('#btnLogin').click();

    cy.get('.invalid_input').should('contain', 'Senha inválida.');
  });

  it('permite marcar lembrar e acessar cadastro', () => {
    cy.get('#materialUnchecked').check().should('be.checked');
    cy.get('#createAccount').should('have.attr', 'href', '/register');
  });
});
