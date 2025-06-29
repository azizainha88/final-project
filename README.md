# SauceDemo Login Tests with WebDriverIO

This project automates the login feature of [SauceDemo](https://www.saucedemo.com/) using WebDriverIO.

## ✅ Use Cases Covered

- **UC-1**: Submit login form with empty credentials and verify error message.
- **UC-2**: Submit login form with only username and verify "Password is required" message.
- **UC-3**: Submit login form with valid credentials and validate dashboard title.

## ⚙️ Technologies

- Test Automation: WebDriverIO
- Browsers: Chrome, Firefox (parallel execution)
- Test Structure: Page Object Model (POM)
- Selectors: CSS
- Logging: WebDriverIO built-in logger
- Assertions: WebDriverIO `expect()`

## 🚀 How to Run

Install dependencies:

```bash
npm install
