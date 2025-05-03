import data from '../fixtures/data.json';

Cypress.Commands.add('loginSession', () => { //faz o login guardando a sessão
  cy.session('login', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('[name="username"]').type(data.loginName);
    cy.get('[name="password"]').type(data.loginPassword);
    cy.get('.oxd-button').click();
    cy.get('.oxd-brand-banner > img').should('be.visible')
    },
    {
      validate() {  //para forçar nova sessão se a anterior estiver quebrada
        cy.request({
          method: 'GET',
          url: 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/locations',
          failOnStatusCode: false
        }).then((res) => {
          if (res.status !== 200) throw new Error('Sessão inválida, refazendo login')
        })
      }
    }
  )
})

Cypress.Commands.add('getLocations', () => {  // Esperar o carregamento de todos os endpoints
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/locations').as('getLocations')
    cy.wait('@getLocations').its('response.statusCode').should('eq', 200)
})