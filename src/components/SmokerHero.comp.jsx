import HeroCard from "./HeroCard.comp.jsx";

const SmokerHero = () => {
    return (
			<section id="smokerHero">
				<h1 className="title">
					Grill more with <span className="">Western Hills Meats</span>
				</h1>
				<p className="subtitle">
					We supply all the best tools to get you started and to keep you
					going
				</p>
				<button>Explore Grills & Smokers</button>
                <HeroCard />
			</section>
		);
}

export default SmokerHero;