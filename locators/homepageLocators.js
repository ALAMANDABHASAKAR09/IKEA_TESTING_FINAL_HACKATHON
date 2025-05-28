const homepageLocators = {
    searchInput: '//input[@id="ikea-search-input"]', //#ikea-search-input
    searchButton: '//div[@class="search-box-wrapper"]//button[@type="submit"]',
    pincodeButton: 'a[aria-label="Enter postal code"]', 
    pincodeInput: 'input[aria-describedby="hnf-postalcode-helper"]',
    confirmPincode: '//button[@type="button"]//span[text()="Save"]'
};

export default homepageLocators;
