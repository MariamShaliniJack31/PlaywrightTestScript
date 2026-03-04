//import {test, expect} from '@playwright/test'; 
//Using Custom Page Object Fixtures, so import test from Fixtures
import { test } from '../fixtures/fixtures';
import testData from '../testData/demoblaze.json';

const URL       =   testData.url;
const username  =   testData.username
const password  =   testData.password;

test('Custom Page Object Fixtures', async({page, loginPage, homePage}) =>{

    await loginPage.goToApplication(URL);
    await loginPage.loginToApplication(username, password);
    await homePage.validateNameOfUser(username);
})