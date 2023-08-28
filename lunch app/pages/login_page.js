import { expect } from "@playwright/test";

export class LoginPage{
        constructor(page){
        this.page = page;
        this.userData = page.locator('input');
    }

    async navigateToLoginPage(){
        await this.page.goto('https://lunch.devbstaging.com/login-password');
    }

    async fillLoginData(){
        await this.userData.first().fill('viktorija.gardauskiene@sft.com');
        await this.userData.last().fill('tester165');
    }

    async fillAdminLoginData(){
        await this.userData.first().fill('admin3@sft.com');
        await this.userData.last().fill('admin759');
    }

    async logedinSuccess(){
        await this.page.locator('div.v-btn__content').click();
        await expect(this.page.locator('//div[contains(@class, "v-subheader theme--dark")]')).toHaveText('Viktorija Gardauskiene');

    };

    async logedinAdminSuccess(){
        await this.page.locator('div.v-btn__content').click();
        await expect(this.page.locator('//div[contains(@class, "v-subheader theme--dark")]')).toHaveText('admin3');

    };
};