# Test info

- Name: IKEA Automation Tests >> Extract Wardrobe of Metal Type
- Location: C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:58:10

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: locator('//span[@class="plp-category-filter__list-item-name" and text()="Storage solution systems"]')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('//span[@class="plp-category-filter__list-item-name" and text()="Storage solution systems"]')

    at ProductPage.extractWardrobes (C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\pages\productPage.js:61:72)
    at C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:64:31
    at C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:63:9
```

# Test source

```ts
   1 | import productLocators from '../locators/productpageLocators.js';
   2 | import cartLocators from '../locators/cartLocators.js';
   3 | import { expect } from '@playwright/test';
   4 |
   5 | class ProductPage {
   6 |     constructor(page) {
   7 |         this.page = page;
   8 |     }
   9 |
  10 |     /**  **Utility Functions** **/
  11 |     async waitForTimeout(ms = 2000) {
  12 |         await this.page.waitForTimeout(ms);
  13 |     }
  14 |
  15 |     /**  **Product Extraction** **/
  16 |     async getProductDetails() {
  17 |
  18 |         const productNames = await this.page.$$eval(productLocators.productTitle, elements => elements.map(el => el.innerText));
  19 |         const productPrices = await this.page.$$eval(productLocators.productPrice, elements => elements.map(el => el.innerText));
  20 |
  21 |         expect(productNames.length).toBeGreaterThan(0); // Ensure products exist
  22 |
  23 |         return productNames.map((name, i) => ({
  24 |             name,
  25 |             price: productPrices[i]
  26 |         }));
  27 |     }
  28 |
  29 |     /**  **Cart Operations** **/
  30 |     async addToCart(productIndex) {
  31 |         const products = await this.page.locator(productLocators.productCards);
  32 |         await products.click()
  33 |         await this.page.locator(productLocators.addToCartButton).click();
  34 |         console.log(`Added product ${productIndex} to cart`);
  35 |
  36 |         await this.waitForTimeout(2000);
  37 |
  38 |     }
  39 |
  40 |     /**  **Sorting Operations** **/
  41 |     async sortByMostPopular() {
  42 |
  43 |         await this.page.locator(productLocators.sortButton).click();
  44 |         await this.page.locator(productLocators.mostPopularText).click();
  45 |         const visibility = this.page.locator('button[aria-label="Close"]').isVisible()
  46 |         await this.page.locator(productLocators.sortButton).click();
  47 |         await this.waitForTimeout(2000);
  48 |
  49 |         const sortedProducts = await this.page.$$eval(productLocators.productTitle, elements => elements.map(el => el.innerText));
  50 |         expect(sortedProducts.length).toBeGreaterThan(0); // Ensure sorted products are displayed
  51 |     }
  52 |
  53 |     /**  **Filtering Operations** **/
  54 |     async extractWardrobes() {
  55 |
  56 |         await expect(this.page.locator(productLocators.categoryDropdown)).toBeVisible()
  57 |
  58 |         await this.page.locator(productLocators.categoryDropdown).click();
  59 |         await this.page.waitForTimeout(2000)
  60 |
> 61 |         await expect(this.page.locator(productLocators.storageFilter)).toBeVisible()
     |                                                                        ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  62 |         await this.page.locator(productLocators.storageFilter).click();
  63 |         await this.waitForTimeout(2000);
  64 |
  65 |         await expect(this.page.locator(productLocators.materialFilter)).toBeVisible()
  66 |         await this.page.locator(productLocators.materialFilter).click();
  67 |
  68 |         await expect(this.page.locator(productLocators.metalFilter)).toBeVisible()
  69 |         await this.page.locator(productLocators.metalFilter).click();
  70 |         await this.waitForTimeout(2000);
  71 |
  72 |         const productNames = await this.page.$$eval(productLocators.productTitle, elements => elements.map(el => el.innerText));
  73 |
  74 |         expect(productNames.length).toBeGreaterThan(0); 
  75 |
  76 |         let wardrobeData = [];
  77 |         for (let i = 0; i < productNames.length && i < 20; i++) {
  78 |             wardrobeData.push({
  79 |                 name: productNames[i]
  80 |             });
  81 |         }
  82 |
  83 |         return wardrobeData;
  84 |     }
  85 | }
  86 |
  87 | export default ProductPage;
  88 |
```