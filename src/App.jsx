import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.page";
import NotFound from "./pages/NotFound.page";
import getProducts from "./util/getProducts.util";
import { accessData } from "./context/DataContext.context.jsx";

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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router>
  );
}

export default App
