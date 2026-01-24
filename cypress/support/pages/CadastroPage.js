/// <reference types="cypress" />

/**
 * Page Object para a página de Cadastro
 * Centraliza seletores e ações da página de cadastro
 */
class CadastroPage {

  // ========================================
  // SELETORES (Elementos da página)
  // ========================================

  elements = {
    // Campos do formulário
    campoNome: () => cy.get('#user'),
    campoEmail: () => cy.get('#email'),
    campoSenha: () => cy.get('#password'),

    // Botões
    btnCadastrar: () => cy.contains('button', 'CADASTRAR', { matchCase: false }),
    btnOk: () => cy.contains('button', 'OK', { matchCase: false }),

    // Mensagens de erro
    erroNome: () => cy.get('#errorMessageFirstName', { timeout: 8000 }),
    erroEmail: () => cy.contains('O campo e-mail deve ser prenchido corretamente'),
    erroSenha: () => cy.get('#errorMessageFirstName', { timeout: 8000 }),

    // Mensagens de sucesso
    msgSucesso: () => cy.contains('Cadastro realizado'),

    // Header
    logo: () => cy.get('.header-logo'),
    linkCadastro: () => cy.contains('a, button', 'Cadastro', { matchCase: false })
  };

  // ========================================
  // AÇÕES (Métodos que interagem com a página)
  // ========================================

  /**
   * Acessa a página inicial e navega para cadastro
   */
  acessarPaginaCadastro() {
    cy.visit('/').get('.header-logo');
    this.elements.linkCadastro().click();
    cy.url({ timeout: 8000 }).should('include', '/register');
    return this; // Permite encadeamento de métodos
  }

  /**
   * Preenche o campo nome
   * @param {string} nome - Nome do usuário
   */
  preencherNome(nome) {
    this.elements.campoNome().clear().type(nome);
    return this;
  }

  /**
   * Preenche o campo email
   * @param {string} email - Email do usuário
   */
  preencherEmail(email) {
    this.elements.campoEmail().clear().type(email);
    return this;
  }

  /**
   * Preenche o campo senha
   * @param {string} senha - Senha do usuário
   */
  preencherSenha(senha) {
    this.elements.campoSenha().clear().type(senha);
    return this;
  }

  /**
   * Limpa o campo nome
   */
  limparNome() {
    this.elements.campoNome().clear();
    return this;
  }

  /**
   * Preenche todos os campos do formulário de cadastro
   * @param {string} nome - Nome do usuário
   * @param {string} email - Email do usuário
   * @param {string} senha - Senha do usuário
   */
  preencherFormularioCadastro(nome, email, senha) {
    if (nome) this.preencherNome(nome);
    if (email) this.preencherEmail(email);
    if (senha) this.preencherSenha(senha);
    return this;
  }

  /**
   * Clica no botão Cadastrar
   */
  clicarCadastrar() {
    this.elements.btnCadastrar().click();
    return this;
  }

  /**
   * Clica no botão OK do modal de sucesso
   */
  clicarOk() {
    this.elements.btnOk().click();
    return this;
  }

  // ========================================
  // VALIDAÇÕES (Asserções)
  // ========================================

  /**
   * Valida que a mensagem de erro do nome está visível
   * @param {string} mensagem - Mensagem esperada
   */
  validarErroNome(mensagem) {
    this.elements.erroNome()
      .should('be.visible')
      .and('contain', mensagem);
    return this;
  }

  /**
   * Valida que a mensagem de erro do email está visível
   */
  validarErroEmail() {
    this.elements.erroEmail().should('be.visible');
    return this;
  }

  /**
   * Valida que a mensagem de erro da senha está visível
   * @param {string} mensagem - Mensagem esperada
   */
  validarErroSenha(mensagem) {
    this.elements.erroSenha()
      .should('be.visible')
      .and('contain', mensagem);
    return this;
  }

  /**
   * Valida que o cadastro foi realizado com sucesso
   */
  validarCadastroSucesso() {
    this.elements.msgSucesso().should('be.visible');
    this.elements.btnOk().should('be.visible');
    return this;
  }

  /**
   * Valida que está na URL de cadastro
   */
  validarUrlCadastro() {
    cy.url().should('include', '/register');
    return this;
  }
}

// Exporta uma instância da classe
export default new CadastroPage();
