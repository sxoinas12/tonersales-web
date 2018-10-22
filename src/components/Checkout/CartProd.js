import React, {component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './CartProd.css'

export class CartProd extends React.Component{
	
	constructor(props){
		super(props);
		
	}

	render(){
		
		return (
			<div className="row product">
				<div className="col-xs-3 col-sm-2">
					Product Image
				</div>
				<div className="col-xs-3 col-sm-2">
					<div className="row">
						{this.props.data.name}
					</div>
					<div className="row">
						Id: {this.props.data.id}
					</div>
				</div>
				<div className="col-xs-2 col-sm-4">
					<div className="row">
						Quantity: {this.props.data.quantity}
					</div>
					<div className="row">
						{this.props.data.price} €
					</div>
				</div>
				<div className="col-xs-4 col-sm-2 text-right">
					{this.props.data.price*this.props.data.quantity} €
				</div>
				
			</div>

			);

	}
}