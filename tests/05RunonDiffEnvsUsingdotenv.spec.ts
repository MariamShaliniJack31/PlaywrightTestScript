import { test } from '../fixtures/fixtures';
import dotenv from 'dotenv';

dotenv.config( {
    path: `.env.prod`,
    override: true                          //It will take from Global Env, if you dont give override
})

test('Run the Same Test on Diff Envs Using dotenv plugin', async({page}) =>{
    console.log(process.env.BASE_URL);
    console.log(process.env.USERNAME);
    console.log(process.env.PASSWORD);
    await page.goto(process.env.BASE_URL);
    await page.pause();
})

//npx playwright test tests/05RunonDiffEnvsUsingdotenv.spec.ts --headed --project=chromium
