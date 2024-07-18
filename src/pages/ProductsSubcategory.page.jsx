import Navigation from "../components/Navigation.comp";
import ProductGrid from "../components/ProductGrid.comp";
import ProductListingHero from "../components/ProductListingHero.comp";
import TopBar from "../components/TopBar.comp";
import { accessData } from "../context/DataContext.context";
import { getProductsBySubcategory } from "../util/filterData.util";

const ProductsSubcategory = (props) => {

    const { data, setData } = accessData();

    return (
        <section>
            <TopBar />
            <Navigation />
            <ProductListingHero category={props.category} subcategory={props.subcategory} />
            <ProductGrid data={getProductsBySubcategory(data, props.subcategory)} />
        </section>
    );
}

export default ProductsSubcategory;