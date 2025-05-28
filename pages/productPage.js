import productLocators from '../locators/productpageLocators.js';
import cartLocators from '../locators/cartLocators.js';
import { expect } from '@playwright/test';

class ProductPage {
    constructor(page) {
        this.page = page;
    }

    /**  **Utility Functions** **/
    async waitForTimeout(ms = 2000) {
        await this.page.waitForTimeout(ms);
    }

    /**  **Product Extraction** **/
    async getProductDetails() {

        const productNames = await this.page.$$eval(productLocators.productTitle, elements => elements.map(el => el.innerText));
        const productPrices = await this.page.$$eval(productLocators.productPrice, elements => elements.map(el => el.innerText));

        expect(productNames.length).toBeGreaterThan(0); // Ensure products exist

        return productNames.map((name, i) => ({
            name,
            price: productPrices[i]
        }));
    }

    /**  **Cart Operations** **/
    async addToCart(productIndex) {
        const products = await this.page.locator(productLocators.productCards);
        await products.click()
        // expect(products.length).toBeGreaterThanOrEqual(productIndex); // Ensure product index is valid

        // await products[productIndex - 1].click();
        // expect(await this.page.locator(productLocators.addToCartButton).isVisible()).toBeTruthy(); // Ensure button is visible

        await this.page.locator(productLocators.addToCartButton).click();
        console.log(`Added product ${productIndex} to cart`);

        await this.waitForTimeout(2000);

        // const cartCount = await this.page.locator(cartLocators.totalValue).innerText();
        // expect(Number(cartCount)).toBeGreaterThan(0); // Ensure cart count increases
    }

    /**  **Sorting Operations** **/
    async sortByMostPopular() {

        await this.page.locator(productLocators.sortButton).click();
        await this.page.locator(productLocators.mostPopularText).click();
        const visibility = this.page.locator('button[aria-label="Close"]').isVisible()
        // if(visibility){
        //     await this.page.locator('button[aria-label="Close"]').click()
        // }
        await this.page.locator(productLocators.sortButton).click();
        // if(visibility){
        //     await this.page.locator('button[aria-label="Close"]').click()
        // }

        await this.waitForTimeout(2000);

        const sortedProducts = await this.page.$$eval(productLocators.productTitle, elements => elements.map(el => el.innerText));
        expect(sortedProducts.length).toBeGreaterThan(0); // Ensure sorted products are displayed
    }

    /**  **Filtering Operations** **/
    async extractWardrobes() {
        // expect(await this.page.locator(productLocators.categoryDropdown).isVisible()).toBeTruthy();
        // expect(await this.page.locator(productLocators.storageFilter).isVisible()).toBeTruthy();
        // expect(await this.page.locator(productLocators.materialFilter).isVisible()).toBeTruthy();
        // expect(await this.page.locator(productLocators.metalFilter).isVisible()).toBeTruthy();

        await this.page.locator(productLocators.categoryDropdown).click();
        await this.page.waitForTimeout(2000)
        await this.page.locator(productLocators.storageFilter).click();
        await this.waitForTimeout(2000);

        await this.page.locator(productLocators.materialFilter).click();
        await this.page.locator(productLocators.metalFilter).click();
        await this.waitForTimeout(2000);

        const productNames = await this.page.$$eval(productLocators.productTitle, elements => elements.map(el => el.innerText));

        expect(productNames.length).toBeGreaterThan(0); 

        let wardrobeData = [];
        for (let i = 0; i < productNames.length && i < 20; i++) {
            wardrobeData.push({
                name: productNames[i]
            });
        }

        return wardrobeData;
    }
}

export default ProductPage;
