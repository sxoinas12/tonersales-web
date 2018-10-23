import React, {component} from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './cart-products.css';
import {CartProd} from './CartProd';
import Emitter from '../Events/events';

let update =null;

export class CartProducts extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			products:[],
			total:0,
		};
		
		console.log(this.state);
	}

	
 
	

  


	

	render(){
		const data = this.props.products
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
						<button className="checkoutBut" onClick ={this.check}>
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
						Total: {this.props.total}€
						
					</div>

				</div>
			</div>

			);

	}
}