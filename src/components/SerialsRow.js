import React, { useState, useEffect } from 'react';
import LandingCards from './LandingCards';

function SerialsRow() {
	let [ slideWidth, setSlideWidth ] = useState(1170);

	const getSlide = () => document.querySelector('.serials  .posters');

	const getRightSlide = () => document.querySelector('.serials .right-slide');
	const getLeftSlide = () => document.querySelector('.serials .left-slide');
	
	
	const getSlides = () => document.querySelectorAll('.serials .info');

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
		<div className="serials">
			<div className="poster-container">
				<div className="poster-title">
					<h2>Serials Are Back</h2>
				</div>
				<div className="bomb-container">
					<div className="posters">
						<div className="info" id="first">
							<LandingCards
								id={'first'}
								poster={'/serialsImages/yehrishta.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(46, 20, 20, 0), rgba(46, 20, 20, 0.12) 5px, rgba(46, 20, 20, 0.52) 24px, rgba(46, 20, 20, 0.79) 40px, rgb(46, 20, 20) 56px, rgb(46, 20, 20) 100%)'
								}}
								name={'Yeh Rishta'}
								genre={'Drama, StarPlus'}
								description={'The story of a young married couple, Kartik and Naira trying to...'}
							/>
						</div>

						<div className="info">
							<LandingCards
								poster={'/serialsImages/kasouti.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(65, 24, 26, 0), rgba(65, 24, 26, 0.12) 5px, rgba(65, 24, 26, 0.52) 24px, rgba(65, 24, 26, 0.79) 40px, rgb(65, 24, 26) 56px, rgb(65, 24, 26) 100%)'
								}}
								name={'Kasautii'}
								genre={'Romance, StarPlus'}
								description={"A re-imagination of Anurag and Prerna's soul-stirring romance..."}
							/>
						</div>

						<div className="info">
							<LandingCards
								poster={'/serialsImages/anupma.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(22, 60, 57, 0), rgba(22, 60, 57, 0.12) 5px, rgba(22, 60, 57, 0.52) 24px, rgba(22, 60, 57, 0.79) 40px, rgb(22, 60, 57) 56px, rgb(22, 60, 57) 100%)'
								}}
								name={'Anupamaa'}
								genre={'Drama, StarPlus'}
								description={'Anupamaa sacrificed a lot to become a loyal wife, a devoted...'}
							/>
						</div>

						<div className="info">
							<LandingCards
								poster={'/serialsImages/yehrishtey.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(20, 17, 12, 0), rgba(20, 17, 12, 0.12) 5px, rgba(20, 17, 12, 0.52) 24px, rgba(20, 17, 12, 0.79) 40px, rgb(20, 17, 12) 56px, rgb(20, 17, 12) 100%)'
								}}
								name={'Yeh Rishtey Hain'}
								genre={'Drama, StarPlus'}
								description={'Abir and Mishti entered each other’s life like a fresh ray of...'}
							/>
						</div>

						<div className="info">
							<LandingCards
								poster={'/serialsImages/krishna.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(16, 33, 56, 0), rgba(16, 33, 56, 0.12) 5px, rgba(16, 33, 56, 0.52) 24px, rgba(16, 33, 56, 0.79) 40px, rgb(16, 33, 56) 56px, rgb(16, 33, 56) 100%)'
								}}
								name={'RadhaKrishn-Krishn-Arjun'}
								genre={'Mythology, Star Bharat'}
								description={'From Draupadi’s Swayamvar to the battleground of Kurukshetra...'}
							/>
						</div>
						<div className="info">
							<LandingCards
								poster={'/serialsImages/chahate.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(40, 31, 24, 0), rgba(40, 31, 24, 0.12) 5px, rgba(40, 31, 24, 0.52) 24px, rgba(40, 31, 24, 0.79) 40px, rgb(40, 31, 24) 56px, rgb(40, 31, 24) 100%)'
								}}
								name={'Yeh Hai Chahatein'}
								genre={'Drama, StarPlus'}
								description={'Preesha’s life revolves around her son Saaransh, while Rudraksh is...'}
							/>
						</div>
						<div className="info">
							<LandingCards
								poster={'/serialsImages/veishnodevi.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(61, 42, 25, 0), rgba(61, 42, 25, 0.12) 5px, rgba(61, 42, 25, 0.52) 24px, rgba(61, 42, 25, 0.79) 40px, rgb(61, 42, 25) 56px, rgb(61, 42, 25) 100%)'
								}}
								name={'Maa Vaishnodevi'}
								genre={'Mythology, Star Bharat'}
								description={'From her birth to growing up to fight every battle against evil...'}
							/>
						</div>
						<div className="info">
							<LandingCards
								poster={'/serialsImages/krishna.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(16, 33, 56, 0), rgba(16, 33, 56, 0.12) 5px, rgba(16, 33, 56, 0.52) 24px, rgba(16, 33, 56, 0.79) 40px, rgb(16, 33, 56) 56px, rgb(16, 33, 56) 100%)'
								}}
								name={'RadhaKrishn-Krishn-Arjun'}
								genre={'Mythology, Star Bharat'}
								description={'From Draupadi’s Swayamvar to the battleground of Kurukshetra...'}
							/>
						</div>
						<div className="info">
							<LandingCards
								poster={'/serialsImages/chahate.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(40, 31, 24, 0), rgba(40, 31, 24, 0.12) 5px, rgba(40, 31, 24, 0.52) 24px, rgba(40, 31, 24, 0.79) 40px, rgb(40, 31, 24) 56px, rgb(40, 31, 24) 100%)'
								}}
								name={'Yeh Hai Chahatein'}
								genre={'Drama, StarPlus'}
								description={'Preesha’s life revolves around her son Saaransh, while Rudraksh is...'}
							/>
						</div>
						<div className="info">
							<LandingCards
								poster={'/serialsImages/veishnodevi.webp'}
								style={{
									backgroundImage:
										'linear-gradient(rgba(61, 42, 25, 0), rgba(61, 42, 25, 0.12) 5px, rgba(61, 42, 25, 0.52) 24px, rgba(61, 42, 25, 0.79) 40px, rgb(61, 42, 25) 56px, rgb(61, 42, 25) 100%)'
								}}
								name={'Maa Vaishnodevi'}
								genre={'Mythology, Star Bharat'}
								description={'From her birth to growing up to fight every battle against evil...'}
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

export default SerialsRow;
