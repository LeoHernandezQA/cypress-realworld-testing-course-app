describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  describe('template spec', () => {
    it("Course: Testing Your First Next.js Application", () => {
      cy.getByData("course-0").find("a").contains("Get started").as("getstartedbtn")
      cy.get("@getstartedbtn").click()
      cy.location("pathname").should("equal", "/testing-your-first-application")
    })
  })
})
