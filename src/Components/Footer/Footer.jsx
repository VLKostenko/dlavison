import React, { Component } from 'react'
import { Link } from "react-router-dom";

// Style
import './Footer.scss';

//Icons
const img = {
	twitter: require('../../Assets/icons/twitter.svg'),
	instagram: require('../../Assets/icons/instagram.svg'),
	telegram: require('../../Assets/icons/telegram.svg'),
	heart: require('../../Assets/icons/heart.svg'),
}

export default class Footer extends Component {
	render() {
		return (
			<section className="section-footer">
				<div className="section-footer-wrapper">
					<div className="section-footer-social">
						<ul className="section-footer-social-list" >
							<li className="section-footer-social-twitter"><a href="/"><img src={img.twitter} alt="Twitter Logo" /></a></li>
							<li className="section-footer-social-telegram"><a href="/"><img src={img.telegram} alt="Telegram Logo" /></a></li>
							<li className="section-footer-social-instagram"><a href="/"><img src={img.instagram} alt="Instagram Logo" /></a></li>
						</ul>
					</div>
					<div className="section-footer-author">
						<div className="section-footer-author-create">
							<p className="section-footer-author-create-p">Site Created with <span><img src={img.heart} alt="Heart image" /></span></p>
							<a href="https://www.linkedin.com/in/zelenetskyi/" className="section-footer-author-create-link">by Igor Zelenetskyi</a>
							<a href="https://www.linkedin.com/in/volodymyr-kostenko/" className="section-footer-author-create-link">and Vladimir Kostenko</a>
						</div>
						<div className="section-footer-author-owner">
							<p className="section-footer-author-owner-p">Contact</p>
							<p className="section-footer-author-owner-p">Dlaivison Ribamares Silva</p>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
