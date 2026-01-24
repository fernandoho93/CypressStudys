/// <reference types="cypress" />

import CadastroPage from '../support/pages/CadastroPage';

const user_data = require('../fixtures/desafio_valid_data.json');

//Desafio Cypress - Cadastro de Usuario usando Page Object Model
describe('cadastro de usuario', () => {

  beforeEach(() => {
    // Configurar viewport para desktop
    cy.viewport(1280, 720);

    // Acessar página de cadastro usando Page Object
    CadastroPage.acessarPaginaCadastro();
  });

  it('Validar campo nome vazio - deve exibir: O campo nome deve ser preenchido', () => {
    // Cenario: validar mensagem para nome vazio
    CadastroPage
      .limparNome()
      .preencherEmail(user_data.email)
      .preencherSenha(user_data.password)
      .clicarCadastrar()
      .validarErroNome('O campo nome deve ser prenchido');
  });

  it('Validar campo e-mail vazio - deve exibir: O campo e-mail deve ser preenchido corretamente', () => {
    // Cenario: validar mensagem para e-mail vazio
    CadastroPage
      .preencherNome(user_data.name)
      .preencherSenha(user_data.password)
      .clicarCadastrar()
      .validarErroEmail();
  });

  it('Validar campo senha invalido - deve exibir: O campo senha deve ter pelo menos 6 digitos', () => {
    // Cenario: validar mensagem para senha invalida
    CadastroPage
      .preencherNome(user_data.name)
      .preencherEmail(user_data.email)
      .preencherSenha(user_data.invalid_pass)
      .clicarCadastrar()
      .validarErroSenha('O campo senha deve ter pelo menos 6 dígitos');
  });

  it('Cadastro bem-sucedido - exibe mensagem Cadastro realizado e botao OK', () => {
    // Cenario: preencher Nome, E-mail, Senha e validar mensagem de sucesso
    const email = `usuario${Date.now()}@teste.com`;

    CadastroPage
      .preencherFormularioCadastro(user_data.name, email, user_data.password)
      .clicarCadastrar()
      .validarCadastroSucesso();
  });

  it('Cadastro com USUARIO TESTE DOIS - exibe mensagem Cadastro realizado e botao OK', () => {
    // Cenario: cadastro com segundo usuario e senha diferente
    const email = `usuario${Date.now()}+dois@teste.com`;

    CadastroPage
      .preencherNome(user_data.name)
      .preencherEmail(email)
      .preencherSenha(user_data.password)
      .clicarCadastrar()
      .validarCadastroSucesso();
  });
});

