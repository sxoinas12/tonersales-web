import React, {component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './cart-products.css';
import {CartProd} from './CartProd';
export class CartProducts extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			products:[]
		};
	}

	

	render(){
		const data = this.props.history.location.state.products;
    	const nameList = data.map((item)=>
       
        <CartProd data= {item}  id={item.id} key={item.id}/>
      
        );

		return (
			<div className=" checkout">
				<div className="row header">
					<div className="col-xs-12 col-sm-2 ">
						Το καλάθι μου
					</div>
					<div className="cart_image col-xs-12 col-sm-8 text-left ">
						Image for Cart will go here 
					</div>
					<div className="col-xs-12 col-sm-2 text-right">
						<button className="checkoutBut" onClick={() => console.log(this.props.history.location.state.total)}type="submit">
						Αγορά
						</button>
					</div>
				</div>

				<div className="row">
					{nameList}
				</div>
				<div className="row total">
					<div className="col-xs-12 text-right">
						Total: {this.props.history.location.state.total}€
					</div>

				</div>
			</div>

			);

	}
}