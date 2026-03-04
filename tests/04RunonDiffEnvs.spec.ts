import { test } from '../fixtures/fixtures';

test('Run the Same Test on Diff Envs', async({page}) =>{
    await page.goto('/login');
    await page.pause();
})

// In playwright.config.ts
// use: {
//     baseURL: process.env.BASE_URL,
// }


//Open Git Bash > BASE_URL=https://www.facebook.com npx playwright test tests/04RunonDiffEnvs.spec.ts --headed --project chromium

//Open Powershell 
//$env:BASE_URL="https://www.facebook.com"
//npx playwright test tests/04RunonDiffEnvs.spec.ts --headed --project=chromium