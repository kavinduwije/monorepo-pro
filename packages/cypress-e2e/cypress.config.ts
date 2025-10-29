import { defineConfig } from "cypress";
import allureWriter from "@shelex/cypress-allure-plugin/writer";

export default defineConfig({
  e2e: {
    baseUrl: process.env.BASE_URL || "https://example.cypress.io",
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    }
  },
  video: false,
  screenshotOnRunFailure: true,
  env: {
    allure: true,
    allureResultsPath: "allure-results"
  }
});