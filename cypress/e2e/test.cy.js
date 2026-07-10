describe('Ma session d\'entraînement QA', () => {

  it('Vérifie le message d\'erreur avec de mauvais identifiants', () => {
    // 1. Aller sur le site
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('zebi')
    cy.get('[data-test="password"]').type('bjr')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').should('be.visible')
  })

  it('Vérifie la connexion réussie avec un bon utilisateur', () => {
    cy.login('standard_user', 'secret_sauce')
    
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('be.visible').and('contain', 'Products')
  })

})