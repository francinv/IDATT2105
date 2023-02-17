describe("Successfull submission test", () => {
  it("successfull submission of contact form", () => {
    cy.visit("http://127.0.0.1:5173/contact");
    cy.get("input[name='name']").type("John Doe");
    cy.get("input[name='email']").type("john@mail.com");
    cy.get("textarea[name='message']").type(
      "Hello, this is a message from John."
    );
    cy.get("button[type='submit']").click();

    cy.get(".form-input-container").not("p");
    cy.get(".success-message").should("be.visible");
    cy.get(".success-message")
      .find("p")
      .should("have.text", "Takk for din tilbakemelding!");
    cy.get(".success-message").should(
      "have.css",
      "background-color",
      "rgba(0, 255, 0, 0.3)"
    );
  });
});
