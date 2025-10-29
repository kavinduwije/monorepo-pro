import HomePage from "../pages/HomePage";
import { expect } from "chai";

describe("WebdriverIO web + Allure", () => {
  it("should open homepage and see a header", async () => {
    HomePage.open();
    await expect(await HomePage.header.isExisting()).to.be.true;
  });
});