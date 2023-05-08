## 1. Pre-requisite
###### a. Install Node JS on your device
More details see https://nodejs.dev/en/learn/how-to-install-nodejs/

###### b. Install Cypress
Install dependencies and necessary setup using
```
npm install
```
Please ensure that you are at the project repository prior above command



## 2. Open Cypress
Open cypress dashboard using
```
npx cypress open
```
Select 'E2E Testing' on Cypress dashboard to continue

Or, you could directly run the script by using
```
npx cypress run --spec cypress/e2e/features/test.feature
```