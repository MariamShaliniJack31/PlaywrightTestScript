import { Page } from "@playwright/test";

export class LoginPage{                                             //Named Export

    private loginLink       =   '#login2';
    private username        =   '#loginusername';
    private password        =   '#loginpassword';
    private loginbutton     =   '.btn.btn-primary:has-text("Log in")';
                                //this.page.getByRole('button', { name: 'Log in' })

    constructor(private page : Page){
    }

    async goToApplication(URL : string){
        await this.page.goto(URL);
    }

    async loginToApplication(username : string, password : string){
        // await this.page.waitForSelector(this.loginLink);         //Automatically waits
        await this.page.locator(this.loginLink).click();

        await this.page.locator(this.username).fill(username);
        await this.page.locator(this.password).fill(password);
        await this.page.locator(this.loginbutton).click();
    }
}

export default LoginPage;               //Default Export