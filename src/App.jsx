import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import Home from "./pages/Home.page";
import NotFound from "./pages/NotFound.page";
import getProducts from "./util/getProducts.util";
import { accessData } from "./context/DataContext.context.jsx";
import ProductsSubcategory from "./pages/ProductsSubcategory.page.jsx";
import ProductsCategory from "./pages/ProductsCategory.page.jsx";
import Inventory from "./pages/Inventory.page.jsx";

const App = () => {
  const { data, setData } = accessData();

  useEffect(() => {
		(async () => {
			const products = await getProducts();
			console.log(products);
      handleAddProductData(products.details);
		})();
  }, []);

  const handleAddProductData = (products) => {
    setData(products);
    console.log("Product data added to context");
  };

  const DynamicSubcategory = () => {
    const { category, subcategory } = useParams();

    return <ProductsSubcategory category={category} subcategory={subcategory} />
  }

  const DynamicCategory = () => {
    const { category } = useParams();

    return <ProductsCategory category={category} />
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/inventory/:category/:subcategory" element={<DynamicSubcategory />} />
        <Route path="/inventory/:category" element={< DynamicCategory />}/>
        <Route path="/inventory" element={<Inventory />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router>
  );
}

export default App
