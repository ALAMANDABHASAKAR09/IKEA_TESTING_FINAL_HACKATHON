# Test info

- Name: IKEA Automation Tests >> Verifiying error message for invalid discount coupoun
- Location: C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:98:9

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toBeVisible()

Locator: locator('button[aria-controls="SEC_cart-coupon"]')
Expected: visible
Received: <element(s) not found>
Call log:
  - expect.toBeVisible with timeout 5000ms
  - waiting for locator('button[aria-controls="SEC_cart-coupon"]')

    at CartPage.discount (C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\pages\cartpage.js:39:74)
    at C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:101:28
    at C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:99:9
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
> 39 |         await expect(this.page.locator(cartLocators.discountOpenButton)).toBeVisible()
     |                                                                          ^ Error: Timed out 5000ms waiting for expect(locator).toBeVisible()
  40 |
  41 |         await this.page.locator(cartLocators.discountOpenButton).click()
  42 |
  43 |         await expect(this.page.locator(cartLocators.discountInput)).toBeEnabled()
  44 |
  45 |         await this.page.locator(cartLocators.discountInput).fill(discountCoupon)
  46 |
  47 |         await expect(this.page.locator(cartLocators.discountApplyButton)).toBeVisible()
  48 |
  49 |         await this.page.locator(cartLocators.discountApplyButton).click()
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