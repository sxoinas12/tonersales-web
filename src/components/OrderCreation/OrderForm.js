
import React, {component} from 'react';
import './OrderForm.css';
import {Footer} from '../Home/footer';
import {Entrance} from '../Home/entrance';
import SearchBar from '../helpers/searchBar';
import {ShippingForm} from './ShippingForm';
import {OrderReview} from './OrderReview';
import {PaymentForm} from './PaymentForm';

const models = require('../helpers/Models.js');
const OrderService = require('../helpers/parseOrder.js');
const Net = require('../helpers/net.js');
export class OrderForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			products:[],
			total:0,
			shipping:models.ShippingModel,
			payment:models.PaymentModel,
			
		}	
}
	
	loadfromlocal = () => {
		let local = localStorage.getItem('cart_state');
		let access = localStorage.getItem('entrance_state');

	   	try{
		    if(local){
		      this.setState(JSON.parse(local));
		      
		      
		 
		    }
		} catch(e) {
			console.log(e);
		}

		
	}


	change = (event) =>{
		event.preventDefault();
	    let name = event.target.name;
	    let shipping = {...this.state.shipping}
	    shipping[name] = event.target.value;
	    this.setState({shipping})
	    console.log(this.state);
	    }
	    

	submitOrder = (e) =>{
		e.preventDefault();
		console.log(Net.urls.orders);
		let access = localStorage.getItem('entrance_state');
		access = JSON.parse(access);
		let order = {...this.state};
		order.products = order.products.map((item)=>({item:item.id,quantity:item.quantity}));
		Net.post(Net.urls.orders,order
			,access.user.token);
		
		
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
      		 <form className="col-xs-12">

	      		 <OrderReview order= {this.state}/>
	      		 
	      		 <ShippingForm data= {this.state.shipping} handleChange={this.change}/>
	      		
	      		 <PaymentForm  data={this.state.payment} handleChange={this.change}/>

	      		 <div className="row">
	      		 	<div className="col-xs-12 text-center">
		      		 <button type="submit" onClick={this.submitOrder}className="submit"><b>Ολοκλήρωση παραγγέλιας</b></button> 
		      		</div>
	      		 </div>

      		 </form>
      	</div>,

		
		 <div className="row checkfoot" key={2}>
        	<Footer />
      	</div>
      	]
		
			

			)
	}
}

