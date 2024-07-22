import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import Home from "./pages/Home.page";
import NotFound from "./pages/NotFound.page";
import getProducts from "./util/getProducts.util.js";
import { accessData } from "./context/DataContext.context.jsx";
import ProductsSubcategory from "./pages/ProductsSubcategory.page.jsx";
import ProductsCategory from "./pages/ProductsCategory.page.jsx";
import Inventory from "./pages/Inventory.page.jsx";
import getProductImages from "./util/getProductImages.js";
import VendorSetup from "./pages/VendorSetup.page.jsx";
import ScrollToTop from "./context/ScrollToTop.context.jsx";

const App = () => {
  const { data, setData } = accessData();

  useEffect(() => {
		(async () => {
			const products = await getProducts();
      const productImages = await getProductImages();
			console.log(products, productImages);
      handleAddProductData(products.details, productImages.details);
		})();
  }, []);

  const handleAddProductData = (products, productImages) => {
    //compile product data with image data
    const compiledData = compileProductData(products, productImages);
    console.log(compiledData);
    setData(compiledData);
    console.log("Product data added to context");
  };

  const compileProductData = (products, productImages) => {
    const imageMap = productImages.reduce((acc, image) => {
      if (!acc[image.cloverId]) {
        acc[image.cloverId] = [];
      }
      acc[image.cloverId].push(image);
      return acc;
    }, {});

    return products.map(product => {
      return {
        ...product, 
        images: imageMap[product.cloverId] || []
      }
    })
  }

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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/inventory/:category/:subcategory" element={<DynamicSubcategory />} />
        <Route path="/inventory/:category" element={< DynamicCategory />}/>
        <Route path="/inventory" element={<Inventory />} />
        <Route path="*" element={<NotFound />}/>
        <Route path="/vendor" element={<VendorSetup />} />
      </Routes>
    </Router>
  );
}

export default App
