import { Helmet } from "react-helmet";
import InventoryListingHero from "../components/InventoryListingHero.comp";
import ProductGrid from "../components/ProductGrid.comp";
import { accessData } from "../context/DataContext.context";

const Inventory = () => {

    const { data, setData } = accessData();

    return (
			<section>
				<Helmet>
					<title>{`Inventory (${data.length})`}</title>
					<meta
						name="description"
						content="We have a vast inventory of smokers, grills, condiments and meats! Be sure to visit us soon!"
					/>
					<meta
						name="keywords"
						content="meat, meats, beef, pork, chicken, lamb, turkey, seafood, condiments, rubs, sauces, marinades, accessories, thermometers, pellets, grills, smokers"
					/>
					<link rel="canonical" href="https://www.westernhillsmeats.com/inventory/" />
				</Helmet>
				<InventoryListingHero data={data} />
				<ProductGrid data={data} />
			</section>
		);
}

export default Inventory;