import React, {component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';


export class CartProd extends React.Component{
	
	constructor(props){
		super(props);
		
	}

	render(){
		
		return (
			<div className="row">
				 {this.props.data.name}
			</div>

			);

	}
}