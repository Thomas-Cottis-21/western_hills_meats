import CallToAction from "../components/CallToAction.comp.jsx";
import CondimentHero from "../components/CondimentHero.comp.jsx";
import Contact from "../components/Contact.comp.jsx";
import Hero from "../components/Hero.comp.jsx";
import MeatHero from "../components/MeatHero.comp.jsx";
import SmokerHero from "../components/SmokerHero.comp.jsx";
import Vendor from "../components/Vendor.comp.jsx";
import Location from "../components/Location.comp.jsx";
import { Helmet } from "react-helmet";

const Home = () => {

    return (
        <>
            <Helmet>
                <title>Home</title>
                <meta name="description" content="Visit us in Payson, Utah! We supply the best meats, rubs, grills and smokers in town!"/>
                <meta name="keywords" content="meat, meats, beef, pork, chicken, lamb, turkey, seafood, condiments, rubs, sauces, marinades, accessories, thermometers, pellets, grills, smokers"/>
                <link rel="canonical" href="https://www.ahiporti.com/"/>
            </Helmet>
            <Hero/>
            <MeatHero/>
            <Vendor />
            <Location />
            <CondimentHero/>
            <SmokerHero/>
            <CallToAction/>
            <Contact/>
        </>
    );
}

export default Home;