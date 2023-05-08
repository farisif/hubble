import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("user redirects to Tokopedia website", () => {
    cy.visit("www.tokopedia.com",{headers: { "Accept-Encoding": "gzip, deflate" }});
});