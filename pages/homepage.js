import homepageLocators from '../locators/homepageLocators.js';
import { expect } from '@playwright/test';  

class Homepage {
    constructor(page) {
        this.page = page;
    }

    /**  **Utility Functions** **/
    async waitForTimeout(time = 2000) {
        await this.page.waitForTimeout(time);
    }

    /**  **Element Highlighting** **/
    async highlightElement(selector) {
        const elementHandle = await this.page.locator(selector).elementHandle();
        expect(elementHandle).not.toBeNull();  
        
        await this.page.evaluate((element) => {
            element.style.border = '3px solid red';
            setTimeout(() => element.style.border = '', 3000);
        }, elementHandle);
    }

    /**  **Set Pincode** **/
    async setPincode(pincode) {
        await expect(this.page.locator(homepageLocators.pincodeButton)).toBeVisible()

        await this.highlightElement(homepageLocators.pincodeButton);
        await this.page.locator(homepageLocators.pincodeButton).click();
        await this.waitForTimeout();

        await this.highlightElement(homepageLocators.pincodeInput);
        await this.page.locator(homepageLocators.pincodeInput).fill(pincode);

        await expect(this.page.locator(homepageLocators.confirmPincode)).toBeVisible()

        await this.page.locator(homepageLocators.confirmPincode).click();
    }

    /**  **Search Product** **/
    async searchProduct(productName) {

        await this.highlightElement(homepageLocators.searchInput);
        await this.page.locator(homepageLocators.searchInput).fill(productName);
        await this.waitForTimeout();

        await expect(this.page.locator(homepageLocators.searchButton)).toBeVisible();  // Ensure search button is visible

        await this.highlightElement(homepageLocators.searchButton);
        await this.page.locator(homepageLocators.searchButton).click();
    }
}

export default Homepage;
