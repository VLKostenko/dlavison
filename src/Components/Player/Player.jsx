import React, { Component } from 'react'

// Style
import './Player.scss';

export default  class Player extends Component {

	constructor(props) {
		super(props);
		this.state = { clicks: 0 };
	}

	render() {
		return (
			<h2>Hello Player!</h2>
		) 
	}
}
