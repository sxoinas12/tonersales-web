
import React, {component} from 'react';
import './PaymentForm.css';
const Net = require('../helpers/net.js');


export class PaymentForm extends React.Component {
	constructor(props){
		super(props);
	}

	componentWillMount(){
		//console.log(this.props.order.products);
		
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
					<form className="row">
						<div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<h4>Τροπος Πληρωμής</h4>
						    <select className="form-control" id="exampleFormControlSelect1">
						      <option>Κατάθεση</option>
						      <option>Πιστωτική</option>
						    </select>
						</div>
					</form>
				</div>
			</div>
			)
	}
}