import React from 'react';
import Slider from './Slider';
import MultiplexMoviesRow from './MultiplexMoviesRow';
import SerialsRow from './SerialsRow';
import LatestMoviesRow from './LatestMoviesRow';

function LandingPage() {
	return (
		<div className="landing-container">
			<Slider />

			<div className="landing-list">
				<div className="categories">
					<LatestMoviesRow />

					<MultiplexMoviesRow />

					<SerialsRow />
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
