import homepageLocators from '../locators/homepageLocators.js';
import { clickButton, waitForTimeout, fillInput, highlightElement } from '../utils/dataUtils.js';
import { expect } from '@playwright/test';  

class Homepage {
    constructor(page) {
        this.page = page;
    }

    /** **Set Pincode** **/
    async setPincode(pincode) {
        try {
            await clickButton(this.page, homepageLocators.pincodeButton);
            await waitForTimeout(this.page);
            
            await highlightElement(this.page, homepageLocators.pincodeInput);
            await fillInput(this.page, homepageLocators.pincodeInput, pincode);
            
            await clickButton(this.page, homepageLocators.confirmPincode);
            console.log(` Pincode ${pincode} set successfully`);
        } catch (error) {
            console.error(` Error setting pincode:`, error);
        }
    }

    /** **Search Product** **/
    async searchProduct(productName) {
        try {
            await highlightElement(this.page, homepageLocators.searchInput);
            await fillInput(this.page, homepageLocators.searchInput, productName);
            await waitForTimeout(this.page);

            await clickButton(this.page, homepageLocators.searchButton);
            console.log(` Searched for product: ${productName}`);
        } catch (error) {
            console.error(` Error searching product:`, error);
        }
    }
}

export default Homepage;
