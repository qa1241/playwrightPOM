class Login{
    constructor(page){
        this.page= page;
        this.userName = page.locator("#user-name");
        this.password = page.locator("#password");
        this.Login =  page.locator("#login-button");
    };

    async gotoLoginPage(){
        await this.page.goto("https://www.saucedemo.com/inventory.html");
    };

    async loginToPage(userName,password){
        await this.userName.fill(userName);
        await this.password.fill(password);
        await this.Login.click();
    };
};

module.exports = Login; //exporting to the saucedemo 