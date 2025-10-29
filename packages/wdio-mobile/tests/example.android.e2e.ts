import { expect } from "chai";
import AndroidHomePage from "../pages/android/HomePage";

describe("Android App basic check (Allure)", () => {
  it("launches app and finds a title element", async () => {
    const exists = await AndroidHomePage.title.isExisting();
    expect(exists).to.be.true;
  });
});