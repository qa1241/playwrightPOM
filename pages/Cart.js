const { expect } = require('@playwright/test');
class Cart {
  constructor(page) {
    this.page = page;
    this.cart1 = page.locator('[data-test="shopping-cart-badge"]').getByText("4");
    this.cart2 = page.locator('[data-test="shopping-cart-badge"]').getByText("3");
    this.removeIteam1 = page.locator("#remove-sauce-labs-bike-light");
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.removeIteam2 = page.locator("#remove-sauce-labs-bolt-t-shirt");
  }

  async verifyAndRemoveItems() {
    await expect(this.cart1).toBeVisible();
    await this.removeIteam1.click();

    await expect(this.cart2).toBeVisible();
    await this.cartLink.click();
    await this.removeIteam2.click();
  }
}

module.exports = Cart;


