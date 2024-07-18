const InventoryListingHero = ({ data }) => {
    return (
        <>
            <div className="productListingHero">
                <h1 className="title light">
                    Our Entire Inventory
                </h1>
                <p className="subtitle light">
                    {data.length} products
                </p>
            </div>
        </>
    );
}

export default InventoryListingHero;