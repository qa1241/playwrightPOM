const { expect } = require("@playwright/test");

class Checkout {
    constructor(page){
        this.page = page;
        this.Checkout = page.getByRole("button", {name: "Checkout"});
        this.Cancle = page.locator("#cancel");
        this.FirstName = page.getByPlaceholder("First Name");
        this.LastName = page.getByPlaceholder("Last Name");
        this.Zipcode = page.getByPlaceholder("Zip/Postal Code");
        this.CartLink = page.locator('[data-test="shopping-cart-link"]');
        this.ContinueBtn = page.getByRole("button", { name: "Continue" });
        this.Finish = page.getByRole("button", { name: "Finish" });
        this.OrderComplete = page.getByText("Thank you for your order!");
        this.Backhome = page.getByRole("button", { name: "Back Home" });
    }

    async CheckoutFlow (FirstName,LastName,Zipcode) {
        await this.Checkout.click();
        await this.Cancle.click();
        await this.Checkout.click();

        await this.FirstName.fill("Nimisha");
        await this.LastName.fill("Jayagopal");
        await this.Zipcode.fill("123456");

        await this.Cancle.click();

    }

    async CompleteOrder (FirstName,LastName,Zipcode) {
        await this.CartLink.click();
        await this.Checkout.click();

        await this.FirstName.fill("Nimisha");
        await this.LastName.fill("Jayagopal");
        await this.Zipcode.fill("123456");

        await this.ContinueBtn.click();
        await this.Finish.click();

        await expect(this.OrderComplete).toBeVisible();
        await this.Backhome.click();

    }
}
module.exports = Checkout;