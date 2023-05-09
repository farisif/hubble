import Header  from "../component_objects/header";
import Footer from "../component_objects/footer";

export default class SearchResultPage {
    pageURL = "https://www.tokopedia.com/search"

    //UI component starts here
    header = new Header();
    footer = new Footer();

    minPriceFilter = "input[data-testid='iptSRPMinPriceFilter']"
    maxPriceFilter = "input[data-testid='iptSRPMaxPriceFilter']"

    sortButton = "button[aria-haspopup='listbox']"
    dropdownModal = "div[aria-modal='true']"

    searchResultContainer = "div[data-testid='divSRPContentProducts']";
    productCard = "div[data-testid='master-product-card']";
    productName = "div[data-testid='spnSRPProdName']";

    paginationComponent = "nav[data-testid='divSRPLazyPagination']"

    // object method starts here
    setMinPriceFilter(amount) {
        this.footer.waitForFooterRender();

        cy.get(this.minPriceFilter).type(amount);
        cy.get(this.minPriceFilter).type("{enter}");
        
        //assert URL query param and filter value after amount applied
        expect(
            cy.url()
                .should("contain", this.pageURL)
                .should("contain", "pmin=" + String(amount))
        );
        expect(cy.get(this.minPriceFilter)
            .should("be.visible")
            .should("have.value", amount.toLocaleString().split(",").join(".")));
    }

    setMaxPriceFilter(amount) {
        this.footer.waitForFooterRender();
        
        cy.get(this.maxPriceFilter).type(amount);
        cy.get(this.maxPriceFilter).type("{enter}");
        
        //assert URL query param and filter value after amount applied
        expect(
            cy.url()
                .should("contain", this.pageURL)
                .should("contain", "pmax=" + String(amount))
        );
        expect(cy.get(this.maxPriceFilter)
            .should("be.visible")
            .should("have.value", amount.toLocaleString().split(",").join(".")));
    }

    setSortedBy(value){
        this.footer.waitForFooterRender();

        cy.get(this.sortButton).click();
        cy.get(this.dropdownModal).contains(value).click();

        //switch case for each sort options
        let sortQueryParamVal;
        switch(String(value)){
            case("Paling Sesuai"):
                sortQueryParamVal = 23;
                break;
            case("Ulasan"):
                sortQueryParamVal = 5;
                break;
            case("Terbaru"):
                sortQueryParamVal = 9;
                break;
            case("Harga Tertinggi"):
                sortQueryParamVal = 4;
                break;
            case("Harga Terendah"):
                sortQueryParamVal = 3;
                break;
        }

        //assert URL query param and filter value after amount applied
        expect(
            cy.url()
                .should("contain", this.pageURL)
                .should("contain", "ob=" + sortQueryParamVal)
        );
        expect(cy.get(this.sortButton)
            .should("be.visible")
            .should("have.text", value));
    }

    assertProductNameByKeyword(keyword) {
        this.footer.waitForFooterRender();

        cy.get(this.searchResultContainer).find(this.productCard).each(($card, index, $list) => {
            cy.get($card).within(() => {
                cy.get(this.productName).invoke('text').then(($name) => {
                    const productCardIndex = index + 1;
                    const splittedKeyword = String(keyword).split(" ");

                    splittedKeyword.forEach((word) => {
                        expect(
                            String($name).toLowerCase()).to.contains(String(word).toLowerCase()
                        );
                    });
                    cy.log("Product #" + productCardIndex +" name is '" + String($name) + "'");
                });
            });
        });
    }
}