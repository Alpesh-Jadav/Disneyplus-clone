import React, { useEffect } from 'react';

function Slider() {
	useEffect(() => {
		const slide = document.querySelector('.inner');
		const nextBtn = document.getElementById('right-control');
		const prevBtn = document.getElementById('left-control');
		const interval = 6000;

		let slides = document.querySelectorAll('.slide');
		let index = 1;
		
		const firstClone = slides[0].cloneNode(true);
		const lastClone = slides[slides.length - 1].cloneNode(true);

		firstClone.id = 'first-clone';
		lastClone.id = 'last-clone';

		slide.append(firstClone);
		slide.prepend(lastClone);

		const slideWidth = slides[index].clientWidth;
        

		slide.style.transform = `translateX(${-slideWidth * index}px)`;

		const startSlide = () => {
			setInterval(() => {
				slides = getSlides();
				if (index >= slides.length - 1) return;
				index++;
				slide.style.transition = '.7s ease-out';
				slide.style.transform = `translateX(${-slideWidth * index}px)`;
			}, interval);
		};

		const getSlides = () => document.querySelectorAll('.slide');

		slide.addEventListener('transitionend', () => {
			slides = document.querySelectorAll('.slide');
			if (slides[index].id === firstClone.id) {
				slide.style.transition = 'none';
				index = 1;
				slide.style.transform = `translateX(${-slideWidth * index}px)`;
			}

			if (slides[index].id === lastClone.id) {
				slide.style.transition = 'none';
				index = slides.length - 2;
				slide.style.transform = `translateX(${-slideWidth * index}px)`;
			}
		});

		nextBtn.addEventListener('click', () => {
			slides = getSlides();
			if (index >= slides.length - 1) return;
			index++;
			slide.style.transition = '.7s ease-out';
			slide.style.transform = `translateX(${-slideWidth * index}px)`;
		});
		prevBtn.addEventListener('click', () => {
			if (index <= 0) return;
			index--;
			slide.style.transition = '.7s ease-out';
			slide.style.transform = `translateX(${-slideWidth * index}px)`;
		});

		startSlide();
	}, []);

	return (
		<div className="slider">
			<div className="slides">
				<div className="overflow">
					<div className="inner">
						<div className="slide">
							<div
								className="slide-gradient slide-tray"
								style={{
									backgroundImage:
										'linear-gradient(to left, rgba(59, 25, 33, 0), rgba(66, 20, 30, 0.52) 2px, rgb(50, 38, 29) 0px, rgb(36, 26, 0) 56px, rgb(36, 26, 0) 100%)'
								}}
							>
								<div className="content-container">
									<div className="slide-info-container">
										<div className="slide-title">Chhichhore</div>
										<div className="slide-genre">Hindi . Drama . 2019</div>

										<p className="slide-description">
											Divided by time, united by a tragic incident. In a bittersweet reunion,
											seven middle-aged friends take a walk down the memory lane at the least
											expected place.
										</p>
									</div>
								</div>
							</div>
							<div
								className="special-class"
								style={{ background: 'linear-gradient(to left, rgba(0, 0, 0, 0), rgb(50, 38, 29))' }}
							/>
							<img className="slide-image" src="/sliderImages/chhichhore.webp" alt="photo1" />
						</div>
						<div className="slide">
							<div
								className="slide-gradient slide-tray"
								style={{
									backgroundImage:
										'linear-gradient(to left, rgba(59, 25, 33, 0), rgb(54, 41, 31) 0px, rgb(36, 11, 11) 56px, rgb(36, 11, 11) 100%)'
								}}
							>
								<div className="content-container">
									<div className="slide-info-container">
										<div className="slide-title">Mission Mangal</div>
										<div className="slide-genre">Hindi . Drama . 2019</div>

										<p className="slide-description">
											Based on an extraordinary true story of India’s finest scientists who rose
											above all the hardships and failures to make India the only country to reach
											Mars in its first attempt.
										</p>
									</div>
								</div>
							</div>
							<div
								className="special-class"
								style={{ background: 'linear-gradient(to left, rgba(0, 0, 0, 0), rgb(50, 38, 29))' }}
							/>
							<img className="slide-image" src="/sliderImages/missionmangal.webp" alt="photo2" />
						</div>
						<div className="slide">
							<div
								className="slide-gradient slide-tray"
								style={{
									backgroundImage:
										'linear-gradient(to left, rgba(59, 25, 33, 0), rgba(43, 30, 1, 0.945) 2px, rgb(29, 25, 2) 0px, rgb(29, 25, 2) 56px, rgb(29, 25, 2) 100%)'
								}}
							>
								<div className="content-container">
									<div className="slide-info-container">
										<div className="slide-title">Bala</div>
										<div className="slide-genre">Hindi . Comedy . 2019</div>

										<p className="slide-description">
											Balmukund Shukla’s pride lies in his hair, but premature baldness robs him
											off more than just his looks. With love at stake, will Bala ever have a
											'hairy'tale ending?
										</p>
									</div>
								</div>
							</div>

							<div className="special-class" />
							<img className="slide-image" src="/sliderImages/bala.webp" alt="photo3" />
						</div>

						<div className="slide">
							<div
								className="slide-gradient slide-tray"
								style={{
									backgroundImage:
										'linear-gradient(to left, rgba(59, 25, 33, 0), rgb(50, 38, 29) 0px, rgba(36, 26, 16, 0.959) 56px, rgb(29, 21, 10) 100%)'
								}}
							>
								<div className="content-container">
									<div className="slide-info-container">
										<div className="slide-title">The Lion King</div>
										<div className="slide-genre">Family . 2019</div>

										<p className="slide-description">
											In this reimagining of a classic, The Lion King journeys to the African
											savanna where a young prince overcomes betrayal and tragedy to assume his
											rightful place on Pride Rock.
										</p>
									</div>
								</div>
							</div>
							<div
								className="special-class"
								style={{ background: 'linear-gradient(to left, rgba(0, 0, 0, 0), rgb(50, 38, 29))' }}
							/>
							<img className="slide-image" src="/sliderImages/simba.webp" alt="photo4" />
						</div>
					</div>
				</div>
			</div>

			<div className="controls">

				<div id="left-control">
					<i className="fas fa-chevron-left"></i>
					
				</div>
				<div id="right-control">
					<i className="fas fa-chevron-right"></i>
				</div>
			</div>
		</div>
	);
}

export default Slider;
