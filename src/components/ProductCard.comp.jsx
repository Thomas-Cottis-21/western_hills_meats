import { formatStockClass } from "../util/formatString.util";

const ProductCard = ({ product }) => {
    return (
			<div className="productCard">
				<p className="title">{product.name}</p>
				<p className="productSupport">
					<span>${product.price}</span> / {product.priceTypeName}
				</p>
				<p className="productSupport">
					{product.categoryName} / {product.subcategoryName}
				</p>
				<p
					className={`productSupport ${formatStockClass(
						product.quantityTypeName
					)}`}>
					{product.quantityTypeName}
				</p>
				<p className="productSupport">{product.brandName}</p>
			</div>
		);
}

export default ProductCard;