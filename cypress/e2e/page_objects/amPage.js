export default class AmarthaPage {
    mainURL = "www.saucedemo.com/";

    // UI components
    usernameField = "input#user-name";
    passwordField = "input#password";
    loginButton = "input#login-button";
    errorMessage = "div.error-message-container";

    inventorySectionContainer = "div#inventory_container"


    // page object methods
    login(username, password){
        cy.visit(this.mainURL)
        cy.get(this.usernameField).type(username);
        cy.get(this.passwordField).type(password);
        cy.get(this.loginButton).click();

    }

    assertSuccessLogin(){
        cy.log("user berhasil login");
        expect(cy.url().should("contains", "inventory.html"));
        expect(cy.get(this.inventorySectionContainer).should("be.exist"));
    }

    
    assertFailedLogin(){
        cy.log("user gagal login");
        expect(cy.get(this.errorMessage)
            .should("be.visible")
            .should("contain.text", "Epic sadface: Username and password do not match any user in this service")
        );
        expect(cy.url().should("contains", this.mainURL));
    }
}