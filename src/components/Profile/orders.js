import React, {component} from 'react';
import './orders.css';


export class Orders extends React.Component{
	
	constructor(props){
		super(props);
		
		this.state = {
			
		};
		
	}
	componentWillMount(){
		console.log(this.props)
	}

	render(){

		const Orders = this.props.info.map((item,index)=>
			<div key={index}>Items:{item.total}</div>
		);
		return(
			<div className="row">

			   <table className="table">
			    <thead>
			      <tr>
			        <th>Products</th>
			        <th>Shipping Method</th>
			        <th>Payment Method</th>
			        <th>Total</th>
			      </tr>
			    </thead>
			    <tbody>
			      <tr>
			        <td>John</td>
			        <td>Doe</td>
			        <td>john@example.com</td>
			      </tr>
			      
			    </tbody>
			  </table>
			</div>)
	}
	}