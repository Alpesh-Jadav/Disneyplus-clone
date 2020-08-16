import React from 'react';
import { Link } from 'react-router-dom';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';
function Navbar({ darkTheme, setDarkTheme}) {

   const switchHandler = () => {
		const mode = document.getElementById("mode-btn");

		if(mode.classList.contains('dark-mode')){
			mode.classList.remove('dark-mode')
		} else {
			mode.classList.add("dark-mode");  
		} 
		 
		setDarkTheme(!darkTheme) 
		    
	}
	
		return (
			<div className={ darkTheme ? `navbar-container header dark` : `navbar-container header`  }>
				<div className="navbar-main">
					<div className="seperator">
						<div className="btn-hamburger">
							<div className="icon-wrapper">
								<span className="line" />
								<span className="line" />
								<span className="line" />
							</div>
							<div className="submenu-container fade-in-quick">
								<div className="menu-wrapper">
									<div className="link-container">
										<Link to="chennels" className={darkTheme && "dropdown-color-1"}>
											<div className="iconClass channels" />
											<div className={darkTheme && 'dropdown-color-1'}>Channels</div>
										</Link>
									</div>

									<div className="link-container">
								     	<Link to="languages" className={darkTheme && "dropdown-color-1"} >
											<div className="iconClass languages" />
											<div className={darkTheme && 'dropdown-color-1'}>Languages</div>
										</Link>
									</div>

									<div className="link-container">
									<Link to="genre" className={darkTheme && "dropdown-color-1"}>
											<div className="iconClass genres" />
											<div className={darkTheme && 'dropdown-color-1'}>Genres</div>
									</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="logo">
						<Link to="/">
						{
							darkTheme ? <img className="img-logo logo-size" src="https://www.hotstar.com/assets/a916ea60d5d222f74cda904c28db07f4.svg" alt="Disney+hotstar" /> : <img className="img-logo" src="\extraImages\disneyLogo.svg" alt="Disney+hotstar" />
						}
								
							</Link>
						</div>

						<div className="navigations">
							<ul>
								<li>
									<div className="tv-container dropdown-container">
										<a href="#" className='nav-link'>
											<div className="tv">TV</div>
										</a>
										<div className="sublink-container slide-up">
											<a href="#" className='dropdown-link'>
												Hotstar Specials
											</a>
											<a href="#" className='dropdown-link'>
												StarPlus
											</a>
											<a href="#" className='dropdown-link'>
												Star Jalsha
											</a>
											<a href="#" className='dropdown-link'>
												Star Vijay
											</a>
											<a href="#" className='dropdown-link'>
												Star Bharat
											</a>

											<a href="#" className='dropdown-link'>
												Life Ok
											</a>
											<a href="#" className='dropdown-link'>
												Asianet
											</a>
											<a href="#" className='dropdown-link'>
												Star Maa
											</a>
											<a href="#" className='dropdown-link'>
												more...
											</a>
										</div>
									</div>
								</li>
								<li>
									<div className="movie-container dropdown-container">
										<a href="#" className={ darkTheme ? 'nav-link' : 'nav-link'}>
											<div>Movies</div>
										</a>

										<div className={ darkTheme ? "sublink-container slide-up" :"sublink-container slide-up"}>
											<a href="#" className='dropdown-link'>
												Hindi
											</a>
											<a href="#" className='dropdown-link'>
												Bengali
											</a>
											<a href="#" className='dropdown-link'>
												Telugu
											</a>
											<a href="#" className='dropdown-link'>
												Malayalam
											</a>
											<a href="#" className='dropdown-link'>
												Tamil
											</a>

											<a href="#" className='dropdown-link'>
												Marathi
											</a>
											<a href="#" className='dropdown-link'>
												English
											</a>
											<a href="#" className='dropdown-link'>
												Kannada
											</a>
										</div>
									</div>
								</li>
								<li>
									<div className="sports-container dropdown-container">
										<a href="#" className={ darkTheme ? 'nav-link' : 'nav-link'}>
											<div>Sports</div>
										</a>

										<div className={ darkTheme ? "sublink-container slide-up" :"sublink-container slide-up"}>
											<a href="#" className='dropdown-link'>
												Cricket
											</a>
											<a href="#" className='dropdown-link'>
												Football
											</a>
											<a href="#" className='dropdown-link'>
												eSports
											</a>
											<a href="#" className='dropdown-link'>
												Formula 1
											</a>
											<a href="#" className='dropdown-link'>
												Badminton
											</a>
											<a href="#" className='dropdown-link'>
												Tennis
											</a>
											<a href="#" className='dropdown-link'>
												Hockey
											</a>
											<a href="#" className='dropdown-link'>
												Wrestling
											</a>
											<a href="#" className='dropdown-link'>
												Martial Arts
											</a>
											<a href="#" className='dropdown-link'>
												Kabaddi
											</a>
											<a href="#" className='dropdown-link'>
												Table Tennis
											</a>
											<a href="#" className='dropdown-link'>
												Khelo India
											</a>
											<a href="#" className='dropdown-link'>
												Athletics
											</a>
											<a href="#" className='dropdown-link'>
												Water Sports
											</a>
										</div>
									</div>
								</li>
								<li>
									<div className="dropdown-container">
										<a href="#" className='nav-link'>
											<div>News</div>
										</a>
									</div>
								</li>
								<li>
									<div className="dropdown-container">
										<a href="#" className='nav-link'>
											<div>Premium</div>
										</a>
									</div>
								</li>
								<li>
									<div className="dropdown-container">
										<a href="#" className='nav-link has-new'>
											<div>Disney+</div>
											<div className="new" />
										</a>
									</div>
								</li>
								<li>
									<div className="dropdown-container">
										<a href="#" className="nav-link">
											<div className="kids" />
										</a>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="seperator2">
						<div className="search-container right-element">
							<input
								className="input-open"
								type="search"
								placeholder="Search"
								id="searchField"
								autoComplete="off"
							/>

							<div className="searchIcon">
								<div className="search-icon" />
							</div>
						</div>
						<div className="right-element user-profile">
							<div role="presentation" className="signIn">
								LOGIN
							</div>
						</div>
						<div onClick={switchHandler} className="switch-container">
							<div className="switchIcon-container">
								<WbSunnyIcon className="switch-icon" />
								<Brightness2Icon className="switch-icon" />
								
							</div>
							<div id="mode-btn" className="switch-btn">

							</div>

						</div>
					</div>
				</div>
			</div>
		)
	
}

export default Navbar