import React, { useEffect, useState } from 'react';
import LandingCards from './LandingCards';

function LatestMoviesRow() {
	let [ slideWidth, setSlideWidth ] = useState(1170);

	const getSlide = () => document.querySelector('.latest');

	const getRightSlide = () => document.querySelector('.right-slide');
	const getLeftSlide = () => document.querySelector('.left-slide');
	
	

	const getSlides = () => document.querySelectorAll('.latest-posters');

	useEffect(() => {
		const rightSlide = getRightSlide();
		const slides = getSlides();
		

		if (slides.length < 8) {
			rightSlide.style.opacity = '0';
		} else {
			rightSlide.style.display = 'flex';
		}
	}, []);

	useEffect(
		() => {
			
			const slides = getSlides();
			const leftSlide = getLeftSlide();
			const rightSlide = getRightSlide();

			

			if (slideWidth === slides.length * 157 - 1000 || slideWidth < 8) {
				rightSlide.style.display = 'none';
			} else {
				rightSlide.style.display = 'flex';
			}

			if (slideWidth === 1170) {
				leftSlide.style.display = 'none';
			} else {
				leftSlide.style.display = 'flex';
			}
		},
		[ slideWidth ]
	);

	const nextClick = () => {
		console.log('next clicked');
		console.log(slideWidth);
		const slide = getSlide();
		const slides = getSlides();

		if (slides.length * 157 > slideWidth) {
			slide.style.transition = '1s ease-out';

			if (slideWidth + 1170 < slides.length * 157) {
				console.log('first condition run');
				slide.style.transform = `translateX(${-slideWidth}px)`;
				setSlideWidth(slideWidth + 1170);
			} else {
				slide.style.transform = `translateX(${-(slideWidth + (slides.length * 157 - slideWidth) - 1000)}px)`;
				setSlideWidth(slideWidth + (slides.length * 157 - slideWidth) - 1000);
			}
		}
	};

	const prevClick = () => {
		const slide = getSlide();

		slide.style.transition = '1s ease-out';
		if (slideWidth - 1170 >= 0) {
			console.log('slide width in positive');
			if (slideWidth === 2340) {
				slide.style.transform = `translateX(${-(slideWidth - 1170 * 2)}px)`;
			} else {
				slide.style.transform = `translateX(${-(slideWidth - 1170)}px)`;
			}
			console.log('operation', slideWidth - 1170);
			setSlideWidth(slideWidth - 1170);
		} else {
			console.log('slide width in negative');
			slide.style.transform = `translateX(${0}px)`;
			setSlideWidth(1170);
		}
	};

	return (
		<div className="latest-movies">
			<div className="poster-container">
				<div className="poster-title first-row">
					<h2>Specials & Latest Movies</h2>
				</div>
				<div className="bomb-container">
					<div className="posters latest">
						<div className="info latest-posters" id="first">
							<LandingCards
								poster={'/latestImages/aarya.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(59, 25, 33, 0), rgba(59, 25, 33, 0.12) 5px, rgba(59, 25, 33, 0.52) 24px, rgba(59, 25, 33, 0.79) 40px, rgb(59, 25, 33) 56px, rgb(59, 25, 33) 100%)'
								}}
								name={'Aarya'}
								genre={'Drama, Thriller, Hotstar Specials'}
								description={"Arya Sareen's blissful family life is jeopardised when greed consume..."}
							/>
						</div>

						<div className="info latest-posters">
							<LandingCards
								poster={'/latestImages/baaghi3.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(64, 23, 20, 0), rgba(64, 23, 20, 0.12) 5px, rgba(64, 23, 20, 0.52) 24px, rgba(64, 23, 20, 0.79) 40px, rgb(64, 23, 20) 56px, rgb(64, 23, 20) 100%)'
								}}
								name={'Baaghi 3'}
								genre={'2 hr 24 min, Action, Hindi, 2020'}
								description={'In a twisted turn of events, when a group of deadly terrorists kidnap...'}
							/>
						</div>

						<div className="info latest-posters">
							<LandingCards
								poster={'/latestImages/angrezimedium.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(40, 28, 23, 0), rgba(40, 28, 23, 0.12) 5px, rgba(40, 28, 23, 0.52) 24px, rgba(40, 28, 23, 0.79) 40px, rgb(40, 28, 23) 56px, rgb(40, 28, 23) 100%)'
								}}
								name={'Angrezi Medium'}
								genre={'2 hr 25 min, Drama, Hindi, 2020'}
								description={'Champak, a simple Mithai-seller, will go to any lengths to fulfil...'}
							/>
						</div>
						<div className="info latest-posters">
							<LandingCards
								poster={'/latestImages/specialops.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(41, 27, 16, 0), rgba(41, 27, 16, 0.12) 5px, rgba(41, 27, 16, 0.52) 24px, rgba(41, 27, 16, 0.79) 40px, rgb(41, 27, 16) 56px, rgb(41, 27, 16) 100%)'
								}}
								name={'Special Ops'}
								genre={'Action, Hotstar Specials'}
								description={'One is a relentless hero, the other is a terror mastermind. In a race...'}
							/>
						</div>
						<div className="info latest-posters">
							<LandingCards
								poster={'/latestImages/tanhaji.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(54, 17, 15, 0), rgba(54, 17, 15, 0.12) 5px, rgba(54, 17, 15, 0.52) 24px, rgba(54, 17, 15, 0.79) 40px, rgb(54, 17, 15) 56px, rgb(54, 17, 15) 100%)'
								}}
								name={'Tanhaji'}
								genre={'2 hr 12 min, Action, Hindi, Marathi, 2020'}
								description={"As Aurangzeb captures the Kondhana fort, Shivaji Maharaj's..."}
							/>
						</div>
						<div className="info latest-posters">
							<LandingCards
								poster={'/latestImages/hundred.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(18, 36, 66, 0), rgba(18, 36, 66, 0.12) 5px, rgba(18, 36, 66, 0.52) 24px, rgba(18, 36, 66, 0.79) 40px, rgb(18, 36, 66) 56px, rgb(18, 36, 66) 100%)'
								}}
								name={'Hundred'}
								genre={'Drama, Hotstar Specials'}
								description={'Two woman with diffrent demons and life expectations cross paths...'}
							/>
						</div>

						<div className="info latest-posters">
							<LandingCards
								poster={'/latestImages/outoflove.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(47, 18, 19, 0), rgba(47, 18, 19, 0.12) 5px, rgba(47, 18, 19, 0.52) 24px, rgba(47, 18, 19, 0.79) 40px, rgb(47, 18, 19) 56px, rgb(47, 18, 19) 100%)'
								}}
								name={'Out of Love'}
								genre={'Drama, Hotstar Specials'}
								description={'A passionate husband. Aperfect marriage. A secret affair. Caught i...'}
							/>
						</div>

						{/* duplicate records */}

						<div className="info latest-posters">
							<LandingCards
								poster={'/latestImages/tanhaji.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(54, 17, 15, 0), rgba(54, 17, 15, 0.12) 5px, rgba(54, 17, 15, 0.52) 24px, rgba(54, 17, 15, 0.79) 40px, rgb(54, 17, 15) 56px, rgb(54, 17, 15) 100%)'
								}}
								name={'Tanhaji'}
								genre={'2 hr 12 min, Action, Hindi, Marathi, 2020'}
								description={"As Aurangzeb captures the Kondhana fort, Shivaji Maharaj's..."}
							/>
						</div>
						<div className="info latest-posters">
							<LandingCards
								poster={'/latestImages/hundred.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(18, 36, 66, 0), rgba(18, 36, 66, 0.12) 5px, rgba(18, 36, 66, 0.52) 24px, rgba(18, 36, 66, 0.79) 40px, rgb(18, 36, 66) 56px, rgb(18, 36, 66) 100%)'
								}}
								name={'Hundred'}
								genre={'Drama, Hotstar Specials'}
								description={'Two woman with diffrent demons and life expectations cross paths...'}
							/>
						</div>

						<div className="info latest-posters">
							<LandingCards
								poster={'/latestImages/outoflove.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(47, 18, 19, 0), rgba(47, 18, 19, 0.12) 5px, rgba(47, 18, 19, 0.52) 24px, rgba(47, 18, 19, 0.79) 40px, rgb(47, 18, 19) 56px, rgb(47, 18, 19) 100%)'
								}}
								name={'Out of Love'}
								genre={'Drama, Hotstar Specials'}
								description={'A passionate husband. Aperfect marriage. A secret affair. Caught i...'}
							/>
						</div>
						<div className="info latest-posters">
							<LandingCards
								poster={'/latestImages/tanhaji.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(54, 17, 15, 0), rgba(54, 17, 15, 0.12) 5px, rgba(54, 17, 15, 0.52) 24px, rgba(54, 17, 15, 0.79) 40px, rgb(54, 17, 15) 56px, rgb(54, 17, 15) 100%)'
								}}
								name={'Tanhaji'}
								genre={'2 hr 12 min, Action, Hindi, Marathi, 2020'}
								description={"As Aurangzeb captures the Kondhana fort, Shivaji Maharaj's..."}
							/>
						</div>
						<div className="info latest-posters">
							<LandingCards
								poster={'/latestImages/hundred.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(18, 36, 66, 0), rgba(18, 36, 66, 0.12) 5px, rgba(18, 36, 66, 0.52) 24px, rgba(18, 36, 66, 0.79) 40px, rgb(18, 36, 66) 56px, rgb(18, 36, 66) 100%)'
								}}
								name={'Hundred'}
								genre={'Drama, Hotstar Specials'}
								description={'Two woman with diffrent demons and life expectations cross paths...'}
							/>
						</div>

						<div className="info latest-posters">
							<LandingCards
								poster={'/latestImages/outoflove.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(47, 18, 19, 0), rgba(47, 18, 19, 0.12) 5px, rgba(47, 18, 19, 0.52) 24px, rgba(47, 18, 19, 0.79) 40px, rgb(47, 18, 19) 56px, rgb(47, 18, 19) 100%)'
								}}
								name={'Out of Love'}
								genre={'Drama, Hotstar Specials'}
								description={'A passionate husband. Aperfect marriage. A secret affair. Caught i...'}
							/>
						</div>
						<div className="info latest-posters">
							<LandingCards
								poster={'/latestImages/tanhaji.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(54, 17, 15, 0), rgba(54, 17, 15, 0.12) 5px, rgba(54, 17, 15, 0.52) 24px, rgba(54, 17, 15, 0.79) 40px, rgb(54, 17, 15) 56px, rgb(54, 17, 15) 100%)'
								}}
								name={'Tanhaji'}
								genre={'2 hr 12 min, Action, Hindi, Marathi, 2020'}
								description={"As Aurangzeb captures the Kondhana fort, Shivaji Maharaj's..."}
							/>
						</div>
						<div className="info latest-posters">
							<LandingCards
								poster={'/latestImages/hundred.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(18, 36, 66, 0), rgba(18, 36, 66, 0.12) 5px, rgba(18, 36, 66, 0.52) 24px, rgba(18, 36, 66, 0.79) 40px, rgb(18, 36, 66) 56px, rgb(18, 36, 66) 100%)'
								}}
								name={'Hundred'}
								genre={'Drama, Hotstar Specials'}
								description={'Two woman with diffrent demons and life expectations cross paths...'}
							/>
						</div>

						<div className="info latest-posters">
							<LandingCards
								poster={'/latestImages/outoflove.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(47, 18, 19, 0), rgba(47, 18, 19, 0.12) 5px, rgba(47, 18, 19, 0.52) 24px, rgba(47, 18, 19, 0.79) 40px, rgb(47, 18, 19) 56px, rgb(47, 18, 19) 100%)'
								}}
								name={'Out of Love'}
								genre={'Drama, Hotstar Specials'}
								description={'A passionate husband. Aperfect marriage. A secret affair. Caught i...'}
							/>
						</div>

						<div className="info latest-posters">
							<LandingCards
								poster={'/latestImages/tanhaji.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(54, 17, 15, 0), rgba(54, 17, 15, 0.12) 5px, rgba(54, 17, 15, 0.52) 24px, rgba(54, 17, 15, 0.79) 40px, rgb(54, 17, 15) 56px, rgb(54, 17, 15) 100%)'
								}}
								name={'Tanhaji'}
								genre={'2 hr 12 min, Action, Hindi, Marathi, 2020'}
								description={"As Aurangzeb captures the Kondhana fort, Shivaji Maharaj's..."}
							/>
						</div>
						<div className="info latest-posters">
							<LandingCards
								poster={'/latestImages/hundred.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(18, 36, 66, 0), rgba(18, 36, 66, 0.12) 5px, rgba(18, 36, 66, 0.52) 24px, rgba(18, 36, 66, 0.79) 40px, rgb(18, 36, 66) 56px, rgb(18, 36, 66) 100%)'
								}}
								name={'Hundred'}
								genre={'Drama, Hotstar Specials'}
								description={'Two woman with diffrent demons and life expectations cross paths...'}
							/>
						</div>

						<div className="info latest-posters">
							<LandingCards
								poster={'/latestImages/outoflove.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(47, 18, 19, 0), rgba(47, 18, 19, 0.12) 5px, rgba(47, 18, 19, 0.52) 24px, rgba(47, 18, 19, 0.79) 40px, rgb(47, 18, 19) 56px, rgb(47, 18, 19) 100%)'
								}}
								name={'Out of Love'}
								genre={'Drama, Hotstar Specials'}
								description={'A passionate husband. Aperfect marriage. A secret affair. Caught i...'}
							/>
						</div>
						<div className="info latest-posters">
							<LandingCards
								poster={'/latestImages/tanhaji.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(54, 17, 15, 0), rgba(54, 17, 15, 0.12) 5px, rgba(54, 17, 15, 0.52) 24px, rgba(54, 17, 15, 0.79) 40px, rgb(54, 17, 15) 56px, rgb(54, 17, 15) 100%)'
								}}
								name={'Tanhaji'}
								genre={'2 hr 12 min, Action, Hindi, Marathi, 2020'}
								description={"As Aurangzeb captures the Kondhana fort, Shivaji Maharaj's..."}
							/>
						</div>
						<div className="info latest-posters">
							<LandingCards
								poster={'/latestImages/hundred.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(18, 36, 66, 0), rgba(18, 36, 66, 0.12) 5px, rgba(18, 36, 66, 0.52) 24px, rgba(18, 36, 66, 0.79) 40px, rgb(18, 36, 66) 56px, rgb(18, 36, 66) 100%)'
								}}
								name={'Hundred'}
								genre={'Drama, Hotstar Specials'}
								description={'Two woman with diffrent demons and life expectations cross paths...'}
							/>
						</div>

						<div className="info latest-posters">
							<LandingCards
								poster={'/latestImages/outoflove.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(47, 18, 19, 0), rgba(47, 18, 19, 0.12) 5px, rgba(47, 18, 19, 0.52) 24px, rgba(47, 18, 19, 0.79) 40px, rgb(47, 18, 19) 56px, rgb(47, 18, 19) 100%)'
								}}
								name={'Out of Love'}
								genre={'Drama, Hotstar Specials'}
								description={'A passionate husband. Aperfect marriage. A secret affair. Caught i...'}
							/>
						</div>
						<div className="info latest-posters">
							<LandingCards
								poster={'/latestImages/tanhaji.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(54, 17, 15, 0), rgba(54, 17, 15, 0.12) 5px, rgba(54, 17, 15, 0.52) 24px, rgba(54, 17, 15, 0.79) 40px, rgb(54, 17, 15) 56px, rgb(54, 17, 15) 100%)'
								}}
								name={'Tanhaji'}
								genre={'2 hr 12 min, Action, Hindi, Marathi, 2020'}
								description={"As Aurangzeb captures the Kondhana fort, Shivaji Maharaj's..."}
							/>
						</div>
						<div className="info latest-posters">
							<LandingCards
								poster={'/latestImages/hundred.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(18, 36, 66, 0), rgba(18, 36, 66, 0.12) 5px, rgba(18, 36, 66, 0.52) 24px, rgba(18, 36, 66, 0.79) 40px, rgb(18, 36, 66) 56px, rgb(18, 36, 66) 100%)'
								}}
								name={'Hundred'}
								genre={'Drama, Hotstar Specials'}
								description={'Two woman with diffrent demons and life expectations cross paths...'}
							/>
						</div>

						<div className="info latest-posters">
							<LandingCards
								poster={'/latestImages/outoflove.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(47, 18, 19, 0), rgba(47, 18, 19, 0.12) 5px, rgba(47, 18, 19, 0.52) 24px, rgba(47, 18, 19, 0.79) 40px, rgb(47, 18, 19) 56px, rgb(47, 18, 19) 100%)'
								}}
								name={'Out of Love'}
								genre={'Drama, Hotstar Specials'}
								description={'A passionate husband. Aperfect marriage. A secret affair. Caught i...'}
							/>
						</div>
					</div>

					<div className="left-slide">
						<i className="fas fa-chevron-left" onClick={prevClick} id="prev"></i>
					</div>
					<div className="right-slide">
						<i className="fas fa-chevron-right" onClick={nextClick} id="next"></i>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LatestMoviesRow;
