
import React, {component} from 'react';
import './OrderForm.css';
import {Footer} from '../Home/footer';
import {Entrance} from '../Home/entrance';
import SearchBar from '../helpers/searchBar';
import {ShippingForm} from './ShippingForm';
import {OrderReview} from './OrderReview';
import {PaymentForm} from './PaymentForm';


const Net = require('../helpers/net.js');


export class OrderForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			products:[],
			total:0
		}	
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
		return (
			[
			
		<div className="row" key={0}>
		
			
          	
            <div className= "col-xs-12 col-md-3 col-sm-3 title">
              <a href="/"><div className="mini_logo"></div></a>
            </div>
            <div className="col-xs-12  col-md-5 col-sm-6 bar text-left">
              <SearchBar initialValue={this.props.location.search} onSubmit={this.onSubmit} /> 
            </div>
            <div className="col-xs-12 col-md-3 col-sm-3 col-md-offset-1 text-right entrance ">
             <Entrance {...this.props}/> 
            </div> 
      	</div>,
      	<div className="row container-fluid padding-top" key={1}>
      		 <div className="col-xs-12">
	      		 <OrderReview order= {this.state}/>
	      	
	      		 <ShippingForm />
	      		
	      		 <PaymentForm />

      		 </div>
      	</div>,

      	<div className="row" key={2}>
      		<div className="col-xs-12 text-center">
      		 <button className="submit"><b>Ολοκλήρωση παραγγέλιας</b></button> 
      		</div>
      	</div>,
	        
		
		 <div className="row checkfoot" key={3}>
        	<Footer />
      	</div>
      	]
		
			

			)
	}
}

