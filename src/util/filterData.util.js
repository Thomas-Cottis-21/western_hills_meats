export const getProductsByCategory = (products, category) => {
    return products.filter(product => product.categoryName === category);
}

export const getProductsBySubcategory = (products, subcategory) => {
    return products.filter(product => product.subcategoryName === subcategory);
}

export const getProductsByPriceRange = (products, minPrice, maxPrice) => {
    return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
}

export const getProductsByBrand = (products, brand) => {
    return products.filter(product => product.brandName === brand);
}

export const getProductCountByCategory = (products, category) => {
    return products.filter(product => product.categoryName === category).length;
}

export const getProductCountBySubcategory = (products, subcategory) => {
    return products.filter(product => product.subcategoryName === subcategory).length;
}

export const getInventoryCount = (products) => {
    return products.length;
}