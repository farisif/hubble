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

When("user redirects to the next search result page", () => {
    searchResultPage.goToNextPage();
});

When("user selects {string} as store type filter", (type) => {
    searchResultPage.setStoreTypeFilter(type);
});

When("write first product name on a file", () => {
    searchResultPage.writeOnFile();
});

Then("user should be able to ensure all product name on search result page has keyword {string}", (keyword) => {
    searchResultPage.assertProductNameByKeyword(keyword);
});