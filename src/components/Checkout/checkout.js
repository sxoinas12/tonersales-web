import React, {component} from 'react';
//import {Bootstrap} from 'react-boostrap';
import 'bootstrap/dist/css/bootstrap.css';
import {Footer} from '../Home/footer';
import {Entrance} from '../Home/entrance';
import './checkout.css';
import SearchBar from '../helpers/searchBar';
import {CartProducts} from './cart-products';
import cartEmitter from '../Events/events';

let update = null;

export class Checkout extends React.Component{
	
	constructor(props){
		super(props);
		
		this.state = {
			products:[],
			total:0,
		};
		cartEmitter.addListener('addProd',this.loadfromlocal);
	}

	
	

   loadfromlocal = () => {
   	var local = localStorage.getItem('cart_state');
   	try{
	    if(local){
	      this.setState(JSON.parse(local));
	    }
	} catch(e) {
		console.log(e);
	}
   }

   componentWillMount(){
   	this.loadfromlocal();
   }
  
	


	render(){
		return(
		[
		<div className="row" key={0}>
		
			
          	
            <div className= "col-xs-12 col-md-3 col-sm-3 title">
              <a href="/"><div className="mini_logo"></div></a>
            </div>
            <div className="col-xs-12  col-md-5 col-sm-6 bar text-left">
              <SearchBar initialValue={this.props.location.state.searchQuery} onSubmit={this.onSubmit} /> 
            </div>
            <div className="col-xs-12 col-md-3 col-sm-3 col-md-offset-1 text-right entrance ">
             <Entrance {...this.props}/> 
            </div> 
      	</div>,

	        <div className="row" key={1}>
	        	<div className="col-xs-12  col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1 col-lg-10 col-lg-offset-1 ">
	        	<CartProducts {...this.state}/>
	        	</div>
	        </div>,
		
		 <div className="row checkfoot" key={2}>
        	<Footer />
      	</div>
      	]
			);
	}
}
