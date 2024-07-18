import Breadcrumb from "./Breadcrumb.comp.jsx";

const ProductListingHero = (props) => {
    return (
        <>
            <div className="productListingHero">
                <Breadcrumb category={props.category} subcategory={props.subcategory} productCount={props.productCount} />
            </div>
        </>
    );
}

export default ProductListingHero;