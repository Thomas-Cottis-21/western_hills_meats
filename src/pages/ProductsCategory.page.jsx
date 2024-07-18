import ProductListingHero from "../components/ProductListingHero.comp";
import Navigation from "../components/Navigation.comp";
import TopBar from "../components/TopBar.comp";
import ProductGrid from "../components/ProductGrid.comp";
import { accessData } from "../context/DataContext.context";
import { getProductCountByCategory, getProductsByCategory } from "../util/filterData.util";

const ProductsCategory = (props) => {

    const { data, setData } = accessData();

    return (
        <section>
            <TopBar />
            <Navigation />
            <ProductListingHero category={props.category} subcategory={""} productCount={getProductCountByCategory(data, props.category)} />
            <ProductGrid data={getProductsByCategory(data, props.category)} />
        </section>
    );
}

export default ProductsCategory;