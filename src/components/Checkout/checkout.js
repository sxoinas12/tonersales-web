import React, {component} from 'react';
//import {Bootstrap} from 'react-boostrap';
import 'bootstrap/dist/css/bootstrap.css';
import {Footer} from '../Home/footer';
import {Entrance} from '../Home/entrance';
import './checkout.css';
import SearchBar from '../helpers/searchBar';
import {CartProducts} from './cart-products';




export class Checkout extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			products:[]
		};
	}

	render(){
		return(
		<div className="row">
		
			<div className="row">
	            <div className= "col-xs-12 col-md-2 col-lg-2 title">
	              <a href="/"><h3>Mini Logo will go here</h3></a>
	            </div>
	            <div className="col-xs-12 col-md-4 col-lg-3 bar ">
	              <SearchBar /> 
	            </div>
	            <div className="col-xs-12 col-md-offset-3 col-md-3 col-lg-offset-4 col-lg-2  ">
	             <Entrance {...this.props}/> 
	            </div> 
	        </div>

	        <div className="row">
	         <CartProducts {...this.props}/>
	        </div>
		
			 <div className="row checkfoot">
	        	<Footer />
	      	</div>
      	</div>
			);
	}
}
