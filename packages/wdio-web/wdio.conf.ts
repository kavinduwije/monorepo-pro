import type { Options } from "@wdio/types";

export const config: Options.Testrunner = {
  runner: "local",
  framework: "mocha",
  specs: ["./tests/**/*.ts"],
  reporters: [
    "spec",
    ["allure", { outputDir: "allure-results", disableMochaHooks: false }]
  ],
  maxInstances: 1,
  capabilities: [{
    browserName: "chrome",
    "goog:chromeOptions": { args: ["--headless=new","--disable-gpu","--window-size=1280,800"] }
  }],
  logLevel: "info",
  baseUrl: process.env.BASE_URL || "https://webdriver.io",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [["chromedriver", { args: ["--silent"] }]],
  mochaOpts: { ui: "bdd", timeout: 60000 },
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: { transpileOnly: true, files: true }
  },
  outputDir: ".report"
};
export default config;