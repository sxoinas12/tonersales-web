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

	load
	
	render(){



		const data = this.props.products;
    	const nameList = data.map((item)=>
        	<CartProd data= {item}  id={item.id} key={item.id}/>
        );
    	let total = data.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
		return (
			<div className=" checkout">
				<div className="row header">
					<div className="col-xs-12 col-sm-3 col-md-3 col-lg-2 text-left mini_cart_logo title">
						<b>Το καλάθι μου</b>
					</div>
					<div className="cart_image col-xs-6 col-sm-3 col-md-3 col-lg-2  text-center  ">
						
					</div>
					<div className="col-xs-12 col-sm-2 col-sm-offset-4 col-md-2 col-md-offset-4 col-lg-2 col-lg-offset-6 text-right but_pos">
						
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