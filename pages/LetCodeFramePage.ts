import { Page, Locator } from '@playwright/test';

export class LetCodeFramePage{

    constructor(private page : Page){
    }

    public async findLocator(
        value : string,  
        options ?: {   frame ?: string }
    ): Promise<Locator>{
        if(options?.frame !== undefined) {
            const frame = this.page.frameLocator(options.frame);
            if (!frame) {
                throw new Error(`Frame with name ${options.frame} not found`);
            }
            return frame.locator(value);
        }
        return this.page.locator(value);
    }
}