const getProductImages = async () => {
    try {
        const response = await fetch("https://dolphin-app-l73qq.ondigitalocean.app/api/ecomm/productImages");
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