import { HomePage } from "../pages/HomePage";

describe("Sample Cypress + Allure", () => {
  const home = new HomePage();
  it("opens homepage and checks header", () => {
    home.visit();
    home.getHeader().should("exist");
  });
});