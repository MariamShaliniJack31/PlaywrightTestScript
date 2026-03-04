import { test as base } from '@playwright/test';
import { LoginPage }  from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { LetCodeFramePage } from '../pages/LetCodeFramePage';

export const test = base.extend<{ 
    loginPage: LoginPage ;
    homePage: HomePage;
    letCodeFramePage : LetCodeFramePage;
}>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    letCodeFramePage: async ({ page }, use) => {
        await use(new LetCodeFramePage(page));
    }
});