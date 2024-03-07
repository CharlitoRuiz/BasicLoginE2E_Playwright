import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly txtUsername: Locator;
  readonly txtPassword: Locator;
  readonly btnLogin: Locator;
  readonly txtAlert: Locator;
  readonly btnLogout: Locator;
  readonly txtDescription: Locator;


  constructor(page:Page){
    this.page = page;
    this.txtUsername = page.getByLabel('Username');
    this.txtPassword = page.getByLabel('Password');
    this.btnLogin = page.getByRole('button', { name: ' Login' });
    this.txtAlert = page.locator('#flash');
    this.btnLogout = page.getByRole('link', { name: 'Logout' });
    this.txtDescription = page.locator('h4');

  }

  // Methods
  async goto(url){
    await this.page.goto(url);
  }
  async enterCredentials(user, pass){
    await this.txtUsername.fill(user);
    await this.txtPassword.fill(pass);
  }
  async clickLoginButton(){
    await this.btnLogin.click();
  }
  async clickLogoutButton(){
    await this.btnLogout.click();
  }
}