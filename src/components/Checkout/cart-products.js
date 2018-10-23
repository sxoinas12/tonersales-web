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
					<div className="col-xs-12 col-sm-2 col-md-2 col-lg-1 ">
						Το καλάθι μου
					</div>
					<div className="cart_image col-xs-12 col-sm-8 col-md-8 col-lg-9 text-left ">
						Image for Cart will go here 
					</div>
					<div className="col-xs-12 col-sm-2 col-lg-2 text-right">
						<button className="checkoutBut" onClick={() => console.log(this.props.history.location.state.total)}type="submit">
							<div className="checkoutButName">
								Αγορά
							</div>
						</button>
					</div>
				</div>

				<div className="row">
					{nameList}
				</div>
				<div className="row total">
					<div className="col-xs-12 text-right">
						Total: {Math.round(this.props.history.location.state.total*100)/100}€
						
					</div>

				</div>
			</div>

			);

	}
}