class Logout {
    constructor(page) {
        this.page = page;
        this.hamberg = page.locator("#react-burger-menu-btn");
        this.logoutbutton = page.locator("#logout_sidebar_link");
    }

    async logoutfunn() {
        await this.hamberg.click();
        await this.logoutbutton.click();
    }
}

module.exports = Logout;