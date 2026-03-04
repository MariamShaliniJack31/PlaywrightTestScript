import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';

import demoblaze from '../testData/demoblaze.json'

const URL       =   demoblaze.url;
const username  =   demoblaze.username
const password  =   demoblaze.password;

test('POM using TestScript', async({page}) =>{

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.goToApplication(URL);
    await loginPage.loginToApplication(username, password);

    await homePage.validateNameOfUser(username);
})