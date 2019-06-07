import React, { Component } from 'react'
import { Link } from "react-router-dom";

// Components
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

// Style
import './Home.scss';

//Icons
const img = {
	eqv: require('../../Assets/icons/eqv.png'),
	eqv2: require('../../Assets/icons/eqv2.png'),
	AEON: require('../../Assets/icons/AEON-bg.svg'),
	playBtn: require('../../Assets/icons/play-btn.svg'),
	melody: require('../../Assets/icons/melody.svg'),
	play: require('../../Assets/icons/google-play.svg'),
	facebook: require('../../Assets/icons/Facebook.svg'),
	aeonLogo: require('../../Assets/icons/Aeon-logo.svg'),
	instagram: require('../../Assets/icons/instagram2.svg')
}

export default class Home extends Component {

	constructor(props) {
		super(props)
		this.state = { 
			
		}
	}

	render() {
		return (
			<div>
				<section className="section-home">
					<div className="section-home-container">
						<div className="section-home-about">
							<h1>
								Hi I'm <span>DLAVISON</span>, a creative musician-producer based in San Paulo. 
								I create cool audio projects with a like-minded at Dlaivison group.
							</h1>
						</div>
					</div>
					<section className="section-home-footer">
						<Footer/>
					</section>
				</section>
				<section className="section-first-screen">
					<div className="section-first-screen-wrapper">
						<Header/>
						<div className="section-first-screen-content">
							<div className="section-first-screen-content-playlist">
								<div className="section-first-screen-content-track"><p>track1</p></div>
								<div className="section-first-screen-content-track"><p>track2</p></div>
								<div className="section-first-screen-content-track"><p>track3</p></div>
								<div className="section-first-screen-content-track"><p>track4</p></div>
								<div className="section-first-screen-content-order"><p>Order on iTunes</p></div>
								<button className="section-first-screen-content-album">Play all Album</button>
							</div>
							<div className="section-first-screen-content-about">
								<div className="section-first-screen-content-logo">
									<div className="logo"><img src={img.aeonLogo}  alt="Aeon Logo"/></div>
									<ul className="logo-ul">
										<Link to='/'>
											<li className="logo-ul-li">
												<img src={img.melody}  alt="Aeon Logo"/>
											</li>
										</Link>
										<Link to='/'>
											<li className="logo-ul-li">
												<img src={img.play}  alt="Google-play Logo"/>
											</li>
										</Link>
										<Link to='/'>
											<li className="logo-ul-li">
												<img src={img.instagram}  alt="Instagram Logo"/>
											</li>
										</Link>
										<Link to='/'>
											<li className="logo-ul-li">
												<img src={img.facebook}  alt="Aeon Logo"/>
											</li>
										</Link>
									</ul>
								</div>
								<div className="section-first-screen-content-equalizer">
									<div className="section-first-screen-content-equalizer-wrapper">
										<img src={img.eqv}  alt="Equalizer"/>
										<button className="play-btn"><img src={img.playBtn}  alt="Equalizer"/></button>
									</div>
								</div>
							</div>
						</div>
						<Footer/>
					</div>
				</section>
				<section className="section-second-screen">
					<div className="section-second-screen-wrapper">
						<Header/>
						<div className="section-second-screen-content">
							<div className="section-second-screen-content-playlist">
								<div className="section-second-screen-content-track"><p>track1</p></div>
								<div className="section-second-screen-content-track"><p>track2</p></div>
								<div className="section-second-screen-content-track"><p>track3</p></div>
								<div className="section-second-screen-content-track"><p>track4</p></div>
								<div className="section-second-screen-content-order"><p>Order on iTunes</p></div>
								<button className="section-second-screen-content-album">Play all Album</button>
							</div>
							<div className="section-second-screen-content-about">
								<div className="section-second-screen-content-logo">
									<div className="logo"><p>Sing of Us</p></div>
									<ul className="logo-ul">
										<li className="logo-ul-li">
											<a className="logo-ul-li-links" href="/"><img src={img.melody}  alt="Aeon Logo"/></a>
										</li>
										<li className="logo-ul-li">
											<a className="logo-ul-li-links" href="/"><img src={img.play}  alt="Google-play Logo"/></a>
										</li>
										<li className="logo-ul-li">
											<a className="logo-ul-li-links" href="/"><img src={img.instagram}  alt="Instagram Logo"/></a>
										</li>
										<li className="logo-ul-li">
											<a className="logo-ul-li-links" href="/"><img src={img.facebook}  alt="Aeon Logo"/></a>
										</li>
									</ul>
								</div>
								<div className="section-second-screen-content-equalizer">
									<div className="section-second-screen-content-equalizer-wrapper">
										<img src={img.eqv2}  alt="Equalizer"/>
										<button className="play-btn"><img src={img.playBtn}  alt="Equalizer"/></button>
									</div>
								</div>
							</div>
						</div>
						<Footer/>
					</div>
				</section>
			</div>
		) 
	}
}