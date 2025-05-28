# Test info

- Name: IKEA Automation Tests >> Add Products to Cart & Validate Total
- Location: C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:70:9

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//div[@class="pip-buy-module__buttons"]')
    - locator resolved to <div class="pip-buy-module__buttons">…</div>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms

    at ProductPage.addToCart (C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\pages\productPage.js:38:66)
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
  - link "Outdoor sofa sections":
    - /url: https://www.ikea.com/in/en/cat/outdoor-sofa-sections-21961/
  - link "Skip listing":
    - /url: "#hnf--carousel__tabs-navigation-products-skip-btn"
  - link "Outdoor Sofas":
    - /url: https://www.ikea.com/in/en/cat/outdoor-sofas-21959/
  - link "Outdoor sofa combinations":
    - /url: https://www.ikea.com/in/en/cat/outdoor-sofa-combinations-21960/
  - link "Outdoor Benches":
    - /url: https://www.ikea.com/in/en/cat/outdoor-benches-47386/
  - link "Outdoor dining furniture":
    - /url: https://www.ikea.com/in/en/cat/outdoor-dining-furniture-21964/
  - link "Outdoor seat cushions":
    - /url: https://www.ikea.com/in/en/cat/outdoor-seat-cushions-46400/
- main:
  - link "Flat 15% OFF + a ₹1000 voucher on furniture purchases above INR 20,000":
    - /url: https://www.ikea.com/in/en/offers/
  - text: 5 JOLPEN images
  - link "Skip images":
    - /url: "#pip-skip-images"
  - button "Select product photo 1 of 5":
    - img "JOLPEN 2-seat sofa, outdoor, white/grey, 100x59x67 cm"
  - button "Select product photo 2 of 5":
    - img "JOLPEN 2-seat sofa, outdoor, white/grey, 100x59x67 cm"
  - button "Select product photo 3 of 5":
    - img "JOLPEN 2-seat sofa, outdoor, white/grey, 100x59x67 cm"
  - button "Select product photo 4 of 5":
    - img "JOLPEN 2-seat sofa, outdoor, white/grey, 100x59x67 cm"
  - button "Select product photo 5 of 5":
    - img "JOLPEN 2-seat sofa, outdoor, white/grey, 100x59x67 cm"
  - img "JOLPEN 2-seat sofa, outdoor, white/grey, 100x59x67 cm"
  - button "Show next image"
  - button "Show all media, open modal.": All media
  - heading "JOLPEN 2-seat sofa, outdoor, white/grey, 100x59x67 cm (39 3/8x23 1/4x26 3/8 \"). Show measurements specifications Add to shopping cart" [level=1]:
    - text: JOLPEN 2-seat sofa, outdoor, white/grey,
    - button "100x59x67 cm (39 3/8x23 1/4x26 3/8 \"). Show measurements specifications": 100x59x67 cm (39 3/8x23 1/4x26 3/8 ")
    - button "Add to shopping cart"
  - emphasis: Price Rs. 5990
  - text: Price incl. of all taxes Flat 15% off* above Rs.20,000. Applied at checkout Offer valid from Apr 17 until Jun 01 Exclusive IKEA Family offer
  - 'button "Review: 4.5 out of 5 stars. Total reviews: 105 (105)"':
    - 'img "Review: 4.5 out of 5 stars. Total reviews: 105"'
    - text: (105)
  - paragraph: EMI starts at ₹544.00/month
  - heading "How to get it" [level=2]
  - button "Change store"
  - button "Delivery Checking availability...":
    - strong: Delivery
    - text: Checking availability...
  - button "In store Checking availability...":
    - strong: In store
    - text: Checking availability...
  - paragraph: JOLPEN sofa is designed to fit limited outdoor spaces – even on small balconies. The slightly flexible plastic slats and metal frame provide comfort and make the sofa durable and easy to care for.
  - text: Delivery and assembly prices not included. Article number 205.227.39
  - list:
    - listitem:
      - button "Product details":
        - heading "Product details" [level=2]
    - listitem:
      - button "Measurements":
        - heading "Measurements" [level=2]
  - heading "Customer reviews" [level=2]
  - link "Skip listing":
    - /url: "#pip--carousel__highlight-reviews-carousel-skip-btn"
  - text: Two seated sofa
  - img "rating"
  - text: 5 Great quality it’s best in balcony and super quality I was looking this product from very long but finally I got it thanks ikea for such product Rakesh, India Very nice little bench for outside front door
  - img "rating"
  - text: 5 Wonderfully packed! The kit arrived in perfect condition due to the fact that it was double-boxed. Easy to assemble and sturdy. Richard, United States of America Cute Bench
  - img "rating"
  - text: 5 This is a very well made bench. It is small so read the dimensions but it will work for where I want it. Patty, United States of America 4.5
  - 'img "Review: 4.5 out of 5 stars. Total reviews: 105"'
  - text: Average rating 105 Reviews
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
  - text: IKEA Kreativ
  - link "Explore your options":
    - /url: https://www.ikea.com/in/en/home-design/?productId=20522739#value-prop
    - heading "Explore your options" [level=2]
  - paragraph: Try furniture and decor together before you buy for the confidence you need to make the right choice
  - heading "Get the look" [level=2]
  - paragraph: Ideas based on your recently viewed products
  - link "Skip listing":
    - /url: "#crec--carousel__carousel-imc-P0-0-skip-btn"
  - heading "Accessories for JOLPEN" [level=2]
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
      - link "Outdoor sofa sections":
        - /url: https://www.ikea.com/in/en/cat/outdoor-sofa-sections-21961/
      - text: ›
    - listitem: JOLPEN 2-seat sofa, outdoor
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
  33 |         // expect(products.length).toBeGreaterThanOrEqual(productIndex); // Ensure product index is valid
  34 |
  35 |         // await products[productIndex - 1].click();
  36 |         // expect(await this.page.locator(productLocators.addToCartButton).isVisible()).toBeTruthy(); // Ensure button is visible
  37 |
> 38 |         await this.page.locator(productLocators.addToCartButton).click();
     |                                                                  ^ Error: locator.click: Test timeout of 30000ms exceeded.
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