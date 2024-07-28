import ProductListingHero from "../components/ProductListingHero.comp";
import ProductGrid from "../components/ProductGrid.comp";
import { accessData } from "../context/DataContext.context";
import { getProductCountByCategory, getProductsByCategory } from "../util/filterData.util";
import { Helmet } from "react-helmet";

const ProductsCategory = (props) => {

    const { data, setData } = accessData();

    return (
			<section>
				<Helmet>
					<title>
						{`${props.category} (
						${getProductCountByCategory(data, props.category)})`}
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
						href={`https://www.westernhillsmeats.com/inventory/${props.category}`}
					/>
				</Helmet>
				<ProductListingHero
					category={props.category}
					subcategory={""}
					productCount={getProductCountByCategory(data, props.category)}
				/>
				<ProductGrid data={getProductsByCategory(data, props.category)} />
			</section>
		);
}

export default ProductsCategory;