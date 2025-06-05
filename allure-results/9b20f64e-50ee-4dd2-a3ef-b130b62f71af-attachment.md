# Test info

- Name: IKEA Automation Tests >> Verifiying error message for invalid discount coupoun
- Location: C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:109:10

# Error details

```
Error: locator.click: Test ended.
Call log:
  - waiting for locator('xpath=(//span[@class="cart-agent-btn__label"])[2]')

    at clickButton (C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\utils\dataUtils.js:26:37)
    at CartPage.continueToShoppingBag (C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\pages\cartpage.js:13:26)
    at C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:116:13
    at C:\Users\2397826\OneDrive - Cognizant\Documents\Final Hackathon\tests\main.spec.js:115:9
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
     |                                     ^ Error: locator.click: Test ended.
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