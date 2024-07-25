import { useState } from "react";
import ProductListingHero from "../components/ProductListingHero.comp";
import { accessData } from "../context/DataContext.context";
import ProductGrid from "../components/ProductGrid.comp";

const Search = () => {
    const { data, setData } = accessData();
    const [filteredData, setFilteredData] = useState([]);
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        const searchValue = event.target.value.toLowerCase();
        setValue(searchValue);

        const newFilteredData = data.filter(product =>
            product.name.toLowerCase().includes(searchValue) || 
            product.description.toLowerCase().includes(searchValue) || 
            product.categoryName.toLowerCase().includes(searchValue) || 
            product.subcategoryName.toLowerCase().includes(searchValue)
        );

        if (!searchValue) {
            setFilteredData([]);
        } else {
            setFilteredData(newFilteredData);
        }
    }

    return (
        <section className="search">
            <ProductListingHero category={"search"} subcategory={null} productCount={filteredData.length}/>
            <div className="searchControl">
                <input 
                name="search"
                value={value}
                onChange={handleChange}
                placeholder="Search Inventory"/>
            </div>
            <ProductGrid data={filteredData} />
        </section>
    );
}

export default Search;