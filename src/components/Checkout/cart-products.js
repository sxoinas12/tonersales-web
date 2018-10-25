import React, {component} from 'react';
import { Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './cart-products.css';
import {CartProd} from './CartProd';
import Emitter from '../Events/events';



let update =null;

export class CartProducts extends React.Component{
	
	constructor(props){
		super(props);
	}


	
	render(){



		const data = this.props.products;
    	const nameList = data.map((item)=>
        	<CartProd data= {item}  id={item.id} key={item.id}/>
        );
    	let total = data.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
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
						
							<div className="checkoutButName">
								{
									<Route render={({ history}) => (
									
								    <button className="checkoutBut"
								      type='button'
								      onClick={() => { 
								      	history.push('/OrderCreation');

								       }}
								    >
								      Αγορά
								    </button>
								    
								  )} />


								}
							</div>
						
					</div>
				</div>

				<div className="row">
					{nameList}
				</div>
				<div className="row total">
					<div className="col-xs-12 text-right">
						Total: {total}€
						
					</div>

				</div>
			</div>

			);

	}
}