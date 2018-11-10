import React, {component} from 'react';

const Net = require('../helpers/net.js');

export class Ord extends React.Component{
	
	constructor(props){
		super(props);
		
		this.state = {
				
		};
		
	}

	componentWillMount(){
		
	//	console.log(this.props.info.products)
	}

	render(){

		const mapQuantity = p => p.quantity;
		const mapName = p => p.name
		const mappingFunctionName = p => p.data[0].name;
		const names = this.props.info.products.map(mappingFunctionName);
		const quantity = this.props.info.products.map(mapQuantity);

		const prod = this.props.info.products.map((item,index)=>{
			return(
				<tr key={index}>
					<td>{item.data[0].name}</td>
					<td>{item.quantity}</td>
				</tr>
				)
		})
		return(
			
				<div className="col-lg-6">	
						<table className="table">
						<thead>
					       <tr>
					        <th>Products</th>
					        <th>Quantity</th>
					      
					      </tr>
					    </thead>
					    <tbody>
					    	{prod}
					    
					      	
					      </tbody>
					      </table>
						</div>
			)
	}
	}