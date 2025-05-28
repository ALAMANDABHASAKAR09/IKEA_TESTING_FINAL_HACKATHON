# Test info

- Name: IKEA Automation Tests >> Add Products to Cart & Validate Total
- Location: C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:70:9

# Error details

```
Error: expect(locator).toBeVisible()

Locator: locator('//div[@class="search-box-wrapper"]//button[@type="submit"]')
Expected: visible
Received: hidden
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('//div[@class="search-box-wrapper"]//button[@type="submit"]')
    8 × locator resolved to <button disabled type="submit" aria-hidden="true" class="search-box-btn search-box-btn--xsmall search-box-btn--icon-tertiary search-box-search__action">…</button>
      - unexpected value "hidden"

    at Homepage.searchProduct (C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\pages\homepage.js:48:72)
    at C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:81:13
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
    - combobox "Search for products, inspiration or new arrivals": Sofas & Seating
    - button "Clear the search input field"
    - button "Search"
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
- main
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
   1 | import homepageLocators from '../locators/homepageLocators.js';
   2 | import { expect } from '@playwright/test';  
   3 |
   4 | class Homepage {
   5 |     constructor(page) {
   6 |         this.page = page;
   7 |     }
   8 |
   9 |     /**  **Utility Functions** **/
  10 |     async waitForTimeout(time = 2000) {
  11 |         await this.page.waitForTimeout(time);
  12 |     }
  13 |
  14 |     /**  **Element Highlighting** **/
  15 |     async highlightElement(selector) {
  16 |         const elementHandle = await this.page.locator(selector).elementHandle();
  17 |         expect(elementHandle).not.toBeNull();  
  18 |         
  19 |         await this.page.evaluate((element) => {
  20 |             element.style.border = '3px solid red';
  21 |             setTimeout(() => element.style.border = '', 3000);
  22 |         }, elementHandle);
  23 |     }
  24 |
  25 |     /**  **Set Pincode** **/
  26 |     async setPincode(pincode) {
  27 |         await expect(this.page.locator(homepageLocators.pincodeButton)).toBeVisible()
  28 |
  29 |         await this.highlightElement(homepageLocators.pincodeButton);
  30 |         await this.page.locator(homepageLocators.pincodeButton).click();
  31 |         await this.waitForTimeout();
  32 |
  33 |         await this.highlightElement(homepageLocators.pincodeInput);
  34 |         await this.page.locator(homepageLocators.pincodeInput).fill(pincode);
  35 |
  36 |         await expect(this.page.locator(homepageLocators.confirmPincode)).toBeVisible()
  37 |
  38 |         await this.page.locator(homepageLocators.confirmPincode).click();
  39 |     }
  40 |
  41 |     /**  **Search Product** **/
  42 |     async searchProduct(productName) {
  43 |
  44 |         await this.highlightElement(homepageLocators.searchInput);
  45 |         await this.page.locator(homepageLocators.searchInput).fill(productName);
  46 |         await this.waitForTimeout();
  47 |
> 48 |         await expect(this.page.locator(homepageLocators.searchButton)).toBeVisible();  // Ensure search button is visible
     |                                                                        ^ Error: expect(locator).toBeVisible()
  49 |
  50 |         await this.highlightElement(homepageLocators.searchButton);
  51 |         await this.page.locator(homepageLocators.searchButton).click();
  52 |     }
  53 | }
  54 |
  55 | export default Homepage;
  56 |
```