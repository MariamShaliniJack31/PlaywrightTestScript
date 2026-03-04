import { test } from '../fixtures/fixtures';

test("Frames using options", async({page , loginPage, letCodeFramePage}) =>{

    await loginPage.goToApplication('https://letcode.in/frame');

    const firstName = await letCodeFramePage.findLocator('input[name="fname"]', {frame : '#firstFr'})
    await firstName.fill("Hi");
})