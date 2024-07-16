const ProductsCategory = (props) => {
    return (
        <>
            <h1 className="title">
                This is the products category page
            </h1>
            <p className="subtitle">
                Category: {props.category}
            </p>
        </>
    );
}

export default ProductsCategory;