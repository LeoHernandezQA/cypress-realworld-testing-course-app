import usersPSC from '../../fixtures/usersPSC.json'

describe('Ver tela de login', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.intercept("https://demhcnslkt3b9.cloudfront.net/api/price/preorder/search",
      { fixture: 'preOrder' })
      .as("OneRegisterResponse")

    cy.login(usersPSC.username, usersPSC.password)
    
    // cy.fixture("usersPSC").then((users) => {
    //   cy.login(users.username, users.password)
    // })

    cy.wait('@OneRegisterResponse')

    /*https://demhcnslkt3b9.cloudfront.net/api/price/authentication/token*/

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
    cy.location('pathname').should('eq', '/users')

    cy.get("td").should("contain.text", "Leonardo Gomes Hernandez Hernandez Hernandez")
  })
})