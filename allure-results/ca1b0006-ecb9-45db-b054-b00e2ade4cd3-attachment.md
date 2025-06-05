# Test info

- Name: IKEA Automation Tests >> Add Products to Cart & Validate Total
- Location: C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:81:10

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//button[@class="cart-agent-btn cart-agent-btn--emphasised"]')
    - locator resolved to <button type="button" class="cart-agent-btn cart-agent-btn--emphasised">…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable

    at clickButton (C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\utils\dataUtils.js:26:37)
    at CartPage.continueToShoppingBag (C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\pages\cartpage.js:13:26)
    at C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:97:13
    at C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:96:9
```

# Page snapshot

```yaml
- link "Skip to main content":
  - /url: "#hnf-content"
- banner:
  - button "Change language or country/region, current language is English": INEnglish
  - link "Buy IKEA gift card!":
    - /url: https://ikeain.frizbee-solutions.com/home/digital
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
  - link "Go up one level":
    - /url: /in/en/cat/sofas-fu003/
  - link "Three Seater Sofas":
    - /url: https://www.ikea.com/in/en/cat/three-seat-sofas-10670/
  - link "Skip listing":
    - /url: "#hnf--carousel__tabs-navigation-products-skip-btn"
  - link "Two Seater Sofas":
    - /url: https://www.ikea.com/in/en/cat/two-seat-sofas-10668/
  - link "Fabric sofas with chaise longues":
    - /url: https://www.ikea.com/in/en/cat/sofas-with-chaise-longues-47388/
  - link "Corner sofas":
    - /url: https://www.ikea.com/in/en/cat/corner-sofas-10671/
  - link "Modular sofas":
    - /url: https://www.ikea.com/in/en/cat/sofa-modules-31786/
- button "Start Chat":
  - img
- main:
  - text: 5 GAMMALBYN images
  - link "Skip images":
    - /url: "#pip-skip-images"
  - button "Select product photo 1 of 5":
    - img "GAMMALBYN 3-seat sofa, Kilanda light beige"
  - button "Select product photo 2 of 5":
    - img "GAMMALBYN 3-seat sofa, Kilanda light beige"
  - button "Select product photo 3 of 5":
    - img "GAMMALBYN 3-seat sofa, Kilanda light beige"
  - button "Select product photo 4 of 5":
    - img "GAMMALBYN 3-seat sofa, Kilanda light beige"
  - button "Select product photo 5 of 5":
    - img "GAMMALBYN 3-seat sofa, Kilanda light beige"
  - img "GAMMALBYN 3-seat sofa, Kilanda light beige"
  - button "Show next image"
  - button "Show all media, open modal.": All media
  - text: New
  - heading "GAMMALBYN 3-seat sofa, Kilanda light beige Add to shopping cart" [level=1]:
    - text: GAMMALBYN 3-seat sofa, Kilanda light beige
    - button "Add to shopping cart"
  - text: Price Rs. 22990 Price incl. of all taxes
  - 'button "Review: 4 out of 5 stars. Total reviews: 79 (79)"':
    - 'img "Review: 4 out of 5 stars. Total reviews: 79"'
    - text: (79)
  - paragraph: EMI starts at ₹2,086.00/month
  - list:
    - listitem:
      - 'button "Choose cover: Kilanda light beige"':
        - heading "Choose cover" [level=2]
        - text: Kilanda light beige
  - listbox "Choose cover":
    - option "Red":
      - img "GAMMALBYN 3-seat sofa, red"
    - option "Beige":
      - img "GAMMALBYN 3-seat sofa, beige"
    - option "Blue":
      - img "GAMMALBYN 3-seat sofa, blue"
    - option "Grey":
      - img "GAMMALBYN 3-seat sofa, grey"
    - option "Kilanda light beige" [selected]:
      - img "GAMMALBYN 3-seat sofa, Kilanda light beige"
    - option "Black":
      - img "GAMMALBYN 3-seat sofa, black"
    - option "Brown":
      - img "GAMMALBYN 3-seat sofa, brown"
  - heading "How to get it" [level=2]
  - button "Change store"
  - button "Delivery to 500001 available":
    - strong: Delivery to 500001
    - text: available
  - button "IKEA Hyderabad Click & Collect - available Store - In stock":
    - strong: IKEA Hyderabad
    - text: Click & Collect - available Store - In stock
  - button "Added"
  - paragraph: Watch movies or talk to a friend. Read a book or take a break with the family. Email or sleep. Here’s space for everything in your life. Moveable cushions make the sofa comfy for sitting on and lying down.
  - text: Delivery and assembly prices not included. Article number 106.155.26
  - button "Locate product in store"
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
  - text: Great basement addition
  - img "rating"
  - text: 4 Easy to assemble, nice fabric, good furniture for the space it’s in! Deb, United States of America Great buy
  - img "rating"
  - text: 5 The product is really good and strong n sturdy. It's little on the expensive side but can be bought if planning for long term. Very easy to install and need 45-60 mins max for it. Vivek, India Love this couch
  - img "rating"
  - text: 5 Very easy to put together, comfortable, and looks great in my living room! Tanya, United States of America 4
  - 'img "Review: 4 out of 5 stars. Total reviews: 79"'
  - text: Average rating 79 Reviews
  - button "Show all reviews"
  - heading "Related products" [level=2]
  - link "Skip listing":
    - /url: "#rec--carousel__pip-product-first-skip-btn"
  - button "See next items"
  - heading "Recommended for you" [level=2]
  - link "Skip listing":
    - /url: "#rec--carousel__pip-product-second-skip-btn"
  - button "See next items"
  - heading "Get the look" [level=2]
  - paragraph: Ideas based on your recently viewed products
  - link "Skip listing":
    - /url: "#crec--carousel__carousel-imc-P0-0-skip-btn"
  - heading "Accessories for GAMMALBYN" [level=2]
  - link "Skip listing":
    - /url: "#rec--carousel__pip-container-second-skip-btn"
  - button "See next items"
  - heading "More from this series" [level=2]
  - link "Skip listing":
    - /url: "#rec--carousel__pip-container-third-skip-btn"
  - button "See next items"
