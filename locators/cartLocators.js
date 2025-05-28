const cartLocators = {
    continueShoppingBag: 'button[aria-label="Go to shopping bag"]',
    cartItems: '//ul[@class="_productList_3mgs0_1"]//span[@class="cart-ingka-price-module__name-decorator"]/a',
    totalValue: '(//div[@class="_sidebarGrid_dinm1_6"]//span[@class="cart-ingka-price__integer"])[2]',
    addToCartButton: '//button[contains(text(),"Add to shopping bag")]',
    shoppingBagButton: 'a[data-tracking-label="shopping-bag"]',
    discountInput: 'input[id="discountCode"]',
    discountApplyButton: '//button//span[text()="Apply"]',
    discountErrorMessage: '//span[@id="discount-code__error"]',
    discountOpenButton:'button[aria-controls="SEC_cart-coupon"]'
};

export default cartLocators;
