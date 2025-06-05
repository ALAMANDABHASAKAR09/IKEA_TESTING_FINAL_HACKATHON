const cartLocators = {
    continueShoppingBag: '//button//span[text()="Go to shopping bag"]',
    cartItems: '//ul[@class="_productList_3mgs0_1"]//span[@class="cart-ingka-price-module__name-decorator"]/a',
    totalValue: '(//div[@class="_sidebarGrid_dinm1_6"]//span[@class="cart-ingka-price__integer"])[1]',
    addToCartButton: '//button[contains(text(),"Add to shopping bag")]',
    shoppingBagButton: 'a[data-tracking-label="shopping-bag"]',
    discountInput: '//input[@id="discountCode"]',
    discountApplyButton: '//button[@class="cart-ingka-btn cart-ingka-btn--small cart-ingka-btn--primary _button_3mtui_14"]',
    discountErrorMessage: '//span[@id="discount-code__error"]',
    discountOpenButton:'//span[@class="cart-ingka-accordion-item-header__title-wrapper"]'
};

export default cartLocators;
