import { useNavigate } from "react-router-dom";

const MeatHero = () => {

	const navigate = useNavigate();

	const handleClick = () => {
		navigate("/inventory/meats");
	}

    return (
        <section id="meatHero">
			<div>
				<h1 className="title">Quality Cuts That Won't Let You Down</h1>
				<p className="subtitle">Explore the benefits of choosing natural, farm-to-table meat</p>
            	<button onClick={handleClick}>Explore Meats</button>
			</div>
        </section>
		);
}

export default MeatHero;