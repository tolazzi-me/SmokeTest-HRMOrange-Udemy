import data from '../fixtures/data.json';

describe('Validações do módulo PIM', () => {
  beforeEach(() => {
    cy.loginSession()
    cy.getLocations()
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
    cy.contains('Employee Information').should('be.visible')
  })

  it('Deve adicionar um novo funcionário', () => {
    cy.get('.orangehrm-header-container > .oxd-button').click()
    cy.get('.orangehrm-card-container').should('be.visible')
    cy.get('[name="firstName"]').type(data.firstName)
    cy.get('[name="lastName"]').type(data.lastName)
    cy.get('.oxd-button--secondary').click()
    cy.get('.orangehrm-edit-employee-name > .oxd-text').contains(data.fullName).should('be.visible')
  })

  it('Pesquisar funcionário', () => {
    cy.get('[placeholder="Type for hints..."]').first().type(data.firstName)
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
    cy.get('[class="orangehrm-container"]').contains(data.fullName).should('be.visible')
  })
    
  after(() => {
    cy.get('[placeholder="Type for hints..."]').first().clear().type(data.fullName)
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()

    cy.get('[class="orangehrm-container"]').contains(data.fullName).should('be.visible')
    cy.get('[class="oxd-icon bi-trash"]').first().click()
    cy.get('.oxd-button--label-danger').click()
    cy.get('[aria-live="assertive"]').should('be.visible')
  })
})

describe('Validações do módulo Admin', () => {
  beforeEach(() => {
    cy.loginSession()
    cy.getLocations()
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
    cy.contains('System Users').should('be.visible')
  })

  it('Deve editar usuários', () => {
    cy.get('[role="row"]').contains('JamesButler').parents('[role="row"]').find('[class="oxd-icon bi-pencil-fill"]').click()
    cy.get('[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]').last().click()
    cy.contains('Disabled').click()
    cy.get('.oxd-button--secondary').click()

    cy.get('[role="row"]').contains('JamesButler').parents('[role="row"]').contains('Disabled').should('be.visible')

    cy.get('[role="row"]').contains('JamesButler').parents('[role="row"]').find('[class="oxd-icon bi-pencil-fill"]').click()
    cy.get('[class="oxd-icon bi-caret-down-fill oxd-select-text--arrow"]').last().click()
    cy.contains('Enabled').click()
    cy.get('.oxd-button--secondary').click()
    cy.get('[role="row"]').contains('JamesButler').parents('[role="row"]').contains('Enabled').should('be.visible')
  })
})