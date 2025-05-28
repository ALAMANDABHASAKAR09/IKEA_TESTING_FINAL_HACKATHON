import { test, expect } from '@playwright/test';

import Homepage from '../pages/homepage.js';
import ProductPage from '../pages/productPage.js';
import CartPage from '../pages/cartpage.js';

import { writeJsonFile } from '../utils/dataUtils.js';
import inputData from '../data/input/input.json'; 

let homepage, productPage, cartPage;

test.describe('IKEA Automation Tests', () => {

    test.beforeEach(async ({ page }) => {
        homepage = new Homepage(page);
        productPage = new ProductPage(page);
        cartPage = new CartPage(page);

        await test.step('Navigate to IKEA homepage', async () => {
            await page.goto('https://www.ikea.com');
            await page.waitForLoadState();

            const cookiesPopup = page.locator('button[id="onetrust-accept-btn-handler"]');
            if (await cookiesPopup.isVisible()) {
                await cookiesPopup.click();
                console.log('Cookies popup accepted');
            }

            await page.click('(//span[text()="Go shopping"])[3]');
            console.log('Navigated to IKEA homepage');
        });

        await test.step(`Set Pincode to ${inputData.pincode}`, async () => {
            await homepage.setPincode(inputData.pincode);
        });
    });

    test.afterEach(async () => {
        console.log('Test execution completed');
    });

    test('Search and Extract Available Sofas & Seating', async () => {
        await test.step(`Search for ${inputData.products.sofas}`, async () => {
            await homepage.searchProduct(inputData.products.sofas);
        });

        await test.step('Sort by Most Popular', async () => {
            await productPage.sortByMostPopular();
        });

        await test.step('Extract Product Details and Save to JSON', async () => {
            const sofas = await productPage.getProductDetails();
            console.log(sofas);
            writeJsonFile('sofas_data', sofas);
        });
    });

    test('Extract Wardrobe of Metal Type', async () => {
        await test.step(`Search for ${inputData.products.wardrobes}`, async () => {
            await homepage.searchProduct(inputData.products.wardrobes);
        });

        await test.step('Extract Wardrobe Details and Save to JSON', async () => {
            const wardrobes = await productPage.extractWardrobes();
            console.log(wardrobes);
            writeJsonFile('wardrobe_data', wardrobes);
        });
    });

    test('Add Products to Cart & Validate Total', async () => {
        await test.step(`Add Third Product from ${inputData.products.storage} to Cart`, async () => {
            await homepage.searchProduct(inputData.products.storage);
            await productPage.addToCart(inputData.cartIndexes.storageProductIndex);
        });

        await test.step('Continue Shopping Bag after First Addition', async () => {
            await cartPage.continueToShoppingBag();
        });

        await test.step(`Add First Product from ${inputData.products.sofas} to Cart`, async () => {
            await homepage.searchProduct(inputData.products.sofas);
            await productPage.addToCart(inputData.cartIndexes.sofasProductIndex);
        });

        await test.step('Continue Shopping Bag after Second Addition', async () => {
            await cartPage.continueToShoppingBag();
        });
        
        await test.step('Open Cart and Extract Summary', async () => {
            const cartDetails = await cartPage.getCartSummary();
            console.log('Total Value:', cartDetails.total);
            writeJsonFile('cart_summary', cartDetails);
        });

       
    });

    test('Verifiying error message for invalid discount coupoun',async()=>{
        await test.step(`Add Third Product from ${inputData.products.storage} to Cart`, async () => {
            await homepage.searchProduct(inputData.products.storage);
            await productPage.addToCart(inputData.cartIndexes.storageProductIndex);
        });

        await test.step('Continue Shopping Bag after First Addition', async () => {
            await cartPage.continueToShoppingBag();
        });

        await test.step('Checking error message for invalid discount coupon',async()=>{
            await cartPage.navigateToCart()
            await cartPage.discount(inputData.discountCoupon);
        });
    })
});
