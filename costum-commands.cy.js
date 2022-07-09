/// <reference types="cypress" />

// Implementation
describe('Custom commands', () => {
    it('Should load login page', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.login('username', 'password')
    });
})