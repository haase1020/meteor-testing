/// <reference types="cypress" />

describe("Test signup", function () {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("be able to access login page", () => {
    cy.get("h1").should("exist");
  });
});
