export default class Footer {
    //UI component starts here
    facebookIcon = "img[alt='icon-facebook']"

    waitForFooterRender(){
        cy.scrollTo('bottom');
        cy.get(this.facebookIcon).should("be.visible");
    }
}