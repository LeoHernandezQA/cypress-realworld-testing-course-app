// cypress/e2e/spec.cy.js
import users from '../../fixtures/users.json'

it('loads the same object', () => {
  cy.fixture('users').then((usersFixture) => {
    expect(users, 'the same data').to.deep.equal(usersFixture)
  })
})