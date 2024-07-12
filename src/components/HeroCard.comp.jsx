const HeroCard = (backgroundImageUrl) => {
    return (
			<div className="heroCard">
				<div className="image"></div>
				<div className="content">
					<h1>Explore our stocked accessories</h1>
					<p className="subtitle">
						Upgrade or replenish your outdoor cooking tools with our premium
						smoker and grill accessories. From precision temperature
						gauges to durable cleaning tools and versatile cooking racks,
						our products are designed to elevate every barbecue session.
					</p>
                    <button>See accessories</button>
				</div>
			</div>
		);
}

export default HeroCard;