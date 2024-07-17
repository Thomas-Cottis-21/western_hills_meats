const ProductCard = ({ product }) => {
    return (
			<div className="productCard">
				<span>{product.cloverId}</span>
				<span>{product.name}</span>
				<span>
					{product.price} / {product.priceTypeName}
				</span>
				<span>{product.description}</span>
				<span>
					{product.categoryName} / {product.subcategoryName}
				</span>
                <span>{product.brandName}</span>
			</div>
		);
}

export default ProductCard;