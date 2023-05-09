import Header  from "../component_objects/header";
import Footer from "../component_objects/footer";

export default class SearchResultPage {
    mainURL = "https://www.tokopedia.com/"

    //UI component starts here
    header = new Header();
    footer = new Footer();

    filterSection = "[data-testid='cntrBlockFilter']"
    minPriceFilter = "input[data-testid='iptSRPMinPriceFilter']"
    maxPriceFilter = "input[data-testid='iptSRPMaxPriceFilter']"

    sortButton = "button[aria-haspopup='listbox']"
    dropdownModal = "div[aria-modal='true']"

    setMinPriceFilter(amount) {
        this.footer.waitForFooterRender();

        cy.get(this.minPriceFilter).type(amount);
        cy.get(this.minPriceFilter).type("{enter}");
        
        //assert URL query param and filter value after amount applied
        expect(
            cy.url()
                .should("contain", this.mainURL + "search?")
                .should("contain", "pmin=" + String(amount))
        );
        expect(cy.get(this.minPriceFilter)
            .should("have.value", amount.toLocaleString().split(",").join(".")));
    }

    setMaxPriceFilter(amount) {
        this.footer.waitForFooterRender();
        
        cy.get(this.maxPriceFilter).type(amount);
        cy.get(this.maxPriceFilter).type("{enter}");
        
        //assert URL query param and filter value after amount applied
        expect(
            cy.url()
                .should("contain", this.mainURL + "search?")
                .should("contain", "pmax=" + String(amount))
        );
        expect(cy.get(this.maxPriceFilter)
            .should("have.value", amount.toLocaleString().split(",").join(".")));
    }

    setSortedBy(value){
        this.footer.waitForFooterRender();

        cy.get(this.sortButton).click();
        cy.get(this.dropdownModal).contains(value).click();

        let sortQueryParamVal;
        cy.log(String(value));
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
                .should("contain", this.mainURL + "search?")
                .should("contain", "ob=" + sortQueryParamVal)
        );
        expect(cy.get(this.sortButton)
            .should("have.text", value));
    }
}