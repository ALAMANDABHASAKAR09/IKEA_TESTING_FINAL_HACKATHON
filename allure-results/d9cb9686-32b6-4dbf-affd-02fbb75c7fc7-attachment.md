# Test info

- Name: IKEA Automation Tests >> Verifiying error message for invalid discount coupoun
- Location: C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:98:9

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//button//span[text()="Apply"]')
    - locator resolved to <span class="cart-ingka-btn__label">Apply</span>
  - attempting click action
    - waiting for element to be visible, enabled and stable

    at CartPage.discount (C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\pages\cartpage.js:49:67)
    at C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:110:13
    at C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:108:9
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
- main:
  - main:
    - heading "Shopping bag" [level=1]
    - button "Context menu for shopping bag"
    - list:
      - listitem:
        - button "Delivery to 500001 available"
      - listitem:
        - button "Click & Collect at Hyderabad available"
    - button "Pick up yourself in Hyderabad"
    - list:
      - listitem:
        - link "RAKKESTAD ART":
          - /url: https://www.ikea.com/in/en/p/-30453759
          - img "RAKKESTAD ART"
        - text: 304.537.59
        - link "RAKKESTAD":
          - /url: https://www.ikea.com/in/en/p/-30453759
        - text: wardrobe with 2 doors, black-brown, 79x176 cm (31 1/8x69 1/4 ") Rs. 10990
        - list:
          - listitem: Available for delivery
          - listitem: Available for Click & Collect
        - textbox "Enter quantity": "1"
        - text: Type in a number or use arrow up or arrow down to change the quantity (0 removes item)
        - button "Increase quantity"
        - button "Decrease quantity (0 removes item)"
        - text: "1"
        - button "Add to your listRAKKESTAD"
        - button "Remove RAKKESTAD"
    - heading "Order summary" [level=3]
    - text: Products Rs. 10990
    - separator
    - heading "Total including GST" [level=4]
    - text: Total including GST Rs. 10990
    - list:
      - listitem:
        - heading "Apply discount code" [level=2]:
          - button "Apply discount code" [expanded]
        - region "Apply discount code SNAXMKAS129A Apply Enter the code without any space between letters. Gift cards can be exchanged later in the process.":
          - textbox "Discount code": SNAXMKAS129A
          - button "Apply"
          - text: Enter the code without any space between letters. Gift cards can be exchanged later in the process.
    - paragraph:
      - strong: Make the most of delivery charges.
    - paragraph:
      - text: The current delivery price of your order is
      - strong: Rs. 799
      - text: for up to
      - strong: 500 kg
      - text: .
    - paragraph:
      - text: You can add
      - strong: 450.60 kg
      - text: more to your delivery for the same delivery price.
    - button "Continue to checkout"
    - button "365 days return policy"
    - button "Tell us about your checkout experience"
    - heading "Easy picks" [level=2]
    - text: Checking availability... Checking availability... Checking availability... Checking availability... Checking availability... Checking availability... Checking availability... Checking availability... Checking availability... Checking availability... Checking availability... Checking availability... Checking availability... Checking availability... Checking availability...
- contentinfo
- region "Cookie consent banner":
  - dialog "You are in control of your own cookies":
    - heading "You are in control of your own cookies" [level=2]
    - paragraph: "IKEA India and our digital partners use cookies on this site. Some are strictly necessary to run the site but below are the optional ones:"
    - list:
      - listitem: Used for measuring how the site is used
      - listitem: Enabling personalisation of the site
      - listitem: For advertising marketing and social media
    - link ", opens in a new tab":
      - /url: https://www.ikea.com/in/en/customer-service/cookie-policy-pubffc638db
      - text: Read more about these cookies
    - button "Ok"
    - button "Cookies Settings"
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
  16 |         // expect(await this.page.locator(cartLocators.continueShoppingBag).isVisible()).toBeTruthy();  // ✅ Ensure button is visible before clicking
  17 |         await this.page.locator(cartLocators.continueShoppingBag).click();
  18 |     }
  19 |
  20 |     async navigateToCart(){
  21 |         await this.page.click(cartLocators.shoppingBagButton);
  22 |     }
  23 |
  24 |     /**  **Extract Cart Summary** **/
  25 |     async getCartSummary() {
  26 |         // expect(await this.page.locator(cartLocators.shoppingBagButton).isVisible()).toBeTruthy();  // ✅ Ensure button is visible before clicking
  27 |         await this.page.click(cartLocators.shoppingBagButton);
  28 |
  29 |         const totalValue = await this.page.locator(cartLocators.totalValue).innerText();
  30 |         
  31 |         console.log('Cart Total Value:', totalValue);
  32 |
  33 |         return {
  34 |             total: totalValue
  35 |         };
  36 |     }
  37 |
  38 |     async discount(discountCoupon){
  39 |         await expect(this.page.locator(cartLocators.discountOpenButton)).toBeVisible()
  40 |
  41 |         await this.page.locator(cartLocators.discountOpenButton).click()
  42 |
  43 |         await expect(this.page.locator(cartLocators.discountInput)).toBeEnabled()
  44 |
  45 |         await this.page.locator(cartLocators.discountInput).fill(discountCoupon)
  46 |
  47 |         await expect(this.page.locator(cartLocators.discountApplyButton)).toBeVisible()
  48 |
> 49 |         await this.page.locator(cartLocators.discountApplyButton).click()
     |                                                                   ^ Error: locator.click: Test timeout of 30000ms exceeded.
  50 |
  51 |         // await expect(this.page.locator(cartLocators.discountErrorMessage)).toBeVisible()
  52 |
  53 |         console.log(await this.page.locator(cartLocators.discountErrorMessage).textContent())
  54 |
  55 |     }
  56 | }
  57 |
  58 | export default CartPage;
  59 |
```