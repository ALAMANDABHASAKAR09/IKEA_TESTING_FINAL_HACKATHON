# Test info

- Name: IKEA Automation Tests >> Search and Extract Available Sofas & Seating
- Location: C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:42:9

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//span[@class="plp-pill__label" and text()="Sort"]')

    at ProductPage.sortByMostPopular (C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\pages\productPage.js:50:61)
    at C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:48:31
    at C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:47:20
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
- tablist:
  - tab "Shop products" [selected]
  - tab "Shop by rooms"
  - tab "Offers"
  - tab "New at IKEA"
  - tab "IKEA for Business"
  - tab "Customer service"
  - tab "Tips, ideas & trends"
  - tab "More"
- tabpanel:
  - link "Skip listing":
    - /url: "#hnf--carousel__tabs-navigation-products-skip-btn"
  - link "Storage & organisation":
    - /url: https://www.ikea.com/in/en/cat/storage-organisation-st001/
  - link "Sofas & armchairs":
    - /url: https://www.ikea.com/in/en/cat/sofas-armchairs-700640/
  - link "Office furniture":
    - /url: https://www.ikea.com/in/en/cat/tables-desks-fu004/
  - link "Tables & chairs":
    - /url: https://www.ikea.com/in/en/cat/tables-chairs-fu002/
  - link "Beds & mattresses":
    - /url: https://www.ikea.com/in/en/cat/beds-mattresses-bm001/
  - link "Modular kitchens":
    - /url: https://www.ikea.com/in/en/cat/kitchen-furniture-and-accessories-ka001/
  - link "Home textiles":
    - /url: https://www.ikea.com/in/en/cat/textiles-tl001/
  - link "Kitchenware & tableware":
    - /url: https://www.ikea.com/in/en/cat/kitchenware-tableware-kt001/
  - link "Home Decor":
    - /url: https://www.ikea.com/in/en/cat/home-decor-de001/
  - link "Outdoor products":
    - /url: https://www.ikea.com/in/en/cat/outdoor-products-od001/
  - link "Lighting":
    - /url: https://www.ikea.com/in/en/cat/lighting-li001/
  - link "Bathroom products":
    - /url: https://www.ikea.com/in/en/cat/bathroom-products-ba001/
  - link "Baby & children":
    - /url: https://www.ikea.com/in/en/cat/baby-children-bc001/
  - link "Rugs and mats":
    - /url: https://www.ikea.com/in/en/cat/carpets-mats-flooring-rm001/
  - link "Laundry & cleaning":
    - /url: https://www.ikea.com/in/en/cat/laundry-cleaning-lc001/
  - link "Pots & plants":
    - /url: https://www.ikea.com/in/en/cat/pots-plants-pp001/
  - link "Food & beverages":
    - /url: https://www.ikea.com/in/en/cat/food-beverages-fb001/
  - link "Home improvement":
    - /url: https://www.ikea.com/in/en/cat/home-improvement-hi001/
  - link "Smart home":
    - /url: https://www.ikea.com/in/en/cat/home-smart-hs001/
  - link "Home electronics":
    - /url: https://www.ikea.com/in/en/cat/home-electronics-he001/
  - link "Pet products":
    - /url: https://www.ikea.com/in/en/cat/pet-products-pt001/
  - link "Christmas Collections":
    - /url: https://www.ikea.com/in/en/cat/christmas-collections-wt001/
  - link "Small storage & organisers":
    - /url: https://www.ikea.com/in/en/cat/small-storage-organisers-st007/
  - link "Furniture":
    - /url: https://www.ikea.com/in/en/cat/furniture-fu001/
  - link "Flat 15% off*":
    - /url: https://www.ikea.com/in/en/offers/
- main
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
> 50 |         await this.page.locator(productLocators.sortButton).click();
     |                                                             ^ Error: locator.click: Test timeout of 30000ms exceeded.
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