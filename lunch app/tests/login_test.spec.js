import { LoginPage } from "../pages/login_page";
import { test, expect} from '@playwright/test';


test('Login to page as administrator', async ({page}) => {
    let loginPage = new LoginPage(page);
        await loginPage.navigateToLoginPage();
        await loginPage.fillAdminLoginData();
        await loginPage.logedinAdminSuccess();
});

test('Login to page as regular user', async ({page}) => {
    let loginPage = new LoginPage(page);
        await loginPage.navigateToLoginPage();
        await loginPage.fillLoginData();
        await loginPage.logedinSuccess();
});

