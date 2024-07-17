const ProductGrid = (props) => {
    return (
        <div className="productGrid">
            {props.data && props.data.length > 0 ? (
                <h1>Data</h1>
                //render data as product cards using product card component
            ) : (
                <h1>No data</h1>
            )}
        </div>
    );
}

export default ProductGrid;