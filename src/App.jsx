import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useParams, useLocation } from "react-router-dom";
import Home from "./pages/Home.page";
import TopBar from "./components/TopBar.comp.jsx";
import Navigation from "./components/Navigation.comp.jsx";
import NotFound from "./pages/NotFound.page";
import getProducts from "./util/getProducts.util.js";
import { accessData } from "./context/DataContext.context.jsx";
import ProductsSubcategory from "./pages/ProductsSubcategory.page.jsx";
import ProductsCategory from "./pages/ProductsCategory.page.jsx";
import Inventory from "./pages/Inventory.page.jsx";
import getProductImages from "./util/getProductImages.js";
import VendorSetup from "./pages/VendorSetup.page.jsx";
import ScrollToTop from "./context/ScrollToTop.context.jsx";
import Footer from "./components/Footer.comp.jsx";
import { AnimatePresence, motion } from "framer-motion";
import Search from "./pages/Search.page.jsx";

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

  const pageVariants = {
		initial: {
			opacity: 0,
			x: "-100vw",
		},
		in: {
			opacity: 1,
			x: 0,
		},
		out: {
			opacity: 0,
			x: "100vw",
		},
		initialY: {
			opacity: 0,
			y: "100%",
		},
		inY: {
			opacity: 1,
			y: 0,
		},
		outY: {
			opacity: 0,
			y: "100%",
		},
  };

  const pageTransition = {
		type: "tween"
  };

  const AnimatedRoutes = () => {

    const location = useLocation();

    return (
			<AnimatePresence mode="wait" initial={false}>
				<Routes location={location} key={location.pathname}>
					<Route
						path="/"
						element={
							<motion.div
								initial="initial"
								animate="in"
								exit="out"
								variants={pageVariants}
								transition={pageTransition}>
								<Home />
							</motion.div>
						}
					/>
					<Route 
						path="/search"
						element={
							<motion.div
							initial="initialY"
							animate="inY"
							exit="outY"
							variants={pageVariants}
							transition={pageTransition}>
								<Search />
							</motion.div>
						}
					/>
					<Route
						path="/inventory/:category/:subcategory"
						element={
							<motion.div
								initial="initial"
								animate="in"
								exit="out"
								variants={pageVariants}
								transition={pageTransition}>
								<DynamicSubcategory />
							</motion.div>
						}
					/>
					<Route
						path="/inventory/:category"
						element={
							<motion.div
								initial="initial"
								animate="in"
								exit="out"
								variants={pageVariants}
								transition={pageTransition}>
								<DynamicCategory />
							</motion.div>
						}
					/>
					<Route
						path="/inventory"
						element={
							<motion.div
								initial="initial"
								animate="in"
								exit="out"
								variants={pageVariants}
								transition={pageTransition}>
								<Inventory />
							</motion.div>
						}
					/>
					<Route
						path="*"
						element={
							<motion.div
								initial="initial"
								animate="in"
								exit="out"
								variants={pageVariants}
								transition={pageTransition}>
								<NotFound />
							</motion.div>
						}
					/>
					<Route
						path="/vendor"
						element={
							<motion.div
								initial="initial"
								animate="in"
								exit="out"
								variants={pageVariants}
								transition={pageTransition}>
								<VendorSetup />
							</motion.div>
						}
					/>
				</Routes>
			</AnimatePresence>
		);
  }

  return (
		<Router>
      <TopBar />
      <Navigation />
			<ScrollToTop />
			<AnimatedRoutes />
      <Footer />
		</Router>
  );
}

export default App
