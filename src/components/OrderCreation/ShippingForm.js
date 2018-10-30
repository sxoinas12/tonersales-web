
import React, {component} from 'react';
import './ShippingForm.css';
const Net = require('../helpers/net.js');
const models = require('../helpers/Models.js');

export class ShippingForm extends React.Component {
	constructor(props){
		super(props);
		
	}

	

	 componentDidUpdate(){

	 }

	

	
	render(){
		return(
			<div className="row">
				<div className="col-xs-10 col-xs-offset-1 shipping">
					<div className="row">
						<div className="col-xs-12 text-center">
						 <h3>Αποστολή</h3>

						</div>
					</div>
					<div className="row" >
						<div className="col-xs-12">

						<div className="row">
						<div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<label>Τροπος αποστολής</label>
						    <select className="form-control" onChange={this.props.handleChange} name="ShippingMethod" value={this.props.data.ShippingMethod} >
						      <option>Παραλαβη απο το καταστημα</option>
						      <option>Αποστολή στο Σπιτι</option>
						    </select>
						</div>
						<div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<label>Ονοματεπώνυμο</label>
   							<input type="text" className="form-control" name="FullName" onChange={this.props.handleChange} value={this.props.data.FullName}/>
						</div>
						</div>

						<div className="row">
						<div className="form-group col-xs-12 col-sm-2 col-md-4 col-lg-3">
							<label>Διευθυνση</label>
   							<input type="text" className="form-control" name="Address" onChange={this.props.handleChange} value={this.props.data.Address} />
						</div>
						<div className="form-group col-xs-12 col-sm-2 col-md-4 col-lg-3">
							<label>Πόλη</label>
   							<input type="text" className="form-control" name="Town" onChange={this.props.handleChange} value={this.props.data.Town} />
						</div>
						<div className="form-group col-xs-12 col-sm-2 col-md-4 col-lg-3">
							<label>ΤΚ</label>
   							<input type="text" className="form-control" name="Postcode" onChange={this.props.handleChange} value={this.props.data.Postcode} />
						</div>
						</div>

						<div className="row">
						<div className="form-group col-xs-12 col-sm-3 col-md-4 col-lg-3">
							<label>Κινητό Τηλέφωνο</label>
   							<input type="text" className="form-control" name="Mobilephone" onChange={this.props.handleChange} value={this.props.data.Mobilephone} />
						</div>
						<div className="form-group col-xs-12 col-sm-3 col-md-4 col-lg-3" >
							<label>Σταθερό Τηλέφωνο</label>
   							<input type="text" className="form-control" name="Homephone" onChange={this.props.handleChange} value={this.props.data.Homephone} />
						</div>
						<div className="form-group col-xs-12 col-sm-3 col-md-4 col-lg-3">
							<label>e-mail</label>
   							<input type="text" className="form-control" name="email" onChange={this.props.handleChange} value={this.props.data.email} />
						</div>
						</div>	
						<div className="row">
						<div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<label>Οδηγίες για την παραδοση</label>
   							<input type="text" className="form-control input-lg" name="Order_instructions" onChange={this.props.handleChange} value={this.props.data.Order_instructions}/>
						</div>
						<div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-3">
							<label>Εκδοση παραστατικών</label>
   							<select className="form-control" name="Receipt_type" onChange={this.props.handleChange} value={this.props.data.Receipt_type}>
						      <option>Απόδειξη λιανικής πώλησης</option>
						      <option>Τιμολογιο</option>
						    </select>
						</div>
						</div>					

						</div>
					</div>
					

				</div>
			</div>


			)
	}
}

