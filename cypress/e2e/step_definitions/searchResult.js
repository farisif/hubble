import { When, Then } from "cypress-cucumber-preprocessor/steps";
import SearchResultPage from "../page_objects/searchResultPage";

const searchResultPage = new SearchResultPage();

When("user set {int} as minimum price filter", (amount) => {
    searchResultPage.setMinPriceFilter(amount);
});

When("user set {int} as maximum price filter", (amount) => {
    searchResultPage.setMaxPriceFilter(amount);
});