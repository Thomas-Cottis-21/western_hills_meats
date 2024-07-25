import ProductGrid from "../components/ProductGrid.comp";
import ProductListingHero from "../components/ProductListingHero.comp";
import { accessData } from "../context/DataContext.context";
import { getProductCountBySubcategory, getProductsBySubcategory } from "../util/filterData.util";

const ProductsSubcategory = (props) => {

    const { data, setData } = accessData();

    return (
			<section>
				<Helmet>
					<title>
						{props.subcategory} (
						{getProductCountBySubcategory(data, props.subcategory)})
					</title>
					<meta
						name="description"
						content="We have a vast inventory of smokers, grills, condiments and meats! Be sure to visit us soon!"
					/>
					<meta
						name="keywords"
						content="meat, meats, beef, pork, chicken, lamb, turkey, seafood, condiments, rubs, sauces, marinades, accessories, thermometers, pellets, grills, smokers"
					/>
					<link
						rel="canonical"
						href={`https://www.westernhillsmeats.com/inventory/${props.category}/${props.subcategory}`}
					/>
				</Helmet>
				<ProductListingHero
					category={props.category}
					subcategory={props.subcategory}
					productCount={getProductCountBySubcategory(
						data,
						props.subcategory
					)}
				/>
				<ProductGrid
					data={getProductsBySubcategory(data, props.subcategory)}
				/>
			</section>
		);
}

export default ProductsSubcategory;