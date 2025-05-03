describe('Validações de telas', () => {
  beforeEach(() => {
    cy.loginSession()
    cy.getLocations()
  })
  it('Validar o Dashboard', () => {
    cy.get('.oxd-topbar-header-title').should('be.visible')
    cy.contains('Time at Work').should('be.visible')
    cy.get(':nth-child(2) > .oxd-sheet').should('be.visible')
  })

  it('Validar o Admin', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')
    cy.get('.oxd-topbar-header-title').should('be.visible')
    cy.get('.oxd-table-filter').should('be.visible')
    cy.contains('System Users').should('be.visible')
    cy.get('[class="orangehrm-paper-container"]').should('be.visible')

  })

  it('Validar o PIM', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
    cy.get('.oxd-topbar-header-title').should('be.visible')
    cy.contains('Employee Information').should('be.visible')
    cy.get('[class="orangehrm-paper-container"]').should('be.visible')
  })

    it('Validar o Time', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/time/viewEmployeeTimesheet')
      cy.get('.oxd-topbar-header-title').should('be.visible')
      cy.get('[class="orangehrm-paper-container"]').should('be.visible')
      cy.contains('Select Employee').should('be.visible')
  })

  it('Validar a Performance', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/performance/searchEvaluatePerformanceReview')
    cy.get('.oxd-topbar-header-title').should('be.visible')
    cy.get('[class="orangehrm-paper-container"]').should('be.visible')
    cy.contains('Employee Reviews').should('be.visible')
  })

  it('Validar o Recruitment', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates')
    cy.get('.oxd-topbar-header-title').should('be.visible')
    cy.get('[class="orangehrm-paper-container"]').should('be.visible')
    cy.contains('Candidates').should('be.visible')
  })
})