- heading "Your recently viewed products" [level=2]
- link "Skip listing":
  - /url: "#rec--carousel__recently-viewed-skip-btn"
- navigation "Breadcrumb":
  - list:
    - listitem:
      - link "Products":
        - /url: https://www.ikea.com/in/en/cat/products-products/
      - text: ›
    - listitem:
      - link "Sofas & armchairs":
        - /url: https://www.ikea.com/in/en/cat/sofas-armchairs-700640/
      - text: ›
    - listitem:
      - link "Sofas":
        - /url: https://www.ikea.com/in/en/cat/sofas-fu003/
      - text: ›
    - listitem:
      - link "Three Seater Sofas":
        - /url: https://www.ikea.com/in/en/cat/three-seat-sofas-10670/
      - text: ›
    - listitem: GAMMALBYN 3-seat sofa
- contentinfo
- dialog "GAMMALBYN was added to your shopping bag.":
  - button "Close"
  - document:
    - img "GAMMALBYN Kilanda light beige"
    - heading "GAMMALBYN" [level=4]
    - text: 3-seat sofa, Kilanda light beige Rs. 22990 GAMMALBYN was added to your shopping bag.
    - separator
  - button "Continue shopping"
  - button "Go to shopping bag"
```

# Test source

```ts
   1 | import fs from 'fs';
   2 | import { expect } from '@playwright/test';
   3 |
   4 | export function writeJsonFile(fileName, data) {
   5 |     const folderPath = './data/output';
   6 |
   7 |     // Ensure the folder exists
   8 |     if (!fs.existsSync(folderPath)) {
   9 |         fs.mkdirSync(folderPath);
  10 |     }
  11 |
  12 |     fs.writeFileSync(`${folderPath}/${fileName}.json`, JSON.stringify(data, null, 2));
  13 |     console.log(`Data successfully written to ${fileName}.json`);
  14 | }
  15 |
  16 |
  17 | /** Wait for Timeout **/
  18 | export async function waitForTimeout(page, ms = 2000) {
  19 |     await page.waitForTimeout(ms);
  20 | }
  21 |
  22 | /** Click Button with Visibility Check **/
  23 | export async function clickButton(page, locator, timeout = 5000) {
  24 |     // try {
  25 |         // await expect(page.locator(locator)).toBeVisible({ timeout });
> 26 |         await page.locator(locator).click();
     |                                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  27 |         console.log(` Clicked on button: ${locator}`);
  28 |     // } catch (error) {
  29 |     //     console.error(` Failed to click button: ${locator}`, error);
  30 |     // }
  31 | }
  32 |
  33 | /** Fill Input Field **/
  34 | export async function fillInput(page, locator, value, timeout = 5000) {
  35 |     try {
  36 |         await expect(page.locator(locator)).toBeEnabled({ timeout });
  37 |         await page.locator(locator).fill(value);
  38 |         console.log(` Filled input: ${locator}`);
  39 |     } catch (error) {
  40 |         console.error(` Failed to fill input: ${locator}`, error);
  41 |     }
  42 | }
  43 |
  44 | /** Highlight Element **/
  45 | export async function highlightElement(page, selector) {
  46 |     try {
  47 |         const elementHandle = await page.locator(selector).elementHandle();
  48 |         expect(elementHandle).not.toBeNull();
  49 |
  50 |         await page.evaluate((element) => {
  51 |             element.style.border = '3px solid red';
  52 |             setTimeout(() => element.style.border = '', 3000);
  53 |         }, elementHandle);
  54 |
  55 |         console.log(` Highlighted element: ${selector}`);
  56 |     } catch (error) {
  57 |         console.error(` Error highlighting element: ${selector}`, error);
  58 |     }
  59 | }
```