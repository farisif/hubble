export default class Header {
    mainURL = "https://www.tokopedia.com/"

    //UI component starts here
    searchbar = "input[placeholder='Cari di Tokopedia']"

    setSearchKeyword(keyword) {
        cy.get(this.searchbar).type(keyword);
        cy.get(this.searchbar).type("{enter}");
    }

    clearSearchBar(){
        cy.get(this.searchbar).clear();
    }
}