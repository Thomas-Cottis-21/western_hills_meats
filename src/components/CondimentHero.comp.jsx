import { useNavigate } from "react-router-dom";

const CondimentHero = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/inventory/condiments");
    }

    return (
        <section id="condimentHero">
            <div className="hero">
                <h1 className="title light">
                    We Stock Booming Flavor
                </h1>
                <button onClick={handleClick}>Explore Condiments</button>
            </div>
        </section>
    );
}

export default CondimentHero;