const getProducts = async () => {
    try {
        const response = await fetch(
				"https://console.westernhillsmeats.com/api/ecomm/products"
			);
        if (!response.ok) {
            throw new Error("Failed to fetch product data");
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching product data", error.message);
        throw error;
    }
}

export default getProducts;