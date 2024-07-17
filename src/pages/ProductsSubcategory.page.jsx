import Navigation from "../components/Navigation.comp";
import ProductListingHero from "../components/ProductListingHero.comp";
import TopBar from "../components/TopBar.comp";

const ProductsSubcategory = (props) => {
    return (
        <section>
            <TopBar />
            <Navigation />
            <ProductListingHero category={props.category} subcategory={props.subcategory} />
        </section>
    );
}

export default ProductsSubcategory;