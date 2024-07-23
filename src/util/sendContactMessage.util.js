const sendContactRequest = async (data) => {
    console.log(data);
    try {
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        };

        const response = await fetch(
            "https://dolphin-app-l73qq.ondigitalocean.app/api/ecomm/sendContactRequest", options
        );
        if (!response.ok) {
            throw new Error("Failed to fetch product data");
        }

        return await response.json();
    } catch (error) {
        console.error("Error sending contact request", error.message);
        throw error;
    }
}

export default sendContactRequest;