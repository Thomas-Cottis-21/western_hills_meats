import ImageGrid from "./ImageGrid.comp";
import traeger from "../assets/images/traegerLogo.svg";
import gozney from "../assets/images/gozneyLogo.svg";
import yoder from "../assets/images/yoderLogo.png";
import ooni from "../assets/images/ooniLogo.svg";

const SmokerHero = () => {

	const imagesArray = [traeger, gozney, yoder, ooni];

    return (
			<section id="smokerHero">
				<h1 className="title">
					Grill more with <span>Western Hills Meats</span>
				</h1>
				<p className="subtitle">
					We supply the best brands at the lowest prices
				</p>

				<ImageGrid images={imagesArray}/>

				<button>Explore Grills & Smokers</button>
			</section>
		);
}

export default SmokerHero;