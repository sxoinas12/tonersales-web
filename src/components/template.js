import React, {component} from 'react';
//import {Bootstrap} from 'react-boostrap';
import 'bootstrap/dist/css/bootstrap.css';
import './template.css';

import {Register} from './register';
import {Login} from './login';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Redirect} from 'react-router';

import {Home} from './Home/home';
import {Search} from './Search/search';
import {Checkout} from './Checkout/checkout';
import {OrderForm} from './OrderCreation/OrderForm';
import {Profile} from './Profile/profile';

export class Template extends React.Component{

	render(){
		return(
		<div>
		<Router>
			<div className="template">
				<Route exact path="/(|:token)" component={Home} />
				<Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
				<Route path="/search/:searchTerm/:page" component={Search} />
				<Route exact path="/search/:searchTerm" component={Search} />
				<Route exact path="/search" component={Search} />
				<Route path="/checkout" component={Checkout} />
				<Route path="/OrderCreation" component={OrderForm} />
				<Route path="/profile" component={Profile} />
		
 			</div>
		</Router>	
		</div>
			);
	}
}

/*
	

*/
