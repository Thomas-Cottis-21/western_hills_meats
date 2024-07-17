import ProductCard from "./ProductCard.comp";

const ProductGrid = (props) => {
    return (
        <div className="productGrid">
            {props.data && props.data.length > 0 ? (
                props.data.map(product => (
                    <ProductCard key={product.cloverId} product={product}/>
                ))
            ) : (
                <h1>No data</h1>
            )}
        </div>
    );
}

export default ProductGrid;