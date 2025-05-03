// SMOKETEST
// Login e Logout
// Menu lateral
// Validar o carregamento das telas do sistema
  // Validar o Dashboard
  // Validar o modulo Pim
  // Validar o admin
  // Validar o time
  // Validar o recruitment
  // Validar o performance
// Validar o modulo pim
  // Deve adicionar um novo funcionario
  // Pesquisar funcionario
// Validar o modulo admin
  // Editar usuarios
//------------------------------------------------------------
describe('Autenticação', () => {
  beforeEach(() => {
    cy.loginSession()
  })
  it('Login', () => {})

  it('Logout', () => {
    cy.getLocations()

    cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
    cy.contains('Logout').click()
    cy.get('.orangehrm-login-branding').should('be.visible')
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    cy.get('.oxd-brand-banner > img').should('not.exist')
  })
})

describe('Menu Lateral', () => {
  beforeEach(() => {
    cy.loginSession()
    cy.getLocations()
  })

  it('Validar se o menu aparece', () => {
    cy.get('[class="oxd-navbar-nav"]').as('menu').should('be.visible')

    cy.get('@menu').contains('Admin' + 'PIM' + 'Leave' + 'Time' + 'Recruitment' + 'My Info' + 'Performance'  + 'Dashboard' + 'Directory' + 'Maintenance' + 'Claim' + 'Buzz').should('be.visible')
  })

  it('Validar a pesquisa', () => {
    cy.get('.oxd-input').type('PIM')
    cy.get('[class="oxd-navbar-nav"]').contains('PIM').should('be.visible')
    cy.get('[class="oxd-navbar-nav"]').contains('Admin').should('not.exist')
  })
})