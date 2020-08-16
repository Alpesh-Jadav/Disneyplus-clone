import React from 'react';

import { Link } from 'react-router-dom';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import TvOutlinedIcon from '@material-ui/icons/TvOutlined';
import MovieCreationOutlinedIcon from '@material-ui/icons/MovieCreationOutlined';
import SportsBaseballOutlinedIcon from '@material-ui/icons/SportsBaseballOutlined';
function FooterPart({darkTheme}) {
	return (
		<div className="footerpart">
				<div className="footer-content">
					<div className="about">
						<div className="about-container">
							<ul>
								<li>
									<h2>About Disney+ Hotstar</h2>
								</li>
								<li>
									<h2>Terms Of Use</h2>
								</li>
								<li>
									<h2>Privacy Policy (New)</h2>
								</li>
								<li>
									<h2>FAQ</h2>
								</li>
								<li>
									<h2>Feedback</h2>
								</li>
								<li>
									<h2>Careers</h2>
								</li>
							</ul>

							<div className="copyright">
								<p>
									© 2020 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and
									programming logos are service marks of, and all related programming visuals and
									elements are the property of, Home Box Office, Inc. All rights reserved.
								</p>
							</div>
						</div>
					</div>

					<div className="social">
						<div className="social-btn">
							<div>
								<h2>Connect with us</h2>
							</div>
							<div className="social-icons">
								<div className="facebook" />
								<div className="twitter" />
							</div>
						</div>
						<div className="playstore">
							<div>
								<h2>Disney+ Hotstar App</h2>
							</div>
							<div className="playstore-icons">
								<div className="google" />
								<div className="apple" />
							</div>
						</div>
					</div>
				</div>
				<div className={darkTheme ? "footerMenubar-container": "footerMenubar-container light-footer"}>
					<ul>
						<li>
							<div className="footerMenu-icon"><Link className="homelink" to="/"><HomeOutlinedIcon /></Link></div>
							<div className="icon-label">Home</div>
						</li>
						<li>
							<div className="footerMenu-icon"><Link className="tvlink" to="/chennels"><TvOutlinedIcon className="tvicon" /></Link></div>
							<div className="icon-label tv">TV</div>
						</li>
						<li>
							<div className="footerMenu-icon">
							<Link to="/">{ darkTheme ? <img src="https://www.hotstar.com/assets/a916ea60d5d222f74cda904c28db07f4.svg" alt="Disney"/> : <img className="footerDLogo" src="\extraImages\disneyLogo.svg" alt="Disney"/> }</Link>
								
							</div>
							
						</li>
						<li>
							<div className="footerMenu-icon"><Link className="movielink" to="/"><MovieCreationOutlinedIcon className="movieicon" /></Link></div>
							<div className="icon-label movie">Movies</div>
						</li>
						<li>
							<div className="footerMenu-icon"><SportsBaseballOutlinedIcon  className="sportsicon"/></div>
							<div className="icon-label sports">Sports</div>
						</li>
					</ul>
				</div>
			</div>
	)
}

export default FooterPart
