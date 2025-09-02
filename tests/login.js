class shortcut {
    constructor (page){
        this.page=page;
        this.username=page.locator('//input[@name="username"]')
        this.password=page.locator('//input[@name="password"]')
        this.login=page.locator('//button[@type="submit"]')
    }
    async loginpage (user,pass){
        await this.username.fill(user)
        await this.password.fill(pass)
        await this.login.click()
    }
}
export default shortcut