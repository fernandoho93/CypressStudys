/// <reference types="cypress" />
//Desafio Cypress - Cadastro de Usuario
describe('cadastro de usuario', () => {
  const acessarCadastro = () => {
    cy.visit('/')
      .get('.header-logo');
      
    cy.contains('a, button', 'Cadastro', { matchCase: false }).click();
    cy.url({ timeout: 8000 }).should('include', '/register');
  };

  beforeEach(() => {
    cy.viewport(1280, 720);
  });

  it('Validar campo nome vazio - deve exibir: O campo nome deve ser preenchido', () => {
    // Cenario: acessar home, entrar em Cadastro e validar mensagem para nome vazio
    acessarCadastro();

    cy.get('#user').clear();
    cy.get('#email').type('teste@example.com');
    cy.get('#password').type('123456');
    cy.contains('button', 'CADASTRAR', { matchCase: false }).click();

    cy.get('#errorMessageFirstName', { timeout: 8000 })
      .should('be.visible')
      .and('contain', 'O campo nome deve ser prenchido');
  });

  it('Validar campo e-mail vazio - deve exibir: O campo e-mail deve ser preenchido corretamente', () => {
    // Cenario: acessar home, entrar em Cadastro e validar mensagem para e-mail vazio
    acessarCadastro();

    cy.get('#user').clear().type('Usuario Teste');
    cy.get('#password').clear().type('123456');
    cy.contains('button', 'CADASTRAR', { matchCase: false }).click();

    cy.contains('O campo e-mail deve ser prenchido corretamente').should('be.visible');
  });

  it('Validar campo senha invalido - deve exibir: O campo senha deve ter pelo menos 6 digitos', () => {
    // Cenario: acessar home, entrar em Cadastro e validar mensagem para senha invalida
    acessarCadastro();

    cy.get('#user').clear().type('Usuario Teste');
    cy.get('#email').clear().type('teste@example.com');
    cy.get('#password').clear().type('123');
    cy.contains('button', 'CADASTRAR', { matchCase: false }).click();

    cy.get('#errorMessageFirstName', { timeout: 8000 })
      .should('be.visible')
      .and('contain', 'O campo senha deve ter pelo menos 6 digitos');
  });

  it('Cadastro bem-sucedido - exibe mensagem Cadastro realizado e botao OK', () => {
    // Cenario: acessar home, entrar em Cadastro, preencher Nome, E-mail, Senha e validar mensagem de sucesso
    acessarCadastro();

    const email = `usuario${Date.now()}@teste.com`;

    cy.get('#user').clear().type('Usuario Teste');
    cy.get('#email').clear().type(email);
    cy.get('#password').clear().type('123456');
    cy.contains('button', 'CADASTRAR', { matchCase: false }).click();

    cy.contains('Cadastro realizado').should('be.visible');
    cy.contains('button', 'OK', { matchCase: false }).should('be.visible');
  });

  it('Cadastro com USUARIO TESTE DOIS - exibe mensagem Cadastro realizado e botao OK', () => {
    // Cenario: cadastro com segundo usuario e senha 12347
    acessarCadastro();

    const email = `usuario${Date.now()}+dois@teste.com`;

    cy.get('#user').clear().type('USUARIO TESTE DOIS');
    cy.get('#email').clear().type(email);
    cy.get('#password').clear().type('12347');
    cy.contains('button', 'CADASTRAR', { matchCase: false }).click();

    cy.contains('Cadastro realizado').should('be.visible');
    cy.contains('button', 'OK', { matchCase: false }).should('be.visible');
  });
});
