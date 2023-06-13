import { Given, When } from "cypress-cucumber-preprocessor/steps";
import A from "../page_objects/shPage";

const aasd = new A();

When("user A", () => {
 aasd.test();
});