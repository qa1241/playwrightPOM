import {expect,test} from "@playwright/test"

const Login = require('../pages/Login');
const Dashboard = require('../pages/Dashboard');
const CartPage = require('../pages/Cart');
const Checkout = require('../pages/Checkout');


test("saucedemo full automation POM", async({page}) => {
    const login = new Login(page);
    await login.gotoLoginPage();
    await login.loginToPage("standard_user", "secret_sauce")

    const dashboard = new Dashboard(page);
    await dashboard.addAllItemsToCart();
    //await dashboard.removeItems1();

    const cart = new CartPage(page);
    await cart.verifyAndRemoveItems();

    const checkout = new Checkout(page);
    await checkout.CheckoutFlow("Nimisha","Jayagopal","123456");
    await checkout.CompleteOrder("Nimisha", "Jayagopal", "123456");

    const logout = new Logout(page);
    await logout.logoutfunn();
    await expect(page.locator("#login-button")).toBeVisible();

});