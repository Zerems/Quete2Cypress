describe('tests d authentification pass',() =>{
    it ('authtification réussie',()=>{
        cy.visit('https://www.backmarket.fr/'),
        cy.get('a[href*="register"]').click()
        cy.wait(2000)
        cy.get('input[id="email-signin"]').type('albinet.remy@gmail.com')
        cy.get('input[data-test="input-field-input"]').first().type('Backmarlket2020') 
        cy.get('[data-test=submit-button-login]').click()
        cy.get('._2nHfIZQXqcC1ULPq_PYyQ').should('contain', 'Adopter un produit')
    })
} )
describe('test authentification fail', () => {
    it('authetification fail',() => {
      cy.visit("https://www.backmarket.fr")
      cy.get('a[href*="register"]').click()
      cy.wait(2000)
      cy.get('input[id="email-signin"]').type('albinet;remy@gmail.com')
      cy.get('input[data-test="input-field-input"]').first().type('blblblb')
      cy.get('[data-test=submit-button-login]').click()
      cy.get('[data-test=login-credential-error]').should('contain', 'Mauvaise combinaison email/mot de passe')
    })
  })