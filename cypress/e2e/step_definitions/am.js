import { When } from "cypress-cucumber-preprocessor/steps";
import AmarthaPage from "../page_objects/amPage";

const amarthaPage = new AmarthaPage();

When("user login using {string} with {string}", (username, password) => {
    amarthaPage.login(username, password);
    amarthaPage.assertSuccessLogin();
})

When("user login using incorrect credentials", () => {
    amarthaPage.login("asd", "asdasd");
    amarthaPage.assertFailedLogin();
})