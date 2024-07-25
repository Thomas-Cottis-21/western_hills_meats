import Footer from "../components/Footer.comp";
import InventoryListingHero from "../components/InventoryListingHero.comp";
import Navigation from "../components/Navigation.comp";
import ProductGrid from "../components/ProductGrid.comp";
import TopBar from "../components/TopBar.comp";
import { accessData } from "../context/DataContext.context";

const Inventory = () => {

    const { data, setData } = accessData();

    return (
        <section>
            <InventoryListingHero data={data}/>
            <ProductGrid data={data} />
        </section>
    );
}

export default Inventory;