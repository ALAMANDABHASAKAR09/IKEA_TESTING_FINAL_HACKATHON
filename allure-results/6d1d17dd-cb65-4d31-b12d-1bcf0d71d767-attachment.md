# Test info

- Name: IKEA Automation Tests >> Add Products to Cart & Validate Total
- Location: C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:70:9

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//div[@class="plp-fragment-wrapper"][3]')

    at ProductPage.addToCart (C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\pages\productPage.js:32:24)
    at C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:73:13
    at C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:71:9
```

# Page snapshot

```yaml
- link "Skip to main content":
  - /url: "#hnf-content"
- banner:
  - button "Change language or country/region, current language is English": INEnglish
  - button "Enter postal code"
  - button "Select store"
  - link "IKEA Home":
    - /url: https://www.ikea.com/in/en/
  - search:
    - combobox "Search for products, inspiration or new arrivals"
  - navigation:
    - button "Hej! Log in"
    - link "Shopping list":
      - /url: https://www.ikea.com/in/en/favourites/
    - link "Shopping bag":
      - /url: https://www.ikea.com/in/en/shoppingcart/
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
> 32 |         await products.click()
     |                        ^ Error: locator.click: Test timeout of 30000ms exceeded.
  33 |         // expect(products.length).toBeGreaterThanOrEqual(productIndex); // Ensure product index is valid
  34 |
  35 |         // await products[productIndex - 1].click();
  36 |         // expect(await this.page.locator(productLocators.addToCartButton).isVisible()).toBeTruthy(); // Ensure button is visible
  37 |
  38 |         await this.page.locator(productLocators.addToCartButton).click();
  39 |         console.log(`Added product ${productIndex} to cart`);
  40 |
  41 |         await this.waitForTimeout(2000);
  42 |
  43 |         // const cartCount = await this.page.locator(cartLocators.totalValue).innerText();
  44 |         // expect(Number(cartCount)).toBeGreaterThan(0); // Ensure cart count increases
  45 |     }
  46 |
  47 |     /**  **Sorting Operations** **/
  48 |     async sortByMostPopular() {
  49 |
  50 |         await this.page.locator(productLocators.sortButton).click();
  51 |         await this.page.locator(productLocators.mostPopularText).click();
  52 |         const visibility = this.page.locator('button[aria-label="Close"]').isVisible()
  53 |         // if(visibility){
  54 |         //     await this.page.locator('button[aria-label="Close"]').click()
  55 |         // }
  56 |         await this.page.locator(productLocators.sortButton).click();
  57 |         // if(visibility){
  58 |         //     await this.page.locator('button[aria-label="Close"]').click()
  59 |         // }
  60 |
  61 |         await this.waitForTimeout(2000);
  62 |
  63 |         const sortedProducts = await this.page.$$eval(productLocators.productTitle, elements => elements.map(el => el.innerText));
  64 |         expect(sortedProducts.length).toBeGreaterThan(0); // Ensure sorted products are displayed
  65 |     }
  66 |
  67 |     /**  **Filtering Operations** **/
  68 |     async extractWardrobes() {
  69 |         // expect(await this.page.locator(productLocators.categoryDropdown).isVisible()).toBeTruthy();
  70 |         // expect(await this.page.locator(productLocators.storageFilter).isVisible()).toBeTruthy();
  71 |         // expect(await this.page.locator(productLocators.materialFilter).isVisible()).toBeTruthy();
  72 |         // expect(await this.page.locator(productLocators.metalFilter).isVisible()).toBeTruthy();
  73 |
  74 |         await this.page.locator(productLocators.categoryDropdown).click();
  75 |         await this.page.waitForTimeout(2000)
  76 |         await this.page.locator(productLocators.storageFilter).click();
  77 |         await this.waitForTimeout(2000);
  78 |
  79 |         await this.page.locator(productLocators.materialFilter).click();
  80 |         await this.page.locator(productLocators.metalFilter).click();
  81 |         await this.waitForTimeout(2000);
  82 |
  83 |         const productNames = await this.page.$$eval(productLocators.productTitle, elements => elements.map(el => el.innerText));
  84 |
  85 |         expect(productNames.length).toBeGreaterThan(0); 
  86 |
  87 |         let wardrobeData = [];
  88 |         for (let i = 0; i < productNames.length && i < 20; i++) {
  89 |             wardrobeData.push({
  90 |                 name: productNames[i]
  91 |             });
  92 |         }
  93 |
  94 |         return wardrobeData;
  95 |     }
  96 | }
  97 |
  98 | export default ProductPage;
  99 |
```