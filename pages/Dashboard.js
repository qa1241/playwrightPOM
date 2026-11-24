class DashboardPage {
  constructor(page) {
    this.page = page;
    this.addAllItems1 = page.locator("#add-to-cart-sauce-labs-backpack");
    this.addAllItems2 = page.locator("#add-to-cart-sauce-labs-bike-light");
    this.addAllItems3 = page.locator("#add-to-cart-sauce-labs-bolt-t-shirt");
    this.addAllItems4 = page.locator("#add-to-cart-sauce-labs-fleece-jacket");
  }

  async addAllItemsToCart() {
    await this.addAllItems1.click();
    await this.addAllItems2.click();
    await this.addAllItems3.click();
    await this.addAllItems4.click();
  };

};

module.exports = DashboardPage;