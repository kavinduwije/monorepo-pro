import type { Options } from "@wdio/types";

export const config: Options.Testrunner = {
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  services: [["browserstack", { browserstackLocal: false }]],
  runner: "local",
  framework: "mocha",
  specs: ["./tests/**/*.ts"],
  reporters: [["allure", { outputDir: "allure-results" }], "spec"],
  capabilities: [{
    browserName: "chrome",
    "bstack:options": { os: "Windows", osVersion: "11", buildName: "wdio-web", sessionName: "sample" }
  }],
  baseUrl: process.env.BASE_URL || "https://webdriver.io",
  mochaOpts: { ui: "bdd", timeout: 60000 },
  autoCompileOpts: { autoCompile: true, tsNodeOpts: { transpileOnly: true, files: true } }
};
export default config;