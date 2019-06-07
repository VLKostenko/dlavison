import React, { Component } from 'react'
import { Link } from "react-router-dom";

// Style
import './Header.scss';

//Icons
const img = {
	logo: require('../../Assets/icons/DLAIVISON.png')
}


export default class Header extends Component {
	render() {
		return (
			<section className="section-header">
				<Link to='/'>
					<div className="section-header-logo"><img src={img.logo} alt="Logo"/></div>
				</Link>
				<nav className="section-header-nav">
					<Link to='/shop'>
						<li className="section-header-nav-link">Shop</li>
					</Link>
					<Link to='/'>
						<li className="section-header-nav-link">iTunes</li>
					</Link>
					<Link to='/'>
						<li className="section-header-nav-link">Spotify</li>
					</Link>
					<Link to='/about'>
						<li className="section-header-nav-link">Author</li>
					</Link>
				</nav>
			</section>
		)
	}
}
