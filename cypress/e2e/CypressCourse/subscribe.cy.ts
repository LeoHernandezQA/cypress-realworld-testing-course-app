describe("Newsletter Suscribe Form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000")
    })

    it("ALLOWS users to subscribe to the email list", () => {
        cy.getByData("email-input").type("leonardo.gomes@venicetech.com.br")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("exist").contains("leonardo.gomes@venicetech.com.br")
    })

    it("does NOT allows an invalid email address", () => {
        cy.getByData("email-input").type("leonardo.gomes")
        cy.getByData("submit-button").click()
        cy.getByData("success-message").should("not.exist")
    })

    it("does NOT allow an already subscribed email", () => {
        cy.getByData("email-input").type("john@example.com")
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message")
            .should("exist")
            .contains("already exists. Please use a different email address.")
    })
})

