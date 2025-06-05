const productLocators = {
    productTitle: '//h3[@class="plp-price-module__name"]//span//span',
    productPrice: '//span[@class="plp-price__integer"]',
    deliveryAvailability: '//div[@class="plp-mastercard__item plp-mastercard__availability "]/div[1]//span[@class="plp-status__label"]',
    localStock: '//div[@class="plp-mastercard__item plp-mastercard__availability "]/div[2]//span[@class="plp-status__label"]',
    topSellerBadge: '//p[@class="plp-product-badge plp-product-badge--top-seller"]',
    sortButton: '//span[@class="plp-pill__label" and text()="Sort"]',
    mostPopularRadio: '(//label[@class="plp-radio-button"])[7]//span[2]',
    mostPopularText: '//span[@class="plp-radio-button__text" and text()="Best match"]',
    categoryDropdown: '//div[@class="plp-filter-bar__options"]//button[7]',
    storageFilter: '//span[text()="Wardrobes"]',
    materialFilter: '//div[@class="plp-filter-bar__options"]//button[8]',
    metalFilter: '(//span[@class="plp-checkbox--subtle plp-checkbox"])[2]/span',
    productCards: '(//div[@class="plp-fragment-wrapper"][3]//span)[1]',
    addToCartButton: '//div[@class="pip-buy-module__buttons"]'
};

export default productLocators;
