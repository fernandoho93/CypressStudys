describe('Iteracoes', () => {
  it('exemplo de interacao', () => {
    cy.visit('/');
    cy.get('body');

    cy.get('.form-control')
      .type('usuario@teste.com');

    cy.get('button[name="subscribe"]').click();
    cy.get('button.swal2-confirm.swal2-styled').click();
  });
});
