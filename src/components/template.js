import React, {component} from 'react';
//import {Bootstrap} from 'react-boostrap';
import 'bootstrap/dist/css/bootstrap.css';
import './template.css';

import {Register} from './register';
import {Login} from './login';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Redirect} from 'react-router';
import {Navbar} from './navbar';
import {Home} from './Home/home';
import {Search} from './Search/search';

export class Template extends React.Component{

	render(){
		return(
		<div>
		<Router>
			<div className="template">
				
				<Route path="/home" component={Home} />
				<Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
				<Route path="/search" component={Search} />
 			</div>
		</Router>	
		</div>
			);
	}
}

/*
	

*/
