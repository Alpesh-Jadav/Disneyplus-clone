import React, { useEffect, useState } from 'react';
import LandingCards from './LandingCards';

function MultiplexMoviesRow() {
	let [ slideWidth, setSlideWidth ] = useState(1170);

	const getSlide = () => document.querySelector('.multiplex-movies .posters');

	const getRightSlide = () => document.querySelector('.multiplex-movies .right-slide');
	const getLeftSlide = () => document.querySelector('.multiplex-movies .left-slide');
	
	

	const getSlides = () => document.querySelectorAll('.multiplex-movies .info');

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
		<div className="multiplex-movies">
			<div className="poster-container">
				<div className="poster-title">
					<h2>Multiplex Movies</h2>
				</div>
				<div className="bomb-container">
					<div className="posters">
						<div className="info" id="first">
							<LandingCards
								id={'first'}
								poster={'/multiplexImages/dilbechara.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(46, 21, 19, 0), rgba(46, 21, 19, 0.12) 5px, rgba(46, 21, 19, 0.52) 24px, rgba(46, 21, 19, 0.79) 40px, rgb(46, 21, 19) 56px, rgb(46, 21, 19) 100%)'
								}}
								name={' Dil Bechara'}
								genre={'Romance, Hotstar Multiplex'}
								description={'Love and hope can bloom even in the direst circumstances. Based...'}
							/>
						</div>

						<div className="info">
							<LandingCards
								poster={'/multiplexImages/lootcase.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(19, 22, 51, 0), rgba(19, 22, 51, 0.12) 5px, rgba(19, 22, 51, 0.52) 24px, rgba(19, 22, 51, 0.79) 40px, rgb(19, 22, 51) 56px, rgb(19, 22, 51) 100%)'
								}}
								name={'Lootcase'}
								genre={'Comedy, Thriller, Hotstar Multiplex'}
								description={'What will you do if you find a bag full of cash? Nandan Kumar faces a...'}
							/>
						</div>

						<div className="info">
							<LandingCards
								poster={'/multiplexImages/khudahafiz.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(20, 17, 12, 0), rgba(20, 17, 12, 0.12) 5px, rgba(20, 17, 12, 0.52) 24px, rgba(20, 17, 12, 0.79) 40px, rgb(20, 17, 12) 56px, rgb(20, 17, 12) 100%)'
								}}
								name={'Khuda Haafiz'}
								genre={'Action, Hotstar Multiplex'}
								description={"A newly married couple's life falls in jeopardy when his wife goes..."}
							/>
						</div>

						<div className="info">
							<LandingCards
								poster={'/multiplexImages/laxmibom.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(52, 43, 15, 0), rgba(52, 43, 15, 0.12) 5px, rgba(52, 43, 15, 0.52) 24px, rgba(52, 43, 15, 0.79) 40px, rgb(52, 43, 15) 56px, rgb(52, 43, 15) 100%)'
								}}
								name={'Laxmi Bomb'}
								genre={'Horror, Hotstar Multiplex'}
								description={'A revenge-seeking transgender ghost is not your everyday spook...'}
							/>
						</div>

						<div className="info">
							<LandingCards
								poster={'/multiplexImages/bhuj.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(16, 20, 43, 0), rgba(16, 20, 43, 0.12) 5px, rgba(16, 20, 43, 0.52) 24px, rgba(16, 20, 43, 0.79) 40px, rgb(16, 20, 43) 56px, rgb(16, 20, 43) 100%)'
								}}
								name={'Bhuj: The Pride of India'}
								genre={'Action, Biopic, Hotstar Multiplex'}
								description={'Based on IAF Squadron Vijay Karnik, this is a true story of...'}
							/>
						</div>

						<div className="info">
							<LandingCards
								poster={'/multiplexImages/bigbull.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(11, 38, 39, 0), rgba(11, 38, 39, 0.12) 5px, rgba(11, 38, 39, 0.52) 24px, rgba(11, 38, 39, 0.79) 40px, rgb(11, 38, 39) 56px, rgb(11, 38, 39) 100%)'
								}}
								name={'The Big Bull'}
								genre={'Drama, Crime, Hotstar Multiplex'}
								description={'A man who sold dreams pulled off the biggest financial scam in...'}
							/>
						</div>
						<div className="info">
							<LandingCards
								poster={'/multiplexImages/sadak2.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(43, 31, 23, 0), rgba(43, 31, 23, 0.12) 5px, rgba(43, 31, 23, 0.52) 24px, rgba(43, 31, 23, 0.79) 40px, rgb(43, 31, 23) 56px, rgb(43, 31, 23) 100%)'
								}}
								name={'Sadak 2'}
								genre={'Romance, Hotstar Multiplex'}
								description={'A challenging new chapter is about to unfold in Ravi Verma’s life in...'}
							/>
						</div>
					</div>

					<div className="left-slide">
						<i className="fas fa-chevron-left" onClick={prevClick} id="prev" />
					</div>
					<div className="right-slide">
						<i className="fas fa-chevron-right" onClick={nextClick} id="next" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default MultiplexMoviesRow;
