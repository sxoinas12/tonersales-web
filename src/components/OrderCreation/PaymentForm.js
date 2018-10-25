
import React, {component} from 'react';
import './PaymentForm.css';
const Net = require('../helpers/net.js');
const models = require('../helpers/OrderModels.js');


export class PaymentForm extends React.Component {
	constructor(props){
		super(props);
		
	}

	

	

	 componentDidUpdate() {
	 	
	 }

	render(){

		
		return(

			<div className="row">
				<div className="col-xs-10 col-xs-offset-1 shipping">
					<div className="row">
						<div className="col-xs-12 text-center">
							<h3>Πληρωμή</h3>
						</div>
					</div>
					<div className="row">
						<div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<h4>Τροπος Πληρωμής</h4>
						    <select className="form-control" name="Payment_type" onChange={this.handleChange} >
						      <option>Κατάθεση</option>
						      <option>Πιστωτική</option>
						    </select>
						</div>
					</div>
				</div>
			</div>
			)
	}
}