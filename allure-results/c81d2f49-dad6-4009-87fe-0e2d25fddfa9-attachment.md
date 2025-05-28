# Test info

- Name: IKEA Automation Tests >> Search and Extract Available Sofas & Seating
- Location: C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:41:10

# Error details

```
Error: browserContext._wrapApiCall: Test ended.
Browser logs:

<launching> C:\Users\2397826\AppData\Local\ms-playwright\webkit-2158\Playwright.exe --inspector-pipe --disable-accelerated-compositing --no-startup-window
<launched> pid=10712
[pid=10712] <gracefully close start>
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import Homepage from '../pages/homepage.js';
   3 | import ProductPage from '../pages/productPage.js';
   4 | import CartPage from '../pages/cartpage.js';
   5 | import { writeJsonFile } from '../utils/dataUtils.js';
   6 | import inputData from '../data/input/input.json'; 
   7 |
   8 | let homepage, productPage, cartPage;
   9 |
  10 | test.describe('IKEA Automation Tests', () => {
  11 |
  12 |     test.beforeEach(async ({ page }) => {
  13 |         homepage = new Homepage(page);
  14 |         productPage = new ProductPage(page);
  15 |         cartPage = new CartPage(page);
  16 |
  17 |         await test.step('Navigate to IKEA homepage', async () => {
  18 |             await page.goto('https://www.ikea.com');
  19 |             await page.waitForLoadState();
  20 |
  21 |               // ✅ Detect and dismiss the cookies popup if it appears
  22 |             const cookiesPopup = page.locator('button[id="onetrust-accept-btn-handler"]');
  23 |             if (await cookiesPopup.isVisible()) {
  24 |                 await cookiesPopup.click();
  25 |                 console.log('Cookies popup accepted');
  26 |             }
  27 |
  28 |             await page.click('(//span[text()="Go shopping"])[3]');
  29 |             console.log('Navigated to IKEA homepage');
  30 |         });
  31 |
  32 |         await test.step(`Set Pincode to ${inputData.pincode}`, async () => {
  33 |             await homepage.setPincode(inputData.pincode);
  34 |         });
  35 |     });
  36 |
  37 |     test.afterEach(async () => {
  38 |         console.log('Test execution completed');
  39 |     });
  40 |
> 41 |     test.only('Search and Extract Available Sofas & Seating', async () => {
     |          ^ Error: browserContext._wrapApiCall: Test ended.
  42 |         await test.step(`Search for ${inputData.products.sofas}`, async () => {
  43 |             await homepage.searchProduct(inputData.products.sofas);
  44 |         });
  45 |
  46 |         await test.step('Sort by Most Popular', async () => {
  47 |             await productPage.sortByMostPopular();
  48 |         });
  49 |
  50 |         await test.step('Extract Product Details and Save to JSON', async () => {
  51 |             const sofas = await productPage.getProductDetails();
  52 |             console.log(sofas);
  53 |             writeJsonFile('sofas_data', sofas);
  54 |         });
  55 |     });
  56 |
  57 |     test('Extract Wardrobe', async () => {
  58 |         await test.step(`Search for ${inputData.products.wardrobes}`, async () => {
  59 |             await homepage.searchProduct(inputData.products.wardrobes);
  60 |         });
  61 |
  62 |         await test.step('Extract Wardrobe Details and Save to JSON', async () => {
  63 |             const wardrobes = await productPage.extractWardrobes();
  64 |             console.log(wardrobes);
  65 |             writeJsonFile('wardrobe_data', wardrobes);
  66 |         });
  67 |     });
  68 |
  69 |     test('Add Products to Cart & Validate Total', async () => {
  70 |         await test.step(`Add Third Product from ${inputData.products.storage} to Cart`, async () => {
  71 |             await homepage.searchProduct(inputData.products.storage);
  72 |             await productPage.addToCart(inputData.cartIndexes.storageProductIndex);
  73 |         });
  74 |
  75 |         await test.step('Continue Shopping Bag after First Addition', async () => {
  76 |             await cartPage.continueToShoppingBag();
  77 |         });
  78 |
  79 |         await test.step(`Add First Product from ${inputData.products.sofas} to Cart`, async () => {
  80 |             await homepage.searchProduct(inputData.products.sofas);
  81 |             await productPage.addToCart(inputData.cartIndexes.sofasProductIndex);
  82 |         });
  83 |
  84 |         await test.step('Continue Shopping Bag after Second Addition', async () => {
  85 |             await cartPage.continueToShoppingBag();
  86 |         });
  87 |
  88 |         await test.step('Open Cart and Extract Summary', async () => {
  89 |             const cartDetails = await cartPage.getCartSummary();
  90 |             console.log('Total Value:', cartDetails.total);
  91 |             writeJsonFile('cart_summary', cartDetails);
  92 |         });
  93 |     });
  94 | });
  95 |
```