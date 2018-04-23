import React, {component} from 'react';
//import {Bootstrap} from 'react-boostrap';
import 'bootstrap/dist/css/bootstrap.css';
import './checkout.css';





export class Checkout extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			products:[]
		};
	}

	render(){
		return(
		<div>
			Checkout page
		</div>
			);
	}
}
