# Automation Monorepo **Pro** (Cypress, Playwright, WDIO, Appium)

📊 Allure reporting  |  🐳 Docker ready  |  ☁️ BrowserStack/Sauce templates  |  🤖 Android emulator helper scripts

## Install
```bash
npm run install:all
```

## Headsup!!! ✋

```
Update to a newer build of Node 20 (e.g. nvm install 20.12.2 && nvm use 20.12.2) 
```

## Run 🚀
- **Cypress:** `npm run -w cypress-e2e test`
- **Playwright:** `npm run -w playwright-e2e install:browsers && npm run -w playwright-e2e test`
- **WDIO (web):** `npm run -w wdio-web test`
- **WDIO + Appium (Android):** `npm run -w wdio-mobile test` (needs emulator/device + APK)

## Allure 📊
Each project outputs `allure-results`; then:
```
npm run -w <project> allure:generate
npm run -w <project> allure:open
```
For example here : 
```
npm run -w playwright-e2e allure:generate
npm run -w playwright-e2e allure:open
```

## Docker 🐳
```
docker compose -f docker/docker-compose.yml build
docker compose -f docker/docker-compose.yml run --rm playwright
docker compose -f docker/docker-compose.yml run --rm cypress
# Appium server:
docker compose -f docker/docker-compose.yml up appium
```

## Cloud grids (WDIO Web)
- BrowserStack: `wdio run packages/wdio-web/wdio.conf.browserstack.ts`
  - Env: `BROWSERSTACK_USERNAME`, `BROWSERSTACK_ACCESS_KEY`, `BASE_URL`
- Sauce Labs: `wdio run packages/wdio-web/wdio.conf.sauce.ts`
  - Env: `SAUCE_USERNAME`, `SAUCE_ACCESS_KEY`, `BASE_URL`

## Android Helpers
- `scripts/android/setup-android-sdk.sh` – installs SDK + AVD (Pixel_7_API_34)
- `scripts/android/start-emulator.sh` – launches emulator
