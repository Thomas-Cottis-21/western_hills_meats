import { formatStockClass } from "../util/formatString.util";
import productPhoto from "../assets/productPhoto.jpg";

const ProductCard = ({ product, index }) => {
	return (
		<>
			{product.categoryName === "Meats" ? (
				<div className="meatRow">
					{index === 0 ? "" : <hr />}
					<div className="meatRowData">
						<div className="left">
							<p className="title">{product.name}</p>
							<p className="productSupport">
								{product.brandName} - {product.categoryName} /{" "}
								{product.subcategoryName}
							</p>
							<p
								className={`productSupport ${formatStockClass(
									product.quantityTypeName
								)}`}>
								{product.quantityTypeName}
							</p>
						</div>
						<div className="right">
							<p className="productSupport">
								<span>${product.price}</span> / {product.priceTypeName}
							</p>
						</div>
					</div>
				</div>
			) : (
				<div className="productCard">
					<div className="image">
						<img src={productPhoto} />
					</div>
					<div className="productListingData">
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
				</div>
			)}
		</>
	);
};

export default ProductCard;
