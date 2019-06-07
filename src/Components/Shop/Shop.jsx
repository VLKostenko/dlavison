import React, { Component } from 'react'

// Components
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

// Style
import './Shop.scss';

//Icons
const img = {
	aeonLogo: require('../../Assets/icons/Aeon_Ver-2.png')
}

class Shop extends Component {

	constructor(props) {
		super(props);
		this.state = {  };
	}

	render() {
		return (
			<section className="section-shop">
				<div className="section-shop-first">
					<Header/>
					<div className="section-shop-first-about">
						<h4 className="h4">
							“I think that music has a decisive and definitive part, because it 
							represents the portrait of the soul, in a level that rationality 
							would never reach.”
						</h4>
						<p>Dlaivison Ribamares Silva</p>
					</div>
					<section className="album-wrapper">
						<div className="album-aeon">
							<div className="album-aeon-about">
								<span className="span">01</span>
								<h1 className="h1">Aeon</h1>
								<p className="p">A new music experience 12 Songs</p>
							</div>
							<div className="album-aeon-logo">
								<img src={img.aeonLogo} alt=""/>
								<button className="album-aeon-logo-btn">$12 / 14 songs</button>
							</div>
						</div>
					</section>
					<Footer/>
				</div>
			</section>
		) 
	}
}

export default Shop;
