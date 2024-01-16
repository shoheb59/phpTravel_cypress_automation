export class LocatorserAuthicate{


    locatorLogin = 
    {
        email: '#email',
        password: '#password',
        loginBtn: '#submitBTN',
        ddAccount: 'Account',
        ddLogin: 'Login',
        userTextVerify: 'demo user'

    }

    openUrl()
    {
        cy.visit(Cypress.env('URL'))
    }
    loginPageNavigation()
    {
        cy.contains(this.locatorLogin.ddAccount).click()
        cy.contains(this.locatorLogin.ddLogin).click()
    }


    enTerEmail(email)
    {
        cy.get(this.locatorLogin.email).type(email);

    }
    enterPass(pass)
    {
        cy.get(this.locatorLogin.password).type(pass)
    }

    submitLogin()
    {

        cy.get(this.locatorLogin.loginBtn).click();
    }

    userVerifiation()
    {
        cy.contains('strong', this.locatorLogin.userTextVerify).should('have.text', this.locatorLogin.userTextVerify);

    }

}