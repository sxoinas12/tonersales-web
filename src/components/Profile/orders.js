import React, {component} from 'react';
import './orders.css';
import {Ord} from './ord';
const Net = require('../helpers/net.js');

export class Orders extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			orders:[],
		};	
	}



	parseItems = (order,item,token) =>{

	
		let array = item.products.map((prod)=>{
			let product = {
			data:{},
			quantity:null
			};
			return Net.getId(Net.urls.productsId,prod["item"],token)
			.then((data)=>{
				product["data"] = data;
				product["quantity"] = prod["quantity"];
				order["products"].push(product);
				order["total"] = item["total"];
			})
			.catch((e)=>console.log("error:",e));


		});
		return Promise.all(array);
	
		
	}



	trackOrder = () =>{
		//console.log("tracking Order")
	}

	componentWillMount(){
		
		let orders = [];
		let token = localStorage.getItem('token');
		
		this.props.info.map((item)=>{
			let order = {
			payment_meth_id:"",
			products:[],
			shipping_id:"",
			total:"",
			}
			let id = [];
			this.parseItems(order,item,token)
			.then((data)=>{
				this.setState({
					orders: [...this.state.orders,order]
				})
			})
			.catch((e)=>{
				console.log("error",e)
			})
			
		})
		
		
	}

	render(){
		
		const Orders = this.state.orders.map((item,index)=>
			<div className="row box" key={index}>
				<div className="col-xs-12">
					<div className="row ord-head">
						<h4><b>Order {index+1}</b></h4>
					</div>
					<div className="row">
						<Ord info={item} />
						<div className="col-lg-6">
							<table className="table">
							<thead>
					        <tr>
						        <th>Shipping Status</th>
						        <th>Total</th>
					      
					        </tr>
					    	</thead>
					    	<tbody>
					    		<tr key={index}>
									<td>Shipping detail will get by database</td>
									<td>{item.total.toFixed(2)} €</td>
								</tr>
							
							</tbody>
							</table>

						</div>
					</div>
				</div>
			</div>
		);





		return(
			<div className="row pad-left">
			 <div className="row">
			 </div>
			  <div>
			  {Orders}
			  </div>
			</div>)
	}
	}








