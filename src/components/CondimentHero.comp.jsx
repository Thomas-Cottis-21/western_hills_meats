import explosion2 from "../assets/images/explosion2.png";

const CondimentHero = () => {
    return (
        <section id="condimentHero">
            <div>
                <h1 className="title">
                    We Stock Booming Flavor
                </h1>
                <button>Explore Spices</button>
                <img src={explosion2}/>
            </div>
        </section>
    );
}

export default CondimentHero;