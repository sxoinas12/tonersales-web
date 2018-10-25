import React, {component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './MiniCardProd.css'

export class MiniCardProd extends React.Component{
	render(){
		return (
			<div className="row product">
				<div className="col-xs-6 col-sm-6 col-md-6 col-lg-9  ">
					<div className="row">
						{this.props.data.name}
					</div>
					<div className="row">
						Id: {this.props.data.id}
					</div>
				</div>
				<div className="col-xs-2 col-sm-2 col-md-2 col-lg-1">
					 
						{this.props.data.price} €
				</div>
				<div className="col-xs-2 col-sm-2 col-md-2 col-lg-1 ">
					{this.props.data.quantity}
				</div>
				<div className="col-xs-2 col-sm-2 col-md-2 col-lg-1 ">
					{this.props.data.price*this.props.data.quantity} €
				</div>
			</div>
			);

	}
}