import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import MainPage from "../page_objects/mainPage";

const mainPage = new MainPage();

Given("user already visited Tokopedia website", () => {
    cy.visit("www.tokopedia.com",{headers: { "Accept-Encoding": "gzip, deflate" }});
});


When("user search {string} on searchbar", (keyword) => {
    mainPage.searchbar.setSearchKeyword(keyword);
});