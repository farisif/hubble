export default class Header {
    mainURL = "https://www.tokopedia.com/"

    //UI component starts here
    searchbar = "input[placeholder='Cari di Tokopedia']"

    setSearchKeyword(keyword) {
        cy.get(this.searchbar).type(keyword);
        cy.get(this.searchbar).type("{enter}");
        
        //assert URL and searhbar value after keyword applied
        expect(
            cy.url()
                .should("contain", this.mainURL + "search?")
                .should("contain", "q=" + String(keyword).split(" ").join("%20"))
        );
        expect(cy.get(this.searchbar).should("have.value", keyword));
    }
}