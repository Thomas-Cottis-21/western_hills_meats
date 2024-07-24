const getProductImages = async () => {
    try {
        const response = await fetch("https://console.ahiporti.com/api/ecomm/productImages");
        if (!response.ok) {
            throw new Error("Failed to fetch product image data");
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching product image data", error.message);
        throw error;
    }
}

export default getProductImages;