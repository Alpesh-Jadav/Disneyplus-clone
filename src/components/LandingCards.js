import React from 'react';

function LandingCards({ poster, style, name, genre, description }) {
	return (
		<div>
			<img src={poster} alt="poster" />
			<div className="info1" style={style}>
				<div className="name">
					<h2>{name}</h2>
				</div>
				<div className="genre">
					<h3>{genre}</h3>
				</div>
				<div className="description">
					<h4>{description}</h4>
				</div>
				<div className="add-watch-btn">
					<h5>
						<span className="add-icon">+</span>
						<div>ADD TO WATCHLIST</div>
					</h5>
				</div>
			</div>
		</div>
	);
}

export default LandingCards;
