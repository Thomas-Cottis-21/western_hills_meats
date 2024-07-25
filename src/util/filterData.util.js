export const getProductsByCategory = (products, category) => {
    return products.filter(product => product.categoryName.toLowerCase() === category.toLowerCase());
}

export const getProductsBySubcategory = (products, subcategory) => {
    return products.filter(product => product.subcategoryName.toLowerCase() === subcategory.toLowerCase());
}

export const getProductsByPriceRange = (products, minPrice, maxPrice) => {
    return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
}

export const getProductsByBrand = (products, brand) => {
    return products.filter(product => product.brandName.toLowerCase() === brand.toLowerCase());
}

export const getProductCountByCategory = (products, category) => {
    return products.filter(product => product.categoryName.toLowerCase() === category.toLowerCase()).length;
}

export const getProductCountBySubcategory = (products, subcategory) => {
    return products.filter(product => product.subcategoryName.toLowerCase() === subcategory.toLowerCase()).length;
}

export const getInventoryCount = (products) => {
    return products.length;
}