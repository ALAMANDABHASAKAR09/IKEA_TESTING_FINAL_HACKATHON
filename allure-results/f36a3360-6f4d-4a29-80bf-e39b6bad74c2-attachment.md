# Test info

- Name: IKEA Automation Tests >> Add Products to Cart & Validate Total
- Location: C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:61:9

# Error details

```
Error: locator.innerText: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('xpath=(//div[@class="_sidebarGrid_dinm1_6"]//span[@class="cart-ingka-price__integer"])[2]')

    at CartPage.getCartSummary (C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\pages\cartpage.js:25:77)
    at C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:85:33
    at C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:84:9
```

# Page snapshot

```yaml
- link "Skip to main content":
  - /url: "#hnf-content"
- banner:
  - button "Change language or country/region, current language is English": INEnglish
  - link "Flat 15% off on furniture shopping above Rs. 20,000. Shop now.":
    - /url: https://www.ikea.com/in/en/offers/
  - button "500001 - Enter postal code": "500001"
  - button "Hyderabad - Select store": Hyderabad
  - link "IKEA Home":
    - /url: https://www.ikea.com/in/en/
  - search:
    - searchbox "Search for products, inspiration or new arrivals"
    - button "Search IKEA products using a photo"
  - navigation:
    - button "Hej! Log in"
    - link "Shopping list":
      - /url: https://www.ikea.com/in/en/favourites/
    - link "Shopping bag, 2 items":
      - /url: https://www.ikea.com/in/en/shoppingcart/
      - text: 2 Shopping bag
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
  - button "Flat 15% off*"
  - button "Furniture"
  - button "Storage & organisation"
  - button "Sofas & armchairs"
  - button "Office furniture"
  - button "Tables & chairs"
  - button "Beds & mattresses"
  - button "Modular kitchens"
  - button "Home textiles"
  - button "Kitchenware & tableware"
  - button "Home Decor"
  - button "Outdoor products"
  - button "Lighting"
  - button "Bathroom products"
  - button "Baby & children"
  - button "Rugs and mats"
  - button "Laundry & cleaning"
  - button "Pots & plants"
  - button "Food & beverages"
  - button "Home improvement"
  - button "Smart home"
  - button "Home electronics"
  - button "Pet products"
  - button "Christmas Collections"
  - button "Small storage & organisers"
- main
- contentinfo
```

# Test source

```ts
   1 | import cartLocators from '../locators/cartLocators.js';
   2 | import { expect } from '@playwright/test';  
   3 |
   4 | class CartPage {
   5 |     constructor(page) {
   6 |         this.page = page;
   7 |     }
   8 |
   9 |     /**  **Utility Functions** **/
  10 |     async waitForTimeout(ms = 2000) {
  11 |         await this.page.waitForTimeout(ms);
  12 |     }
  13 |
  14 |     /**  **Continue to Shopping Bag** **/
  15 |     async continueToShoppingBag() {
  16 |         expect(await this.page.locator(cartLocators.continueShoppingBag).isVisible()).toBeTruthy();  // ✅ Ensure button is visible before clicking
  17 |         await this.page.locator(cartLocators.continueShoppingBag).click();
  18 |     }
  19 |
  20 |     /**  **Extract Cart Summary** **/
  21 |     async getCartSummary() {
  22 |         // expect(await this.page.locator(cartLocators.shoppingBagButton).isVisible()).toBeTruthy();  // ✅ Ensure button is visible before clicking
  23 |         await this.page.click(cartLocators.shoppingBagButton);
  24 |
> 25 |         const totalValue = await this.page.locator(cartLocators.totalValue).innerText();
     |                                                                             ^ Error: locator.innerText: Test timeout of 30000ms exceeded.
  26 |         
  27 |         console.log('Cart Total Value:', totalValue);
  28 |
  29 |         return {
  30 |             total: totalValue
  31 |         };
  32 |     }
  33 | }
  34 |
  35 | export default CartPage;
  36 |
```