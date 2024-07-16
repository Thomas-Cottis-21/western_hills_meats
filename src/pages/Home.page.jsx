import CallToAction from "../components/CallToAction.comp.jsx";
import CondimentHero from "../components/CondimentHero.comp.jsx";
import Contact from "../components/Contact.comp.jsx";
import Hero from "../components/Hero.comp.jsx";
import MeatHero from "../components/MeatHero.comp.jsx";
import SmokerHero from "../components/SmokerHero.comp.jsx";
import TopBar from "../components/TopBar.comp.jsx";
import Vendor from "../components/Vendor.comp.jsx";
import Location from "../components/Location.comp.jsx";
import Navigation from "../components/Navigation.comp.jsx";
import { accessData } from "../context/DataContext.context.jsx";

const Home = () => {

    const { data, setData } = accessData();

    return (
        <>
            <TopBar/>
            <Navigation />
            <Hero/>
            <MeatHero/>
            <Vendor />
            <Location />
            <CallToAction/>
            <CondimentHero/>
            <SmokerHero/>
            <Contact/>
        </>
    );
}

export default Home;