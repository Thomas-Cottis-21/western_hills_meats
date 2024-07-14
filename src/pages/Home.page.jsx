import CallToAction from "../components/CallToAction.comp.jsx";
import CondimentHero from "../components/CondimentHero.comp.jsx";
import Contact from "../components/Contact.comp.jsx";
import Hero from "../components/Hero.comp.jsx";
import MeatHero from "../components/MeatHero.comp.jsx";
import SmokerHero from "../components/SmokerHero.comp.jsx";
import TopBar from "../components/TopBar.comp.jsx";
import Vendor from "../components/Vendor.comp.jsx";

const Home = () => {
    return (
        <>
            <TopBar/>
            <Hero/>
            <MeatHero/>
            <Vendor />
            <CallToAction/>
            <CondimentHero/>
            <SmokerHero/>
            <Contact/>
        </>
    );
}

export default Home;