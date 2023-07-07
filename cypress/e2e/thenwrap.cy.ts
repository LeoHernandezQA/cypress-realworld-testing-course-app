describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  context.only("Testing Then and Wrap in Homepage", () => {
    it('passes', () => {
      cy.getByData("course-0").find("a").contains("Get started").then(($btn) => {
        const cls = $btn.attr("class")
        console.log($btn)
        console.log("Teste")
        cy.log("Cy.log teste")
        cy.wrap($btn).click().should("have.class", cls)
      })
    })
  })

  context('template spec', () => {
    it('passes', () => {
      cy.get("button").then(($btn) => {
        const cls = $btn.attr("class")
      
        cy.wrap($btn).click().should("not.have.class", cls)
      })
    })
  })
})