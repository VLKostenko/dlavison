import React, { Component } from 'react'

// Components
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

// Style
import './About.scss';

//Icons
const img = {
	aboutImage: require('../../Assets/icons/about-foto.svg')
}

class About extends Component {

	constructor(props) {
		super(props);
		this.state = {  };
	}

	render() {
		return (
			<section className="section-about">
				<Header/>
				<div className="section-about-first">
					<div className="section-about-first-logo"></div>
				</div>
				<Footer/>
			</section>
			
		) 
	}
}

export default About;