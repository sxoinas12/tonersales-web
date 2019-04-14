import React, {component} from 'react';

const Net = require('../helpers/net.js');

export class Ord extends React.Component{
	
	constructor(props){
		super(props);
		
	}

	
	render(){

		const prod = this.props.info.products.map((item,index)=>{
			return(
				<tr key={index}>
					<td>{item.data.name}</td>
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