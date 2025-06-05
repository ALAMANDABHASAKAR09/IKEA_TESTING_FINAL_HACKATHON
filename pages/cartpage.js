import cartLocators from '../locators/cartLocators.js';
import { clickButton, waitForTimeout,fillInput } from '../utils/dataUtils.js';
import { expect } from '@playwright/test';  

class CartPage {
    constructor(page) {
        this.page = page;
    }

    /** **Navigation Functions** **/
    async continueToShoppingBag() {
        await waitForTimeout(this.page);
        await clickButton(this.page, cartLocators.continueShoppingBag);
    }

    async navigateToCart() {
        await clickButton(this.page, cartLocators.shoppingBagButton);
    }

    /** **Extract Cart Summary & Validate** **/
    async getCartSummary() {
        try {
            await this.navigateToCart();

            await waitForTimeout(this.page)

            const total = await this.page.locator(cartLocators.totalValue).innerText();

            return { total };
        } catch (error) {
            console.error(' Error fetching Cart Summary:', error);
        }
    }

    
    /** **Apply Discount & Verify Error Message** **/
    async applyDiscount(discountCoupon) {
        try {
            await this.navigateToCart();
            await waitForTimeout(this.page);

            await clickButton(this.page, cartLocators.discountOpenButton);
            await waitForTimeout(this.page);


            await fillInput(this.page, cartLocators.discountInput, discountCoupon);

            await clickButton(this.page, cartLocators.discountApplyButton);


            const errorMessage = await this.page.locator(cartLocators.discountErrorMessage).innerText();

            await clickButton(this.page, cartLocators.discountApplyButton);
            // expect(errorMessage).toContain('Please enter a valid discount code.');
            console.log('Discount Error Message:', errorMessage);
        } catch (error) {
            console.error(' Error applying discount:',error);
        }
    }

    async click(button){

        const Visibility = await this.page.locator(button).isEnabled()
        if(Visibility){
            await this.page.locator(button).click()
        }else{
            console.log("Button is not enabled")
        }
    }
}

export default CartPage;
