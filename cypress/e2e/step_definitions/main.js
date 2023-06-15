import { Given, When } from "cypress-cucumber-preprocessor/steps";
import MainPage from "../page_objects/mainPage";

const mainPage = new MainPage();

Given("user already visited Tokopedia website", () => {
    cy.visit(
        "www.tokopedia.com",
        { headers: { "Accept-Encoding": "gzip, deflate" } }
    );
});

When("user clear the searchbar keyword", (keyword) => {
    mainPage.header.clearSearchBar();
});

When("user searches {string} on searchbar", (keyword) => {
    mainPage.searchProduct(keyword);
});