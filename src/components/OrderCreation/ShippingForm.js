
import React, {component} from 'react';
import './ShippingForm.css';
const Net = require('../helpers/net.js');


export class ShippingForm extends React.Component {
	constructor(props){
		super(props);
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
					<form className="row">
						<div className="col-xs-12">

						<div className="row">
						<div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<label>Τροπος αποστολής</label>
						    <select className="form-control" id="exampleFormControlSelect1">
						      <option>1</option>
						      <option>2</option>
						    </select>
						</div>
						<div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<label>Ονοματεπώνυμο</label>
   							<input type="email" className="form-control" id="exampleInputEmail1" placeholder="Ονοματεπώνυμο"/>
						</div>
						</div>

						<div className="row">
						<div className="form-group col-xs-12 col-sm-2 col-md-4 col-lg-3">
							<label>Διευθυνση</label>
   							<input type="email" className="form-control" id="exampleInputEmail1" />
						</div>
						<div className="form-group col-xs-12 col-sm-2 col-md-4 col-lg-3">
							<label>Πόλη</label>
   							<input type="email" className="form-control" id="exampleInputEmail1" />
						</div>
						<div className="form-group col-xs-12 col-sm-2 col-md-4 col-lg-3">
							<label>ΤΚ</label>
   							<input type="email" className="form-control" id="exampleInputEmail1" />
						</div>
						</div>

						<div className="row">
						<div className="form-group col-xs-12 col-sm-3 col-md-4 col-lg-3">
							<label>Κινητό Τηλέφωνο</label>
   							<input type="email" className="form-control" id="exampleInputEmail1" />
						</div>
						<div className="form-group col-xs-12 col-sm-3 col-md-4 col-lg-3">
							<label>Σταθερό Τηλέφωνο</label>
   							<input type="email" className="form-control" id="exampleInputEmail1" />
						</div>
						<div className="form-group col-xs-12 col-sm-3 col-md-4 col-lg-3">
							<label>e-mail</label>
   							<input type="email" className="form-control" id="exampleInputEmail1" />
						</div>
						</div>	
						<div className="row">
						<div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-6">
							<label>Οδηγίες για την παραδοση</label>
   							<input type="email" className="form-control input-lg" id="exampleInputEmail1" />
						</div>
						<div className="form-group col-xs-12 col-sm-6 col-md-6 col-lg-3">
							<label>Εκδοση παραστατικών</label>
   							<select className="form-control" id="exampleFormControlSelect1">
						      <option>Απόδειξη λιανικής πώλησης</option>
						      <option>Τιμολογιο</option>
						    </select>
						</div>
						</div>					

						</div>
					</form>
					

				</div>
			</div>


			)
	}
}

