export default class Footer {
    mainURL = "https://www.tokopedia.com/"

    //UI component starts here
    facebookIcon = "img[alt='icon-facebook']"

    waitForFooterRender(){
        cy.scrollTo('bottom');
        cy.get(this.facebookIcon).should("be.visible"); // waiting for footer section to be rendered
    }
}