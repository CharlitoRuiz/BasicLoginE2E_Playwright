import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/main.pages';
import data from  '../fixtures/data.json'

const username = data.username, password = data.password
test.beforeEach('enter to Login Page', async ({ page }) => {
  await page.goto('/login');
  await expect(page).toHaveURL("https://the-internet.herokuapp.com/login")
  await expect(page.getByRole('heading', { name: 'Login Page' })).toBeVisible();
});

test('Successfully login', async ({ page }) => {
  const loginpage = new LoginPage(page);
  await loginpage.enterCredentials(username, password)
  await loginpage.clickLoginButton();
  await expect(loginpage.txtAlert).toContainText(data.messages.alertLogin);
  await expect(loginpage.btnLogout).toBeVisible();
  await expect(loginpage.txtAlert).toBeVisible();
  await expect(loginpage.txtDescription).toContainText(data.messages.description);
  await loginpage.clickLogoutButton();
  await expect(loginpage.txtAlert).toBeVisible();
  await expect(loginpage.txtAlert).toContainText(data.messages.alertLogout);

});
