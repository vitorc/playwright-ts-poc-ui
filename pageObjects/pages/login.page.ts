import {Locator, Page, expect } from '@playwright/test';
export class loginElements {
    readonly page: Page;
    readonly loginUsernameField: Locator;
    readonly loginPasswordField: Locator;
    readonly loginButton: Locator;

    constructor(page:Page){
        this.page = page;
        this.loginUsernameField = page.locator("#user-name");
        this.loginPasswordField = page.locator("#password");
        this.loginButton = page.locator("#login-button");
    }
    async DoALogin(){
        await this.loginUsernameField.fill("standard_user");
        await this.loginPasswordField.fill("secret_sauce");
        await this.loginButton.click();
    }
}