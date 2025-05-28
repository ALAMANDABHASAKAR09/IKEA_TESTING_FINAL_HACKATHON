# Test info

- Name: IKEA Automation Tests >> Verifiying error message for invalid discount coupoun
- Location: C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:98:9

# Error details

```
Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://www.ikea.com/
Call log:
  - navigating to "https://www.ikea.com/", waiting until "load"

    at C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:20:24
    at C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:19:20
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | import Homepage from '../pages/homepage.js';
   4 | import ProductPage from '../pages/productPage.js';
   5 | import CartPage from '../pages/cartpage.js';
   6 |
   7 | import { writeJsonFile } from '../utils/dataUtils.js';
   8 | import inputData from '../data/input/input.json'; 
   9 |
   10 | let homepage, productPage, cartPage;
   11 |
   12 | test.describe('IKEA Automation Tests', () => {
   13 |
   14 |     test.beforeEach(async ({ page }) => {
   15 |         homepage = new Homepage(page);
   16 |         productPage = new ProductPage(page);
   17 |         cartPage = new CartPage(page);
   18 |
   19 |         await test.step('Navigate to IKEA homepage', async () => {
>  20 |             await page.goto('https://www.ikea.com');
      |                        ^ Error: page.goto: net::ERR_INTERNET_DISCONNECTED at https://www.ikea.com/
   21 |             await page.waitForLoadState();
   22 |
   23 |             const cookiesPopup = page.locator('button[id="onetrust-accept-btn-handler"]');
   24 |             if (await cookiesPopup.isVisible()) {
   25 |                 await cookiesPopup.click();
   26 |                 console.log('Cookies popup accepted');
   27 |             }
   28 |
   29 |             await page.click('(//span[text()="Go shopping"])[3]');
   30 |             console.log('Navigated to IKEA homepage');
   31 |         });
   32 |
   33 |         await test.step(`Set Pincode to ${inputData.pincode}`, async () => {
   34 |             await homepage.setPincode(inputData.pincode);
   35 |         });
   36 |     });
   37 |
   38 |     test.afterEach(async () => {
   39 |         console.log('Test execution completed');
   40 |     });
   41 |
   42 |     test('Search and Extract Available Sofas & Seating', async () => {
   43 |         await test.step(`Search for ${inputData.products.sofas}`, async () => {
   44 |             await homepage.searchProduct(inputData.products.sofas);
   45 |         });
   46 |
   47 |         await test.step('Sort by Most Popular', async () => {
   48 |             await productPage.sortByMostPopular();
   49 |         });
   50 |
   51 |         await test.step('Extract Product Details and Save to JSON', async () => {
   52 |             const sofas = await productPage.getProductDetails();
   53 |             console.log(sofas);
   54 |             writeJsonFile('sofas_data', sofas);
   55 |         });
   56 |     });
   57 |
   58 |     test('Extract Wardrobe of Metal Type', async () => {
   59 |         await test.step(`Search for ${inputData.products.wardrobes}`, async () => {
   60 |             await homepage.searchProduct(inputData.products.wardrobes);
   61 |         });
   62 |
   63 |         await test.step('Extract Wardrobe Details and Save to JSON', async () => {
   64 |             const wardrobes = await productPage.extractWardrobes();
   65 |             console.log(wardrobes);
   66 |             writeJsonFile('wardrobe_data', wardrobes);
   67 |         });
   68 |     });
   69 |
   70 |     test('Add Products to Cart & Validate Total', async () => {
   71 |         await test.step(`Add Third Product from ${inputData.products.storage} to Cart`, async () => {
   72 |             await homepage.searchProduct(inputData.products.storage);
   73 |             await productPage.addToCart(inputData.cartIndexes.storageProductIndex);
   74 |         });
   75 |
   76 |         await test.step('Continue Shopping Bag after First Addition', async () => {
   77 |             await cartPage.continueToShoppingBag();
   78 |         });
   79 |
   80 |         await test.step(`Add First Product from ${inputData.products.sofas} to Cart`, async () => {
   81 |             await homepage.searchProduct(inputData.products.sofas);
   82 |             await productPage.addToCart(inputData.cartIndexes.sofasProductIndex);
   83 |         });
   84 |
   85 |         await test.step('Continue Shopping Bag after Second Addition', async () => {
   86 |             await cartPage.continueToShoppingBag();
   87 |         });
   88 |         
   89 |         await test.step('Open Cart and Extract Summary', async () => {
   90 |             const cartDetails = await cartPage.getCartSummary();
   91 |             console.log('Total Value:', cartDetails.total);
   92 |             writeJsonFile('cart_summary', cartDetails);
   93 |         });
   94 |
   95 |        
   96 |     });
   97 |
   98 |     test('Verifiying error message for invalid discount coupoun',async()=>{
   99 |         await test.step(`Add Third Product from ${inputData.products.storage} to Cart`, async () => {
  100 |             await homepage.searchProduct(inputData.products.storage);
  101 |             await productPage.addToCart(inputData.cartIndexes.storageProductIndex);
  102 |         });
  103 |
  104 |         await test.step('Continue Shopping Bag after First Addition', async () => {
  105 |             await cartPage.continueToShoppingBag();
  106 |         });
  107 |
  108 |         await test.step('Checking error message for invalid discount coupon',async()=>{
  109 |             await cartPage.navigateToCart()
  110 |             await cartPage.discount(inputData.discountCoupon);
  111 |         });
  112 |     })
  113 | });
  114 |
```