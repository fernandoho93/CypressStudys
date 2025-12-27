describe('Iteracoes', () => {
  it('exemplo de interacao', () => {
    cy.visit('/');
    cy.get('body');

    cy.get('.form-control')
      .type('usuario@teste.com');

    cy.get('button[name="subscribe"]').click();
    cy.get('button.swal2-confirm.swal2-styled').click();
  });

  it('cliques variados na pagina inicial', () => {
    // Usa viewport de desktop para que o header (visivel apenas em telas grandes) apareca
    cy.viewport(1280, 720);
    cy.visit('/');

    cy.get('.header-logo').click();
    cy.get('.header-logo').dblclick();
    cy.get('.header-logo').rightclick();
    cy.url().should('contain', 'automationpratice.com.br');

    cy.get('.form-control')
      .click()
      .type('usuario@teste.com');

    cy.get('button[name="subscribe"]').click();
    cy.get('button.swal2-confirm.swal2-styled').click();
  });

  it('CLICK', () => {
    cy.viewport(1280, 720);
    cy.visit('/')
      .get('.header-logo');

    cy.get('.fa-user').click();
    cy.get('.fa-user').dblclick();
    cy.get('.fa-user').rightclick();
    cy.get('.fa-user').click(100, 100, { force: true });
  });

  it('enter na form-control', () => {
    cy.viewport(1280, 720);
    cy.visit('/');

    cy.get('.form-control').type('fernando@outlook.con{enter}');
  });

  it('select - acessar aplicacao', () => {
    cy.viewport(1280, 720);
    cy.visit('https://automationpratice.com.br/');
    cy.url().should('not.include', '/login');

    cy.get('.footer_one_widget')
      .contains(/checkout view two/i)
      .click();

    cy.visit('https://automationpratice.com.br/checkout-two');
    cy.get('#country').select('Colombia');
  });

  it('Checkbox e radio button', () => {
    cy.viewport(1280, 720);
    cy.visit('/');

    cy.get('.footer_one_widget')
      .contains('Checkout View One')
      .click()

    cy.get('#materialUnchecked').check().uncheck();
  });
});
