import { expect, Page } from '@playwright/test';

export class HomePage{

    private nameofuser      =   '#nameofuser';

    constructor(private page: Page){
    }

    async validateNameOfUser(username : string){
        await expect(this.page.locator(this.nameofuser)).toBeVisible();
        await expect(this.page.locator(this.nameofuser)).toHaveText(`Welcome ${username}`)
    }
}