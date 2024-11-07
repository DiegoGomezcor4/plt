function calculateDiscountedPrice (price, discountPercentage) {
    const discount = (price * discountPercentage) / 100;
    const priceWhitDiscount = price - discount;
    return priceWhitDiscount;
}

const originalPrice = 100;
const discountPercentage = 20;
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage);

console.log('Original price: $:' + originalPrice);

console.log('Discount percentage: ' + discountPercentage + '%');
console.log('Price whit discount: ' + finalPrice);