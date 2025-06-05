import fs from 'fs';
import { expect } from '@playwright/test';

export function writeJsonFile(fileName, data) {
    const folderPath = './data/output';

    // Ensure the folder exists
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
    }

    fs.writeFileSync(`${folderPath}/${fileName}.json`, JSON.stringify(data, null, 2));
    console.log(`Data successfully written to ${fileName}.json`);
}


/** Wait for Timeout **/
export async function waitForTimeout(page, ms = 2000) {
    await page.waitForTimeout(ms);
}

/** Click Button with Visibility Check **/
export async function clickButton(page, locator, timeout = 5000) {
    // try {
        // await expect(page.locator(locator)).toBeVisible({ timeout });
        await page.locator(locator).click();
        console.log(` Clicked on button: ${locator}`);
    // } catch (error) {
    //     console.error(` Failed to click button: ${locator}`, error);
    // }
}

/** Fill Input Field **/
export async function fillInput(page, locator, value, timeout = 5000) {
    try {
        await expect(page.locator(locator)).toBeEnabled({ timeout });
        await page.locator(locator).fill(value);
        console.log(` Filled input: ${locator}`);
    } catch (error) {
        console.error(` Failed to fill input: ${locator}`, error);
    }
}

/** Highlight Element **/
export async function highlightElement(page, selector) {
    try {
        const elementHandle = await page.locator(selector).elementHandle();
        expect(elementHandle).not.toBeNull();

        await page.evaluate((element) => {
            element.style.border = '3px solid red';
            setTimeout(() => element.style.border = '', 3000);
        }, elementHandle);

        console.log(` Highlighted element: ${selector}`);
    } catch (error) {
        console.error(` Error highlighting element: ${selector}`, error);
    }
}