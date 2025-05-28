import cartLocators from '../locators/cartLocators.js';
import { expect } from '@playwright/test';  

class CartPage {
    constructor(page) {
        this.page = page;
    }

    /**  **Utility Functions** **/
    async waitForTimeout(ms = 2000) {
        await this.page.waitForTimeout(ms);
    }

    /**  **Continue to Shopping Bag** **/
    async continueToShoppingBag() {
        // expect(await this.page.locator(cartLocators.continueShoppingBag).isVisible()).toBeTruthy();  // ✅ Ensure button is visible before clicking
        await this.page.locator(cartLocators.continueShoppingBag).click();
    }

    async navigateToCart(){
        await this.page.click(cartLocators.shoppingBagButton);
    }

    /**  **Extract Cart Summary** **/
    async getCartSummary() {
        // expect(await this.page.locator(cartLocators.shoppingBagButton).isVisible()).toBeTruthy();  // ✅ Ensure button is visible before clicking
        await this.page.click(cartLocators.shoppingBagButton);

        const totalValue = await this.page.locator(cartLocators.totalValue).innerText();
        
        console.log('Cart Total Value:', totalValue);

        return {
            total: totalValue
        };
    }

    async discount(discountCoupon){
        await expect(this.page.locator(cartLocators.discountOpenButton)).toBeVisible()

        await this.page.locator(cartLocators.discountOpenButton).click()

        await expect(this.page.locator(cartLocators.discountInput)).toBeEnabled()

        await this.page.locator(cartLocators.discountInput).fill(discountCoupon)

        await expect(this.page.locator(cartLocators.discountApplyButton)).toBeVisible()

        await this.page.locator(cartLocators.discountApplyButton).click()

        // await expect(this.page.locator(cartLocators.discountErrorMessage)).toBeVisible()

        console.log(await this.page.locator(cartLocators.discountErrorMessage).textContent())

    }
}

export default CartPage;
