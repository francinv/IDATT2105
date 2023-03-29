describe("Invalid form test", () => {
  it("button disabled if email is invalid", () => {
    cy.visit("http://127.0.0.1:5173/contact")
    cy.get("input[name='name']").type("John Doe")
    cy.get("input[name='email']").type("hell")
    cy.get("textarea[name='message']").type("Hello")

    cy.get(".form-input-container").find("p").should("be.visible")
    cy.get(".form-input-container").find("p").should("have.text", "Ugyldig epost")
    // Disabled button
    cy.get("button[type='submit']").should("be.disabled")
    cy.get("button[type='submit']").should("have.css", "cursor", "not-allowed")
    cy.get("button[type='submit']").should("have.css", "background-color", "rgba(129, 124, 123, 0.5)")
  })
})
