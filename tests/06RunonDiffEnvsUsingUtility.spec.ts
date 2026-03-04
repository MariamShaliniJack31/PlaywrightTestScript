import { test } from '../fixtures/fixtures';
import { GetEnvName } from '../Utilities/GetEnvName'
import dotenv from 'dotenv';

const envFile = new GetEnvName().getEnvironment();
dotenv.config({ path: envFile , override: true});

test('Run the Same Test on Diff Envs Using Utility', async({page}) =>{
    console.log(process.env.BASE_URL);
    console.log(process.env.USERNAME);
    console.log(process.env.PASSWORD);
    //await page.goto(process.env.BASE_URL);
})

//$env:ENVIRON="prod"
//npx playwright test tests/06RunonDiffEnvsUsingUtility.spec.ts --headed --project chromium


//Bash
//ENVIRON="prod" npx playwright test tests/06RunonDiffEnvsUsingUtility.spec.ts --headed --project chromium

//PowerShell
// npm run test:dev