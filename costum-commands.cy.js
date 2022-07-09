/// <reference types="cypress" />

// Implementation
// describe('Custom commands', () => {
//     it('Should load login page', () => {
//         cy.visit('http://zero.webappsecurity.com/login.html')
//         cy.login('username', 'password')
//     });
// })

//Tugas
describe('Custom commands', () => {
    it('Should load pay-bills page', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.login('username', 'password')
        cy.get('a').contains('Pay Bills').click()
        cy.saving('payee', 'account', 'amount', 'date', 'desc')
    });
})