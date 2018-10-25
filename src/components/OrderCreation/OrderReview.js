
import React, {component} from 'react';
import './OrderReview.css';
import {MiniCardProd} from './MiniCardProd';
const Net = require('../helpers/net.js');


export class OrderReview extends React.Component {
	constructor(props){
		super(props);
	}

	componentWillMount(){
		//console.log(this.props.order.products);
		
	}

	render(){

		const data = this.props.order.products;
		
		const total = this.props.order.total;
		const products = data.map((item) => 

			<MiniCardProd data={item} id={item.id} key={item.id}/>

		);
		return(
			<div className="row order">
				<div className="col-xs-10 col-xs-offset-1 shipping">
					<div className="row">
						<div className="col-xs-12 text-center">
							<h3>Επισκόπηση παραγγελιας</h3>
						</div>
					</div>
					<div className="row description">
					 <div className="col-xs-6 col-sm-6 colmd-6 col-lg-9"> 
					 	Προϊόν
					 </div>
					 <div className="col-xs-6 col-sm-2 col-md-2 col-lg-1">
					 	Τιμή
					 </div>
					 <div className="col-xs-2 col-sm-2 col-md-2 col-lg-1">
					 	Ποσότητα
					 </div>
					 <div className="col-xs-2 col-sm-2 col-md-2 col-lg-1">
					 	Σύνολο
					 </div>
					</div>

					<div className="row">
						{products}
					</div>


					<div className="row total">
						<div className="col-xs-9 col-xs-offset-3 col-sm-6 col-sm-offset-6 col-md-6  col-lg-3 col-lg-offset-9">
						<b>Σύνολο προϊόντων (Με ΦΠΑ):	{total.toFixed(2)}</b>
						</div>
					</div>

				</div>
			
			</div>


			)

	}
	}