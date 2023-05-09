import { When, Then } from "cypress-cucumber-preprocessor/steps";
import SearchResultPage from "../page_objects/searchResultPage";

const searchResultPage = new SearchResultPage();

When("user sets {int} as minimum price filter", (amount) => {
    searchResultPage.setMinPriceFilter(amount);
});

When("user sets {int} as maximum price filter", (amount) => {
    searchResultPage.setMaxPriceFilter(amount);
});

When("user sorts search result by {string}", (value) => {
    searchResultPage.setSortedBy(value);
});