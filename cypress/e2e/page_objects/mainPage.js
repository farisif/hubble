import Header  from "../component_objects/header";
import Footer from "../component_objects/footer";

export default class MainPage {
    pageURL = "https://www.tokopedia.com/"

    //UI component starts here
    header = new Header();
    footer = new Footer();

    // object method starts here
    searchProduct(keyword){
        this.header.setSearchKeyword(keyword);

        //assert URL and searhbar value after keyword applied
        expect(
            cy.url()
                .should("contain", this.pageURL + "search?")
                .should("contain", "q=" + String(keyword).split(" ").join("%20"))
        );
        expect(cy.get(this.header.searchbar).should("have.value", keyword));
    }
}