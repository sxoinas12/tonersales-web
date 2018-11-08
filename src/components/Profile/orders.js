import React, {component} from 'react';
import './orders.css';
const Net = require('../helpers/net.js');

export class Orders extends React.Component{
	
	constructor(props){
		super(props);
		
		this.state = {
			orders:[],
		};
		
	}
	componentWillMount(){
		let orders = [];
		let access = localStorage.getItem('entrance_state');
		access = JSON.parse(access);
		
		this.props.info.map((item)=>{
			let order = {
			payment_meth_id:"",
			products:[],
			shipping_id:"",
			total:"",
			}
			let id = [];
			item.products.map((item)=>{
				Net.getId(Net.urls.productsId,id,access.user.token)
			})
			.then((data)=>{
				// here must put data to the Order
			})

		})

		if(access.user.token){
			console.log(this.props.info)


			
		}	
	}

	render(){

		const Orders = this.props.info.map((item,index)=>
			<div key={index}>
				Items:{item.products}
			</div>
		);
		return(
			<div className="row">

			  <div>
			  
			  </div>
			</div>)
	}
	}