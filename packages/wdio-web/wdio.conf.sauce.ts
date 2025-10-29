import type { Options } from "@wdio/types";

export const config: Options.Testrunner = {
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY,
  services: [["sauce", { sauceConnect: false }]],
  runner: "local",
  framework: "mocha",
  specs: ["./tests/**/*.ts"],
  reporters: [["allure", { outputDir: "allure-results" }], "spec"],
  capabilities: [{
    platformName: "Windows 11",
    browserName: "chrome",
    browserVersion: "latest"
  }],
  baseUrl: process.env.BASE_URL || "https://webdriver.io",
  mochaOpts: { ui: "bdd", timeout: 60000 },
  autoCompileOpts: { autoCompile: true, tsNodeOpts: { transpileOnly: true, files: true } }
};
export default config;