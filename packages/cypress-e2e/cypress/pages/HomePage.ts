export class HomePage {
  visit() { cy.visit("/"); }
  getHeader() { return cy.get("h1"); }
}