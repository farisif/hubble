export default class MainPage {
    // Recording can be viewed at https://drive.google.com/file/d/1V7nd179tmkC8g_GanQZN5dE9OUNkF_0B/view?usp=sharing
    //This script is mplemented on Cypress
    //Implemented with only 1 method & 1 page object, to save time
    pageURL = "https://www.shopee.co.id/"

    //UI
    categorySection = ".shopee-header-section__content";
    categoryGrid =  ".home-category-list__category-grid";

    searchResultList = ".shopee-search-item-result__items";
    searchResultItem = ".shopee-search-item-result__item";
    
    loginUsernameForm = "input[placeholder='No. Handphone/Username/Email']"
    loginPasswordForm = "input[placeholder='Password']"

    test(){
        cy.visit(this.pageURL);

        // homepage
        cy.scrollTo("bottom");
        cy.get(this.categorySection).find(this.categoryGrid).its('length').then((length) => {
            //ignore the promo modal
            cy.get(this.categorySection).find(this.categoryGrid).eq(length - 5).click({force: true});
        })

        // category details page
        cy.get(this.searchResultList).find(this.searchResultItem).eq(2).click();
        
        // product details page
        // assert user at login page
        // assert user should see login form
        cy.get("button").contains("beli sekarang").click();
        expect(cy.url().should("contains", "buyer/login?next="));
        expect(cy.get(this.loginUsernameForm).should("be.visible"));
        expect(cy.get(this.loginPasswordForm)
            .should("be.visible"));
        expect(cy.get("button").contains("Log in")
            .should("be.disabled")
            .should("be.visible"));
    }
}