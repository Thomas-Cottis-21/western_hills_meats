import Navigation from "../components/Navigation.comp";
import ProductListingHero from "../components/ProductListingHero.comp";
import TopBar from "../components/TopBar.comp";

const ProductsSubcategory = (props) => {
    return (
        <section>
            <TopBar />
            <Navigation />
            <ProductListingHero />
        </section>
    );
}

export default ProductsSubcategory;