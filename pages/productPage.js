import productLocators from '../locators/productpageLocators.js';
import { clickButton, waitForTimeout } from '../utils/dataUtils.js';
import { expect } from '@playwright/test';

class ProductPage {
    constructor(page) {
        this.page = page;
    }

    /** **Extract Product Details** **/
    async getProductDetails() {
        try {
            const productNames = await this.page.$$eval(productLocators.productTitle, elements => elements.map(el => el.innerText));
            const productPrices = await this.page.$$eval(productLocators.productPrice, elements => elements.map(el => el.innerText));

            expect(productNames.length).toBeGreaterThan(0); // Ensure products exist

            console.log(' Extracted product details');
            return productNames.map((name, i) => ({
                name,
                price: productPrices[i]
            }));
        } catch (error) {
            console.error(' Error extracting product details:', error);
        }
    }

    /** **Add Product to Cart** **/
    async addToCart(productIndex) {
        try {
            const products = await this.page.locator(productLocators.productCards);
            await products.click();
            await clickButton(this.page, productLocators.addToCartButton);
            
            console.log(` Added product ${productIndex} to cart`);
        } catch (error) {
            console.error(' Error adding product to cart:', error);
        }
    }

    /** **Sort Products by Most Popular** **/
    async sortByMostPopular() {
        try {
            await clickButton(this.page, productLocators.sortButton);
            await clickButton(this.page, productLocators.mostPopularText);
            await waitForTimeout(this.page);

            const sortedProducts = await this.page.$$eval(productLocators.productTitle, elements => elements.map(el => el.innerText));
            expect(sortedProducts.length).toBeGreaterThan(0); // Ensure sorted products are displayed

            console.log(' Sorted products by most popular');
        } catch (error) {
            console.error(' Error sorting products:', error);
        }
    }

    /** **Extract Wardrobes Filtering by Metal Type** **/
    async extractWardrobes() {
        try {
            await clickButton(this.page, productLocators.categoryDropdown);
            await waitForTimeout(this.page);
            await clickButton(this.page, productLocators.storageFilter);
            await clickButton(this.page, productLocators.materialFilter);
            await clickButton(this.page, productLocators.metalFilter);
            await waitForTimeout(this.page);

            const productNames = await this.page.$$eval(productLocators.productTitle, elements => elements.map(el => el.innerText));
            expect(productNames.length).toBeGreaterThan(0);

            console.log(' Extracted wardrobe details');
            return productNames.map(name => ({ name }));
        } catch (error) {
            console.error(' Error extracting wardrobes:', error);
        }
    }
}

export default ProductPage;
