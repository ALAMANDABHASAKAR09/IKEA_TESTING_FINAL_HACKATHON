# Test info

- Name: IKEA Automation Tests >> Add Products to Cart & Validate Total
- Location: C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:70:10

# Error details

```
Error: expect(locator).toBeVisible()

Locator: locator('//div[@class="pip-buy-module__buttons"]')
Expected: visible
Received: hidden
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('//div[@class="pip-buy-module__buttons"]')
    4 × locator resolved to <div class="pip-buy-module__buttons">…</div>
      - unexpected value "hidden"

    at ProductPage.addToCart (C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\pages\productPage.js:33:74)
    at C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:82:13
    at C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:80:9
```

# Page snapshot

```yaml
- link "Skip to main content":
  - /url: "#hnf-content"
- banner:
  - button "Change language or country/region, current language is English": INEnglish
  - link "Delivery starts from Rs. 69":
    - /url: https://www.ikea.com/in/en/cat/furniture-fu001/
  - button "500001 - Enter postal code": "500001"
  - button "Hyderabad - Select store": Hyderabad
  - link "IKEA Home":
    - /url: https://www.ikea.com/in/en/
  - search:
    - combobox "Search for products, inspiration or new arrivals"
    - button "Search IKEA products using a photo"
  - navigation:
    - button "Hej! Log in"
    - link "Shopping list":
      - /url: https://www.ikea.com/in/en/favourites/
    - link "Shopping bag, 1 items":
      - /url: https://www.ikea.com/in/en/shoppingcart/
      - text: 1 Shopping bag
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
  - link "Go up one level":
    - /url: /in/en/cat/outdoor-seating-700350/
  - link "Outdoor Sofas":
    - /url: https://www.ikea.com/in/en/cat/outdoor-sofas-21959/
  - link "Skip listing":
    - /url: "#hnf--carousel__tabs-navigation-products-skip-btn"
  - link "Outdoor sofa combinations":
    - /url: https://www.ikea.com/in/en/cat/outdoor-sofa-combinations-21960/
  - link "Outdoor sofa sections":
    - /url: https://www.ikea.com/in/en/cat/outdoor-sofa-sections-21961/
  - link "Outdoor Benches":
    - /url: https://www.ikea.com/in/en/cat/outdoor-benches-47386/
  - link "Outdoor dining furniture":
    - /url: https://www.ikea.com/in/en/cat/outdoor-dining-furniture-21964/
  - link "Outdoor seat cushions":
    - /url: https://www.ikea.com/in/en/cat/outdoor-seat-cushions-46400/
- main:
  - img
  - link "Flat 15% OFF + a ₹1000 voucher on furniture purchases above INR 20,000":
    - /url: https://www.ikea.com/in/en/offers/
  - text: 1 NÄMMARÖ images
  - link "Skip images":
    - /url: "#pip-skip-images"
  - img "NÄMMARÖ 2-seat modular sofa, outdoor, light brown stained"
  - heading "NÄMMARÖ 2-seat modular sofa, outdoor, light brown stained Add to shopping cart" [level=1]:
    - text: NÄMMARÖ 2-seat modular sofa, outdoor, light brown stained
    - button "Add to shopping cart"
  - text: Price Rs. 15000 Price incl. of all taxes Flat 15% off* above Rs.20,000. Applied at checkout Offer valid from Apr 17 until Jun 01 Exclusive IKEA Family offer
  - 'button "Review: 4.6 out of 5 stars. Total reviews: 34 (34)"':
    - 'img "Review: 4.6 out of 5 stars. Total reviews: 34"'
    - text: (34)
  - paragraph: EMI starts at ₹1,361.00/month
  - list:
    - listitem:
      - 'button "Choose colour: Light brown stained"':
        - heading "Choose colour" [level=2]
        - text: Light brown stained
  - listbox "Choose colour":
    - option "Light brown stained" [selected]:
      - img "NÄMMARÖ 2-seat modular sofa, outdoor, light brown stained"
    - option "Light brown stained/Frösön/Duvholmen beige":
      - img "NÄMMARÖ 2-seat modular sofa, outdoor, light brown stained/Frösön/Duvholmen beige"
  - heading "How to get it" [level=2]
  - button "Change store"
  - button "Delivery Checking availability...":
    - strong: Delivery
    - text: Checking availability...
  - button "In store Checking availability...":
    - strong: In store
    - text: Checking availability...
  - text: Delivery and assembly prices not included. Article number 095.793.17
  - list:
    - listitem:
      - button "Product details":
        - heading "Product details" [level=2]
    - listitem:
      - button "What's included":
        - heading "What's included" [level=2]
    - listitem:
      - button "Measurements":
        - heading "Measurements" [level=2]
  - heading "Customer reviews" [level=2]
  - text: Sturdy, beautiful
  - img "rating"
  - text: 5 It is so comfortable, I fell asleep on it the first time I sat in it at home. Sturdy, good-looking, comfortable. Megan, United States of America 4.6
  - 'img "Review: 4.6 out of 5 stars. Total reviews: 34"'
  - text: Average rating 34 Reviews
  - button "Show all reviews"
  - heading "Related products" [level=2]
  - link "Skip listing":
    - /url: "#rec--carousel__pip-product-first-skip-btn"
  - button "See previous items"
  - button "See next items"
  - heading "Recommended for you" [level=2]
  - link "Skip listing":
    - /url: "#rec--carousel__pip-product-second-skip-btn"
  - button "See previous items"
  - button "See next items"
  - heading "Get the look" [level=2]
  - paragraph: Ideas based on your recently viewed products
  - link "Skip listing":
    - /url: "#crec--carousel__carousel-imc-P0-0-skip-btn"
  - heading "Accessories for NÄMMARÖ" [level=2]
  - link "Skip listing":
    - /url: "#rec--carousel__pip-container-second-skip-btn"
  - button "See previous items"
  - button "See next items"
- heading "Your recently viewed products" [level=2]
- link "Skip listing":
  - /url: "#rec--carousel__recently-viewed-skip-btn"
- button "See previous items"
- button "See next items"
- navigation "Breadcrumb":
  - list:
    - listitem:
      - link "Products":
        - /url: https://www.ikea.com/in/en/cat/products-products/
      - text: ›
    - listitem:
      - link "Outdoor products":
        - /url: https://www.ikea.com/in/en/cat/outdoor-products-od001/
      - text: ›
    - listitem:
      - link "Outdoor furniture":
        - /url: https://www.ikea.com/in/en/cat/outdoor-furniture-od003/
      - text: ›
    - listitem:
      - link "Outdoor seating":
        - /url: https://www.ikea.com/in/en/cat/outdoor-seating-700350/
      - text: ›
    - listitem:
      - link "Outdoor Sofas":
        - /url: https://www.ikea.com/in/en/cat/outdoor-sofas-21959/
      - text: ›
    - listitem: NÄMMARÖ 2-seat modular sofa, outdoor
- contentinfo
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
> 33 |         await expect(this.page.locator(productLocators.addToCartButton)).toBeVisible()
     |                                                                          ^ Error: expect(locator).toBeVisible()
  34 |         await this.page.locator(productLocators.addToCartButton).click();
  35 |         console.log(`Added product ${productIndex} to cart`);
  36 |
  37 |         await this.waitForTimeout(2000);
  38 |
  39 |     }
  40 |
  41 |     /**  **Sorting Operations** **/
  42 |     async sortByMostPopular() {
  43 |
  44 |         await this.page.locator(productLocators.sortButton).click();
  45 |         await this.page.locator(productLocators.mostPopularText).click();
  46 |         const visibility = this.page.locator('button[aria-label="Close"]').isVisible()
  47 |         await this.page.locator(productLocators.sortButton).click();
  48 |         await this.waitForTimeout(2000);
  49 |
  50 |         const sortedProducts = await this.page.$$eval(productLocators.productTitle, elements => elements.map(el => el.innerText));
  51 |         expect(sortedProducts.length).toBeGreaterThan(0); // Ensure sorted products are displayed
  52 |     }
  53 |
  54 |     /**  **Filtering Operations** **/
  55 |     async extractWardrobes() {
  56 |
  57 |         await expect(this.page.locator(productLocators.categoryDropdown)).toBeVisible()
  58 |
  59 |         await this.page.locator(productLocators.categoryDropdown).click();
  60 |         await this.page.waitForTimeout(2000)
  61 |
  62 |         await expect(this.page.locator(productLocators.storageFilter)).toBeVisible()
  63 |         await this.page.locator(productLocators.storageFilter).click();
  64 |         await this.waitForTimeout(2000);
  65 |
  66 |         await expect(this.page.locator(productLocators.materialFilter)).toBeVisible()
  67 |         await this.page.locator(productLocators.materialFilter).click();
  68 |
  69 |         await expect(this.page.locator(productLocators.metalFilter)).toBeVisible()
  70 |         await this.page.locator(productLocators.metalFilter).click();
  71 |         await this.waitForTimeout(2000);
  72 |
  73 |         const productNames = await this.page.$$eval(productLocators.productTitle, elements => elements.map(el => el.innerText));
  74 |
  75 |         expect(productNames.length).toBeGreaterThan(0); 
  76 |
  77 |         let wardrobeData = [];
  78 |         for (let i = 0; i < productNames.length && i < 20; i++) {
  79 |             wardrobeData.push({
  80 |                 name: productNames[i]
  81 |             });
  82 |         }
  83 |
  84 |         return wardrobeData;
  85 |     }
  86 | }
  87 |
  88 | export default ProductPage;
  89 |
```