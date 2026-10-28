/**
 * Cypress · los tres criterios del duelo.
 *
 * CA1 viene RESUELTO: léanlo, ejecútenlo (npm test) y entiendan cada línea ANTES de escribir los otros dos.
 * Los otros dos están en `it.skip(...)`: cambien `it.skip` por `it` cuando empiecen a implementarlos.
 */
describe('Duelo · tres criterios de aceptación', () => {
  // ------------------------------------------------------------------ EJEMPLO RESUELTO
  it('US-01 CA1: el catálogo muestra 8 productos', () => {
    cy.visit('/');

    // Cypress reintenta el comando y la aserción hasta que se cumplan (o se acabe el tiempo).
    cy.get('h3').should('have.length', 8);
  });

  // ------------------------------------------------------------------ TU TURNO · US-04 CA2
  it('US-04 CA2: no deja agregar 7 mochilas de una vez (stock 6) y avisa', () => {
    it('US-04 CA2: no deja agregar 7 mochilas (stock 6) y avisa', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);

      cy.visit('/');

      cy.get('[data-testid="input-cantidad-mochila"]').clear().type('7');
      cy.get('[data-testid="btn-agregar-mochila"]').click();

      cy.then(() => {
        expect(stub).to.have.been.calledWithMatch(/stock/i);
      });
    });
  });

  // ------------------------------------------------------------------ TU TURNO · US-09 CA1
  it('US-09 CA1: DESC10 descuenta el 10 % del subtotal', () => {
    it('US-09 CA1: el cupón DESC10 descuenta el 10%', () => {
      cy.visit('/');

      cy.get('[data-testid="btn-agregar-cuaderno"]').click();
      cy.get('[data-testid="input-cupon"]').type('DESC10');
      cy.get('[data-testid="btn-aplicar-cupon"]').click();

      cy.get('[data-testid="total-carrito"]').should('contain', '99');
    });
  });
});
