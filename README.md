# MoneyHash Playwright E2E Testing Framework

MoneyHash Playwright E2E Testing Framework


## IDE Setup

- Clone the repository to your local system
- Open the project in Visual Studio Code and open the terminal
  - Make sure the path to the project is correct `<local_path>\playwright-e2e-tests`
- In the terminal, execute the following command: ```npm install```
  - The command will install all found in the package.json


## Launch Playwright and Execute Test Cases

Open the terminal inside `<local_path>\playwright-e2e-tests` and use the following commands to:

- Open the Playwright UI to execute test cases against default environment: `npx playwright test --ui`
- Execute all test cases without opening the Playwright UI against default environment: `npx playwright test`
- Environment variables:
  - `ENV`, which can have value `prod` / `local` / , depending on which environment you would like to execute your tests (if not defined, `prod` will be used by default)


![Playwright Tests Reports](/docs/imgs/Playwright-Tests-Reports.png)

There are 3 types of reports:

1. Regular Playwright HTML Reports, without trend history
2. Monocart Report, with trend history
3. Allure Report, with trend history