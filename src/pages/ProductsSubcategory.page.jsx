const ProductsSubcategory = (props) => {
    return (
        <div>
            <h1 className="title">
                This is the products subcategory page
            </h1>
            <p className="subtitle">
                Category: {props.category} <br/>
                Subcategory: {props.subcategory}
            </p>
        </div>
    );
}

export default ProductsSubcategory;