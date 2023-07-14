describe('Ver tela de login', () => {
  beforeEach(() => {
    cy.visit('http://a1aaa408818b145dbb82eacaa2d35368-588005589.sa-east-1.elb.amazonaws.com')

    cy.intercept("https://demhcnslkt3b9.cloudfront.net/api/price/preorder/search", { fixture: 'preOrder' }).as("OneRegisterResponse")

    cy.fixture("usersPSC").then((users) => {
      cy.get("body > div:nth-child(6) > div > div.ant-modal-wrap > div > div.ant-modal-content > div > div > input:nth-child(2)").type(users.username)
      cy.get("body > div:nth-child(6) > div > div.ant-modal-wrap > div > div.ant-modal-content > div > div > input:nth-child(3)").type(users.password)
      cy.get("body > div:nth-child(6) > div > div.ant-modal-wrap > div > div.ant-modal-content > div > div > div > button").should('be.enabled').click()
    })

   cy.wait('@OneRegisterResponse')

    /*cy.intercept("https://demhcnslkt3b9.cloudfront.net/api/price/preorder/search", (req) => {
      req.continue(res => {
        res.body.data.data = []
      })
    }).as("EmptyPreOrderTableResponse")*/
  })

  it('Nome do usuário logado é apresentado corretamente', () => {
    cy.get(".wrapper-names").find("p").should('contain.text', 'Leonardo Gomes Hernandez Hernandez Hernandez')
  })

  it('Usuário logado foi encontrato na lista de usuários cadastrados', () => {
    cy.get(".btn-menu").as("menuBTN")
    cy.get("@menuBTN").click({ multiple: true })

    cy.get("#simple-menu > div > ul > li > a > span").contains("Usuários").as("menuUsuariosBTN")
    cy.get("@menuUsuariosBTN").click()

    cy.get("td").should("contain.text", "Leonardo Gomes Hernandez Hernandez Hernandez")
  })
})