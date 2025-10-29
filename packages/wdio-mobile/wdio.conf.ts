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
  logLevel: "info",
  baseUrl: "http://localhost:4723/wd/hub",
  waitforTimeout: 20000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [["appium", { args: { basePath: "/wd/hub" } }]],
  capabilities: [{
    platformName: "Android",
    "appium:automationName": "UiAutomator2",
    "appium:deviceName": process.env.ANDROID_DEVICE_NAME || "Android Emulator",
    "appium:platformVersion": process.env.ANDROID_PLATFORM_VERSION || "14",
    "appium:app": process.env.ANDROID_APP_PATH || "./apps/sample.apk",
    "appium:autoGrantPermissions": true,
    "appium:newCommandTimeout": 120
  }],
  mochaOpts: { ui: "bdd", timeout: 120000 },
  autoCompileOpts: { autoCompile: true, tsNodeOpts: { transpileOnly: true, files: true } },
  outputDir: ".report"
};
export default config;